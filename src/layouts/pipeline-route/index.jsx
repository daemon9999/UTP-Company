import Button from "src/components/button";

export default function PipelineRoute() {
  return (
    <section id="pipeline-route" className="bg-primary">
      <div className="w-5/6 mx-auto container pt-16 flex flex-col gap-y-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center text-dark-red font-bold">
          Elevation Analysis for The Path
        </h3>

        <span className="w-auto h-[200px] sm:h-[300px] md:h-[500px] mx-auto ">
          <img
            src="/images/pipeline-route.png"
            alt="Pipeline Route Image"
            className="w-auto rounded-md h-full"
          />
        </span>

        <Button
          as="a"
          additionalStyle="w-auto md:px-20 mx-auto"
          href="https://public.tableau.com/views/EACOPElevation/Sheet2?:language=en-US&:display_count=n&:origin=viz_share_link"
          target="_blank"
        >
          Look at more detailed one
        </Button>
      </div>
    </section>
  );
}
