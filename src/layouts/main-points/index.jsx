import { Disclosure } from "@headlessui/react";
import Accordion from "src/components/accordion";

export default function MainPoints() {
  return (
    <section id="mainpoints" className="bg-primary">
      <div className="w-5/6 container mx-auto pt-16">
        <h3 className="text-2xl sm:text-3xl md:text-5xl bg-dark-red w-full px-3 rounded py-3 font-bold text-white">
          MAIN POINTS DONE
        </h3>
        <div className="mt-5 sm:mt-7 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-10">
          <Accordion
            title={"Pipeline Design"}
            paragraph={`Pipeline design of the project was done in Aspen Hysys app. Calculated pressure drop across the pipe are 9-10 MPa. 
                `}
          />
          <Accordion
            title={"Pump Design"}
            paragraph={`Pump sizing was implemented in Aspen Hysys simulation tool. The type of the pipe chosen is positive displacement pump with the efficiency 75 %.`}
          />

          <Accordion
            title={"Pipeline Route"}
            paragraph={`Optimum pipeline route was drawn on Google Earth Pro software by concluding its optimum length as 1439 km.`}
          />

          <Accordion
            title={"Select minimum cost for Pumps"}
            paragraph={`According to the financial analysis and design calculations, project's estimated cost of construction is set to be 1.5 billion dollar.`}
          />
        </div>
      </div>
    </section>
  );
}
