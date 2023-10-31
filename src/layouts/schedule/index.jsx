import { AiFillSchedule } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

export default function Schedule() {
  const isSmallPhone = useMediaQuery({
    query: "(min-width:280px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <section id="schedule" className="bg-primary">
      <div className="mx-auto w-5/6 container py-16 space-y-6">
        <h3 className="border-l-8 border-secondary border-b-2 px-3 pb-2 text-xl sm:text-2xl md:text-3xl  lg:text-4xl text-secondary font-bold flex  items-center justify-between">
          Our Progress Schedule
          <AiFillSchedule
            size={isLaptop ? 45 : isTablet ? 35 : isSmallPhone ? 25 : null}
          />
        </h3>


        <div className="w-full h-auto">

          <img src="/images/schedule.png" alt="Team Schedule" className="w-full rounded-md h-auto" />
        </div>
      </div>
    </section>
  );
}
