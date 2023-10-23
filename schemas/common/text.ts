import { ReactElement } from "react";
import { TextOptions, defineField } from "sanity";

export const text = (
  name: string,
  title?: string | undefined,
  description?: string | ReactElement,
  rows?: number,
  options?: TextOptions
) => {
  const field = defineField({
    name,
    title,
    description,
    rows,
    type: "text",
    options,
  });

  return field;
};
