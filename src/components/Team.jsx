import React from "react";

function TeamCard({ name, role, img, size = "w-52 h-52" }) {
  return (
    <div className="p-4 rounded-xl bg-black/70 text-center border-2 border-cyan-400 shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={img}
        alt={name}
        className={`${size} rounded-full mx-auto mb-4 border-4 border-cyan-400 object-cover`}
      />
      <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-1">{name}</h3>
      <p className="text-sm md:text-base text-gray-300">{role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <div className="py-24 px-6 bg-black text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-16 tracking-wide drop-shadow-lg">
        Meet Our Team
      </h2>

      {/* First row with one big card */}
      <div className="flex justify-center mb-24">
        <TeamCard
          name="Vallen Dsouza"
          role="Captain"
          img="/Images/Team/vallen.jpeg"
          size="w-64 h-64"
        />
      </div>

      {/* Second row with 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-24">
        <TeamCard name="Latika Gupta" role="VCP" img="/Images/Team/vcp.png" />
        <TeamCard name="Alok Shukla" role="Event Head" img="/Images/Team/Event_Head.png" />
        <TeamCard name="Anuj Naik" role="Sr. Tech Head" img="/Images/Team/Sr_Tech.png" />
        <TeamCard name="Vishakha Bhamare" role="PR Head" img="/Images/Team/PR.png" />
      </div>

      {/* Third row with 5 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        <TeamCard name="Aarna Chopdekar" role="SE Representative" img="/Images/Team/SE_Rep.png" />
        <TeamCard name="Anaay Vakharkar" role="Jr. Tech Head" img="/Images/Team/Jr_Tech.png" />
        <TeamCard name="Sanika Gunjal" role="Design Head" img="/Images/Team/Design_head.png" />
        <TeamCard name="Arya Chavan" role="Documentation Head" img="/Images/Team/Doc_head.png" />
        <TeamCard name="Wayne Falcao" role="Digital Content Head" img="/Images/Team/wane.jpeg" />
      </div>
    </div>
  );
}
