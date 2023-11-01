export default function PipelineMap() {
  return (
    <section id="pipeline-map" className="bg-primary">
      <div className="container mx-auto w-5/6 flex flex-col items-center gap-y-5 pt-14">
        <h4 className="text-2xl sm:text-3xl md:text-4xl text-center text-dark-red font-bold">
          The Path of Pipeline Route
        </h4>

        <p className="text-sm sm:text-base md::text-lg  font-semibold">The Total Path Length of the Route is equal to 1445.96 km. Additionally, for visualization, this is the demo version of the path which was prepared in initial days.</p>
       
        <div className="w-auto h-[200px] sm:h-[300px] relative md:h-[500px] mx-auto ">
            <a href="https://sjskjsjaqeuexbandiqoxd.on.drv.tw/map.html" target="_blank" className="absolute bottom-4 right-4 sm:bottom-7 sm:right-7 md:bottom-10 md:right-10 bg-blue-400 inline-flex items-center justify-center text-white  font-semibold text-base md:text-lg px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-blue-300 transition-all ">
                Finalized One
            </a>
          <img
            src="/images/pipeline-map.png"
            alt="Pipeline"
            className="w-auto rounded-md h-full"
          />
        </div>
      </div>
    </section>
  );
}
