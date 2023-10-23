import { defineField } from "sanity";

export const cta = () => {
  const field = defineField({
    name: "cta",
    type: "link",
  });

  return field;
};
