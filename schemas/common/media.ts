import { Asset, defineField } from "sanity";
import { string, imageType, videoType } from "./index";

interface MediaParent {
  mediaType: string;
  videoData: {
    video: {
      asset: Asset;
    };
  };
}

export const media = (label?: string) => {
  const isVideoType = ({ parent }: { parent: MediaParent }) => parent?.mediaType !== "video";
  const hasCustomLabel = label ?? "";

  return [
    string(
      "mediaType",
      `Select A ${hasCustomLabel} Media Type`,
      "Upload an image or video by selecting a media type",
      {
        layout: "radio",
        direction: "horizontal",
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      }
    ),
    imageType(({ parent }) => parent?.mediaType !== "image"),
    videoType(isVideoType),
    defineField({
      name: "videoPoster",
      title: "Video Poster",
      type: "assetImage",
      hidden: isVideoType,
      validation: (Rule) =>
        Rule.custom((videoPosterValue, context) => {
          const parent = context.parent as MediaParent;
          const isVideoType = parent.mediaType === "video";
          const hasVideo = parent.videoData && parent.videoData.video.asset;

          if (isVideoType && hasVideo && !videoPosterValue) {
            return "Video Poster is required when Media Type is 'video' and a video is provided.";
          }

          return true;
        }),
    }),
  ];
};
