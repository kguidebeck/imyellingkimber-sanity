import { defineField } from "sanity";

export const slug = (name: string = "slug", title?: string | undefined) => {
  const field = defineField({
    name,
    title,
    type: "slug",
    options: {
      source: "title",
      maxLength: 200,
      slugify: (input: string) =>
        input
          .toLowerCase()
          .replace(/[^a-z0-9 -]/gi, "")
          .replace(/\s+/g, "-")
          .slice(0, 200),
    },
    validation: (rule) => rule.required(),
  });

  return field;
};
