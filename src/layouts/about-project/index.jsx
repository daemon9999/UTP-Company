export default function AboutProject() {
  return (
    <section id="about-project" className=" bg-primary">
      <div className="w-5/6 container mx-auto  pt-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center text-dark-red font-bold">
          ABOUT EACOP
        </h3>

        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-y-0 gap-x-0 lg:gap-x-10 mt-10">
          <p className="leading-5 sm:leading-6 md:leading-7 text-xs sm:text-sm md:text-base">
            Known for many years as an area where natural oil seepages occurred,
            oil was first discovered by drilling in the Lake Albert area of
            Uganda in 2006. This first discovery led to an extensive period of
            further exploration and appraisal which was completed in 2014. EACOP
            is being constructed in parallel with two upstream development
            projects which are not part of EACOP development and investment,
            known as Tilenga and Kingfisher respectively. Each development will
            consist of a Central Processing Facility (CPF) to separate and treat
            the oil, water and gas produced by the wells. Kingfisher will have 4
            well pads and a CPF with a peak daily capacity of 42000 bbl/d.
            Tilenga has 31 wellpads and a 204000 bbl/d CPF. Tilenga and
            Kingfisher CPFs will be connected by feeder lines to the starting
            point of EACOP at Kabaale. Here the oil will be metered and then
            comingled into a single stream. The Ugandan Refinery project has a
            right of first call to 60,000 bbl/d, with the remainder of the oil
            being exported via EACOP. The pipeline route via Tanzania was confirmed in April 2016 at a
          summit with the East African Heads of State.
          </p>
          <img
            src="https://www.unoc.co.ug/wp-content/uploads/2023/05/EACOP-route.jpg"
            alt="EACOP Photo"
            className="w-full lg:w-1/2"
          />
        </div>
        <p className="leading-5 mt-8 lg:mt-0 sm:leading-6 md:leading-7 text-xs sm:text-sm md:text-base">
           In the period 2016-2018
          the EACOP route was studied and narrowed down to its final width of 30
          metres, allowing to then initiate land surveys and the Environmental
          and Social Impact Assessments. This EACOP will be designed,
          constructed, financed and operated through a dedicated Pipeline
          Company with the same name. The shareholders in EACOP are affiliates
          of the three Upstream joint venture partners (the Uganda National Oil
          Company, TotalEnergies E&P Uganda and CNOOC Uganda) together with the
          Tanzania Petroleum Development Corporation. Shareholdings are
          TotalEnergies 62%, UNOC and TPDC 15% each and CNOOC 8%.
        </p>
      </div>
    </section>
  );
}
