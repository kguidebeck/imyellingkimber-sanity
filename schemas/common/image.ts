import { ConditionalProperty, defineField } from "sanity";

export const imageType = (hidden?: ConditionalProperty) => {
  const field = defineField({
    name: "imageData",
    title: "Image Upload",
    type: "assetImage",
    hidden,
  });

  return field;
};
