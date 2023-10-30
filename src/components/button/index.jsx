import { createElement } from "react";

export default function Button({
  as = "button",
  additionalStyle = "",
  children,
  ...props
}) {
  const btnElement = createElement(
    as,
    {
      className:
        `py-2 px-6 flex items-center justify-center rounded bg-dark-red cursor-pointer
         text-white font-semibold hover:bg-white hover:text-dark-red border border-dark-red
          transition-all duration-300 ` +
        additionalStyle,
      ...props,
    },
    children
  );

  return btnElement;
}
