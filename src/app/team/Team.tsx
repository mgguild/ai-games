import React from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  position: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { name: "Andy Agnas", position: "CEO", image: "/team/andy2.png" },
  { name: "Morris Perico", position: "COO", image: "/team/morris2.png" },
  { name: "Rico Zuniga", position: "Advisor", image: "/team/rico2.png" },
  { name: "Mike Reveno", position: "Lead Game Developer", image: "/team/mike2.png" },
  { name: "Kevin Kyle Hendrick Baldo", position: "Full Stack Developer", image: "/team/kevin2.png" },
  { name: "Salvador Amba Jr.", position: "Game Developer", image: "/team/jambs2.png" },
  { name: "Diana Gee Delas Alas", position: "Front End Developer", image: "/team/gee2.png" },
  { name: "Alfonse Cristofano Nasayao", position: "Game Artist", image: "/team/alfonse2.png" },
  { name: "Shanie Polagñe", position: "UI/UX Designer", image: "/team/shanie2.png" },
  { name: "Jess Pardiñas", position: "QA Specialist", image: "/team/jess2.png" },
];

const Team = () => {
  return (
    <section id="team" className="flex flex-col items-center justify-center bg-black w-full py-16">
      <h1 className="text-5xl font-bold text-white text-shadow text-center mt-20 mb-10">TEAM</h1>
      
        <div className="hidden sm:block">
              {/* First row (3 members) */}
            <div className="flex justify-center gap-8 mb-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>

            {/* Second row (4 members) */}
            <div className="flex justify-center gap-8 mb-8">
              {teamMembers.slice(3, 7).map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>

            {/* Third row (3 members) */}
            <div className="flex justify-center gap-8">
              {teamMembers.slice(7, 10).map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
        </div>
        <div className="block lg:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
        </div>
    </section>
  );
};

// Define type for MemberCard props
type MemberCardProps = {
  member: TeamMember;
};

const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
  <div className="relative group">
  <Image src={member.image} width={250} height={300} alt={member.name} className="rounded-lg shadow-lg" />
  <div className="absolute inset-y-8 inset-x-5  flex flex-col items-center justify-end rounded-lg p-4">
    <h2 className="text-white font-bold text-sm text-center">{member.name}</h2>
    <p className="text-indigo-500 text-xs">{member.position}</p>
  </div>
</div>
);

export default Team;
