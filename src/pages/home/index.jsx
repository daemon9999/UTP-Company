import { Link, useLocation } from "react-router-dom";
import AboutProject from "src/layouts/about-project";
import Form from "src/layouts/form";
import MainPoints from "src/layouts/main-points";
import Schedule from "src/layouts/schedule";
import Slogan from "src/layouts/slogan";
import Tools from "src/layouts/tools";
import { MdGroups2 } from "react-icons/md";
import PipelineRoute from "src/layouts/pipeline-route";
import { useEffect } from "react";
import PipelineMap from "src/layouts/pipeline-map";

export default function Home() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)

  }, [location.pathname])
  return (
    <>
    
      <Slogan />
      <AboutProject />
      <MainPoints />
      <PipelineRoute/>
      <PipelineMap/>
      <Tools />
      <Schedule />
      <div className="bg-primary">
        <div className="container mx-auto w-5/6 pb-10">
          <Link
            to={"/team"}
            className="flex items-center gap-x-3 justify-center w-full px-3 py-2 md:py-3 bg-secondary text-white font-semibold text-xl md:text-2xl lg:text-3xl border border-secondary hover:bg-white hover:text-secondary transition-all duration-300 rounded-xl"
          >
            Meet with Our Team
            <MdGroups2 size={30} className="mt-2" />
          </Link>
        </div>
      </div>
      <Form />
    </>
  );
}
