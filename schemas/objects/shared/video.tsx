import React from "react";
import { defineField, defineType } from "sanity";
import VideoPreview from "../../../components/VideoPreview";

export default defineType({
  name: "assetVideo",
  type: "object",
  title: "Video",
  fields: [
    defineField({
      name: "video",
      type: "file",
      title: "Video",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      videoName: "video.asset.originalFilename",
      videoUrl: "video.asset.url",
      videoSize: "video.asset.size",
    },
    prepare: ({ videoName, videoUrl, videoSize }) => {
      const kb = videoSize / 1024;
      const mb = videoSize / 1048576;
      return {
        title: videoName || "...",
        subtitle: !videoSize ? "..." : mb < 1 ? `${kb.toFixed(2)} KB` : `${mb.toFixed(2)} MB`,
        media: <VideoPreview url={videoUrl} />,
      };
    },
  },
});
