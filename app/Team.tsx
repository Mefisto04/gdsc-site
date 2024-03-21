import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

function Team() {
  const team = [
    {
      Name: "Jaya Singh",
      pos: "GDSC Lead 2023-24",
      img: "/didi.svg",
    },
    {
      Name: "Jaya Singh",
      pos: "GDSC Lead 2023-24",
      img: "/didi.svg",
    },
    {
      Name: "Jaya Singh",
      pos: "GDSC Lead 2023-24",
      img: "/didi.svg",
    },
  ];

  return (
    <div className="py-10 mt-20">
      {/* Header */}
      <p className="flex justify-center mb-16 font-bold text-3xl">Team</p>

      {/* Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-8 w-full">
          {team.map((teamMember, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src={teamMember.img}
                  alt={teamMember.Name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Team;
