import React from "react";

export default function AboutUs() {
  return (
    <div className="py-24 px-6 bg-black text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-16 tracking-wide drop-shadow-lg">
        About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">
        {/* Mission */}
        <div className="p-8 rounded-xl neon-border bg-black/70 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-semibold">Mission</h3>
          <p className="text-gray-300 text-base md:text-lg">
            To ensure the Internet is a global public resource, open and accessible to all.
          </p>
        </div>

        {/* Vision */}
        <div className="p-8 rounded-xl neon-border bg-black/70 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-semibold">Vision</h3>
          <p className="text-gray-300 text-base md:text-lg">
            Conduct seminars and workshops which introduce you to open source technologies.
          </p>
        </div>

        {/* Plan */}
        <div className="p-8 rounded-xl neon-border bg-black/70 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-semibold">Plan</h3>
          <p className="text-gray-300 text-base md:text-lg">
            Keep you updated with the latest technologies, help you learn new things, and keep the web free and open to all.
          </p>
        </div>
      </div>
    </div>
  );
}
