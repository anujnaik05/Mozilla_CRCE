import React from "react";

export default function AboutUs() {
  return (
    <div className="py-20 px-6 bg-black text-center">
      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-16 drop-shadow-lg">
        About Us
      </h2>

      {/* Mission, Vision, Plan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Mission */}
        <div className="p-8 rounded-3xl bg-black/70 border-2 border-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300">
          <h3 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-bold">
            Mission
          </h3>
          <p className="text-sm md:text-lg leading-relaxed text-gray-300">
            Our mission is to keep the Internet a global public resource — open, 
            accessible, and safe for everyone. We promote open-source values, 
            encourage collaboration, and empower individuals to contribute to a 
            free and inclusive digital world.
          </p>
        </div>

        {/* Vision */}
        <div className="p-8 rounded-3xl bg-black/70 border-2 border-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300">
          <h3 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-bold">
            Vision
          </h3>
          <p className="text-sm md:text-lg leading-relaxed text-gray-300">
            We envision hosting engaging seminars and workshops that introduce 
            students to open-source technologies. By inspiring creativity and 
            fostering collaboration, we aim to empower participants to contribute 
            to open communities and drive innovation.
          </p>
        </div>

        {/* Plan */}
        <div className="p-8 rounded-3xl bg-black/70 border-2 border-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300">
          <h3 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-bold">
            Plan
          </h3>
          <p className="text-sm md:text-lg leading-relaxed text-gray-300">
            We aim to keep members updated with the latest technologies and 
            emerging trends. Through activities, discussions, and projects, we 
            encourage continuous learning while contributing to a free, open, 
            and accessible web.
          </p>
        </div>
      </div>
    </div>
  );
}
