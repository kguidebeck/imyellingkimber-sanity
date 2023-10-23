import { ReactElement } from "react";
import { BooleanOptions, defineField } from "sanity";

export const boolean = (
  name: string,
  title?: string | undefined,
  description?: string | ReactElement,
  options?: BooleanOptions
) => {
  const field = defineField({
    name,
    title,
    description,
    type: "boolean",
    options,
  });

  return field;
};
