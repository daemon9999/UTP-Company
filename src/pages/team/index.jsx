import { Helmet } from "react-helmet";
import UserDetail from "src/components/user-detail";

export default function Team() {
  const users = [
    {
      id: 1,
      name: "Akbar Bunyadzada",
      work: "ML & Process Engineer",
      img: "/images/ekber.png",
    },
    {
      id: 2,
      name: "Shamil Farzalizada",
      work: "CEO / Process Engineer",
    },
    {
      id: 3,
      name: "Murad Masimli",
      work: "Designer & Process Engineer",
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
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UTP Team</title>
        <meta name="description" content="The team members of UTP Company" />
      </Helmet>
      <div className="bg-primary py-10">
        <div className="container w-5/6 mx-auto  flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-12 gap-x-0  md:gap-x-10 flex-wrap">
            {users.map((user) => (
              <UserDetail key={user.id} user={user} />
            ))}
          </div>

          <div className="mt-10 bg-blue-400 flex flex-col gap-y-4 p-6 rounded-md">
            <h3 className="text-white font-bold text-4xl">About Our Team</h3>

            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              labore facere ab nostrum libero assumenda adipisci explicabo, esse
              fugiat dolorem ad dignissimos quos consequatur eum optio dicta
              commodi perferendis nobis nulla corrupti inventore mollitia
              recusandae necessitatibus! Ex minus aut tempora placeat sapiente
              deleniti quis cumque. Rem, dolorem consequuntur. Iusto,
              consectetur.
            </p>

            <div className="w-full h-[200px] bg-dark-red mt-2">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
