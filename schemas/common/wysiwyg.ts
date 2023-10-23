import { defineField } from "sanity";

export const wysiwyg = () => {
  const field = defineField({
    name: "Content",
    type: "richText",
  });

  return field;
};
