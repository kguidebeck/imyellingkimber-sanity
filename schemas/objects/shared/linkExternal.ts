import { EarthGlobeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "External Link",
  name: "linkExternal",
  type: "object",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({ allowRelative: true, scheme: ["https", "http", "mailto", "tel"] }),
    }),
    defineField({
      title: "Open in new tab?",
      name: "blank",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare(selection) {
      const { title, url } = selection;

      return {
        subtitle: `→ ${url}`,
        title,
      };
    },
  },
});
