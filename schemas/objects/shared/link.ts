import { BulbOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => [
        Rule.required(),
        Rule.max(70).warning(`Link text length shouldn't be more than 70 characters.`),
      ],
    }),
    defineField({
      name: "urls",
      title: "Url",
      type: "array",
      of: [{ type: "linkInternal" }, { type: "linkExternal" }],
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: {
    select: {
      text: "text",
      url: "url",
    },
    prepare(selection) {
      const { text } = selection;
      return {
        subtitle: "Link",
        title: text,
        media: BulbOutlineIcon,
      };
    },
  },
});
