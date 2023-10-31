import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import UserDetail from "src/components/user-detail";

export default function Team() {
  const users = [
    {
      id: 1,
      name: "Akbar Bunyadzada",
      work: "Geosplat & Process Engineer",
      img: "/images/ekber.png",
    },
    {
      id: 2,
      name: "Shamil Farzalizada",
      work: "CEO / Process Engineer",
      img: "/images/shamil.png",
    },
    {
      id: 3,
      name: "Murad Masimli",
      work: "Software & Process Engineer",
      img: "/images/murad.png",
    },
    {
      id: 4,
      name: "Ilham Karimli",
      work: "Researcher & Process Engineer",
      img: "/images/ilham.png",
    },
    {
      id: 5,
      name: "Elvin Maharramov",
      work: `CFO 
            & Process Engineer`,
      img: "/images/elvin.png",
    },
  ];

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UTP Team</title>
        <meta name="description" content="The team members of UTP Company" />
      </Helmet>
      <div className="bg-primary py-10">
        <div className="container w-5/6 mx-auto  flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-center  justify-center gap-y-12 gap-x-0  md:gap-x-10  md:flex-wrap">
            {users.map((user) => (
              <UserDetail key={user.id} user={user} />
            ))}
          </div>

          <div className="mt-10 bg-blue-400 hidden flex-col gap-y-4 p-6 rounded-md sm:flex">
            <h3 className="text-white font-bold text-4xl">About Our Team</h3>

            <p className="text-white ">
              As a construction company rooted in the principles of chemical
              engineering, our team has leveraged our collective expertise to
              collaboratively tackle the intricate challenges involved in
              designing a pipeline and determining pump sizing for the
              transportation of Ugandan oil to a Tanzanian port. By combining
              our diverse skill sets, we have adeptly addressed the complex
              challenges associated with both the pipeline design and pump
              sizing, ensuring a comprehensive and efficient solution for this
              critical infrastructure project.
            </p>

            <div className="w-auto h-[300px] md:w-full md:h-auto  mt-2">
              <img
                src="/images/team-photo.png"
                alt="UTP Team Photo"
                className="h-full w-auto md:h-auto md:w-full "
              />
            </div>
          </div>
        </div>

        <div className="block sm:hidden px-2 space-y-2 mt-10">
          <h3 className="text-dark-red font-bold text-4xl">About Our Team</h3>

          <p className="text-black ">
            As a construction company rooted in the principles of chemical
            engineering, our team has leveraged our collective expertise to
            collaboratively tackle the intricate challenges involved in
            designing a pipeline and determining pump sizing for the
            transportation of Ugandan oil to a Tanzanian port. By combining our
            diverse skill sets, we have adeptly addressed the complex challenges
            associated with both the pipeline design and pump sizing, ensuring a
            comprehensive and efficient solution for this critical
            infrastructure project.
          </p>
          <div className="w-full h-auto  mt-2 ">
            <img
              src="/images/team-photo.png"
              alt="UTP Team Photo"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </>
  );
}
