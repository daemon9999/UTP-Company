import { createElement } from "react";

export default function Input({as='input', ...props}) {
   const inputElement = createElement(as, {
    className:" text-xs sm:text-sm md:text-base placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base  px-3 py-2 w-full rounded-md flex outline-none bg-white text-black placeholder:text-dark-red " + (as === 'textarea' && 'resize-none'),
    ...props
   })

   return inputElement
}
