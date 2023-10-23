import { ReactElement } from "react";
import { StringOptions, StringRule, ValidationBuilder, defineField } from "sanity";

export const string = (
  name: string,
  title?: string | undefined,
  description?: string | ReactElement,
  options?: StringOptions,
  validation?: ValidationBuilder<StringRule, string>
) => {
  const field = defineField({
    name,
    title,
    type: "string",
    description,
    options,
    validation,
  });

  return field;
};
