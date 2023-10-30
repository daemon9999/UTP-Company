import classNames from "classnames"
import { useRef, useState } from "react"

export default function Accordion({title, paragraph}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-col gap-y-1">
            <span onClick={() => setIsOpen(!isOpen)} className={classNames("bg-dark-red cursor-pointer hover:bg-white hover:text-dark-red border border-dark-red text-white px-3 py-2 text-sm sm:text-base md:text-lg font-medium rounded", {
                "bg-white !text-dark-red":isOpen
            })}>{title}</span>


            <div  className={classNames("  bg-white  w-full  border border-dark-red rounded-b",{
                    " invisible hidden": !isOpen,
                    " visible flex": isOpen,
            })} >
             <p className={classNames("p-4 text-xs sm:text-sm md:text-base")}>{paragraph}</p>
            </div>
        </div>
    )
}