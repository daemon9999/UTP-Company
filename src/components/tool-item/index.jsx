export default function ToolItem({label,description, imgSrc, detail, bgColor}) {
    return (
        <div className={"w-full rounded-md  p-5 sm:p-6 md:p-7 lg:p-10 flex flex-col gap-y-3 " + bgColor}>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-normal text-white flex items-center gap-x-4">{label}<detail.icon className="text-white"/></h4>
            <p className="text-primary text-sm sm:text-base">{description}</p>

            <img src={imgSrc} alt="label" className="h-[200px] w-auto  md:w-full md:h-auto rounded-md mt-auto"  />
        </div>
    )
}