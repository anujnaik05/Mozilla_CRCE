import React, { useState } from "react";

function EventCard({ title, images, description }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="p-6 rounded-xl bg-black/70 border-2 border-cyan-400 shadow-lg hover:scale-105 transition-transform duration-300 relative">
      {/* Rectangular Image */}
      <div className="relative w-full h-64 md:h-72 lg:h-80 mb-4">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover rounded-lg border-2 border-cyan-400 transition duration-300"
        />
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevImage}
            className="bg-cyan-400 text-black p-2 rounded-full opacity-75 hover:opacity-100 transition"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="bg-cyan-400 text-black p-2 rounded-full opacity-75 hover:opacity-100 transition"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Event Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-2">{title}</h3>

      {/* Event Description */}
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
    </div>
  );
}

export default function Events() {
  return (
    <div className="py-24 px-6 bg-black text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-16 tracking-wide drop-shadow-lg">
        Events
      </h2>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-8">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <EventCard
            title="CodeCraft"
            images={["/Images/Events/Crescendo/part1.png", "/image2.jpg", "/image3.jpg"]}
            description="A 24-hour coding marathon where students build open-source projects."
          />
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-8">
          Past Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <EventCard
            title="Unscript"
            images={["/Images/Events/unscript/unscript1.png", "/Images/Events/unscript/unscript2.png", "/Images/Events/unscript/unscript3.png"]}
            description="An event focused on online privacy, open web security, and awareness."
          />
          <EventCard
            title="Technical Seminar on Latex"
            images={["/Images/Events/Latex/part1.png", "/Images/Events/Latex/part2.png", "/Images/Events/Latex/part3.png"]}
            description="A seminar covering online security, tools, and LaTeX usage."
          />
          <EventCard
            title="Code Sprint"
            images={["/Images/Events/Crescendo/part1.png", "/Images/Events/Crescendo/part2.png", "/Images/Events/Crescendo/part3.png"]}
            description="A high-energy coding sprint challenge for participants."
          />
          <EventCard
            title="Expert Talk: Innovation & TRL"
            images={["/Images/Events/webinars/Expert1.png", "/Images/Events/webinars/E1_continue.png", "/Images/Events/webinars/E1_3rd.png"]}
            description="Insightful session on innovation development & Technology Readiness Levels."
          />
          <EventCard
            title="Startup Day Workshop"
            images={["/Images/Events/Startup_day/part1.png", "/Images/Events/Startup_day/part2.png", "/Images/Events/Startup_day/part3.png"]}
            description="An interactive workshop celebrating National Startup Day, aimed at inspiring students with entrepreneurial journeys and startup ecosystem insights."
          />
          <EventCard
            title="PixelEase"
            images={["/Images/Events/Pixel/part1.png", "/Images/Events/Pixel/part2.png", "/Images/Events/Pixel/part3.png"]}
            description="A creative event focused on digital design and innovation, providing students a platform to showcase their artistic and technical design abilities."
          />
          <EventCard
            title="Modern Tools in AIML"
            images={["/Images/Events/AIML/part1.png", "/Images/Events/AIML/part2.png", "/Images/Events/AIML/part3.png"]}
            description="A workshop demonstrating the practical applications of cutting-edge tools in Artificial Intelligence and Machine Learning to enhance technical skills."
          />
          <EventCard
            title="Entrepreneurship & Innovation"
            images={["/Images/Events/Entrepreneurship/part1.png", "/Images/Events/Entrepreneurship/part2.png", "/Images/Events/Entrepreneurship/part3.png"]}
            description="A session introducing students to the prospects of entrepreneurship, encouraging innovative thinking and exploring startups as viable career paths."
          />
        </div>
      </div>
    </div>
  );
}
