import { AiTwotoneTool } from "react-icons/ai";
import ToolItem from "src/components/tool-item";
import { FaEarthAfrica } from "react-icons/fa6";
import { SiGoogleearthengine } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Tools() {
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
    <section id="tools" className="bg-primary">
      <div className="w-5/6 container mx-auto pt-14">
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-secondary flex  gap-x-4 items-center font-bold mb-10 border-b-2 pb-3 border-secondary">
          {" "}
          Main Tools
          <AiTwotoneTool
            size={isLaptop ? 45 : isTablet ? 30 : isSmallPhone ? 24 : null}
          />
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ToolItem
            detail={{ icon: FaEarthAfrica }}
            label={"Google Earth"}
            imgSrc={
              "https://equatorstudios.com/wp-content/uploads/2022/04/googleearth2.jpg"
            }
            description={
              "Google Earth is a powerful geospatial tool that provides users with the ability to explore our planet's landscapes, cities, and natural wonders through interactive maps and satellite imagery."
            }
            bgColor={"bg-blue-500/80"}
          />
          <ToolItem
            bgColor={"bg-gradient-to-tr from-yellow-500 to-green-500"}
            detail={{ icon: SiGoogleearthengine }}
            label={"Aspen HYSYS"}
            imgSrc={
              "data:image/png;base64,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"
            }
            description={"Aspen HYSYS is a widely-used process simulation software that enables engineers and scientists to model and optimize a wide range of chemical and industrial processes."}
          />
          <ToolItem
            detail={{ icon: FaMapMarkerAlt }}
            label={"Tableau"}
            imgSrc={
              "https://apps.joltteam.com/cdn/brikbuild/tableau-icon-pixel-art-5a5f5c4d755c41916225ab5e.brickImg.jpg"
            }
            description={"Tableau is a leading data visualization and business intelligence tool that allows users to create interactive and insightful visualizations from their data, facilitating better decision-making and data-driven insights."}
            bgColor={"bg-gradient-to-tr from-secondary/60 to-secondary"}
          />
        </div>
      </div>
    </section>
  );
}
