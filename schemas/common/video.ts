import { ConditionalProperty, defineField } from "sanity";

export const videoType = (hidden?: ConditionalProperty) => {
  const field = defineField({
    name: "videoData",
    title: "Video Upload",
    type: "assetVideo",
    hidden,
  });

  return field;
};
