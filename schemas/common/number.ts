import { ReactElement } from "react";
import { NumberOptions, NumberRule, ValidationBuilder, defineField } from "sanity";

export const number = (
  name: string,
  title?: string | undefined,
  description?: string | ReactElement,
  options?: NumberOptions,
  validation?: ValidationBuilder<NumberRule, string>
) => {
  const field = defineField({
    name,
    title,
    type: "number",
    description,
    options,
    validation,
  });

  return field;
};
