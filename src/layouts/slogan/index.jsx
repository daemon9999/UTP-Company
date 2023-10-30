import { MdEngineering } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import Button from "src/components/button";

export default function Slogan() {
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
    <section id="slogan-part" className="bg-primary py-10">
      <div className="w-5/6 container mx-auto ">
        <h2 className="font-bold text-4xl sm:text-5xl  lg:text-7xl tracking-wider text-center leading-normal">
          <span className="text-dark-red">Pioneering</span> Progress,
          <br />
          <span className="text-dark-red">Processing</span> Prosperity.
        </h2>

        <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row items-center justify-center mt-8 md:mt-10 gap-x-0 md:gap-x-16 mb-10">
          <Button
            as="a"
            href="https://wa.me/+994505429229"
            target="_blank"
            additionalStyle="h-12 md:h-14 lg:h-16  w-full md:w-[300px] text-xl md:text-2xl lg:text-3xl"
          >
            Contact Us
          </Button>
          <MdEngineering
            size={isLaptop ? 80 : isTablet ? 64 : isSmallPhone ? 50 : null}
            className="text-dark-red"
          />
        </div>
        <div className=" w-full relative h-[200px] sm:h-auto  ">
          <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-dark-red/60 to-transparent rounded-lg" />
          <img
            src="/images/slogan.png"
            alt="Slogan Image"
            className="h-full w-full mx-auto rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}
