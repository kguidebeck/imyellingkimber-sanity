import { defineField } from "sanity";

export default defineField({
  title: "Rich Text",
  name: "richText",
  type: "array",
  of: [{ type: "block" }],
});
