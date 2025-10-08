import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 sm:px-8 py-4 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md z-50 border-b border-blue-700/20 shadow-lg">
      
      {/* Responsive Title */}
      <div className="font-extrabold text-cyan-400 drop-shadow-md leading-tight">
        {/* Mobile: Mozilla Campus / Club on next line */}
        <span className="block sm:hidden text-lg leading-tight text-center">
          Mozilla Campus
          <br />
          Club
        </span>

        {/* Laptop & Tablet: All in one line */}
        <span className="hidden sm:block text-2xl md:text-3xl lg:text-4xl">
          Mozilla Campus Club
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8">
        {["Home", "About", "Events", "Team", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-300 ease-in-out"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
