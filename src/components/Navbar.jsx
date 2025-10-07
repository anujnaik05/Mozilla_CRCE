import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md z-50 border-b border-blue-700/20 shadow-lg">
      <div className="text-2xl font-extrabold text-blue-400 drop-shadow-md">
        Mozilla Campus Club
      </div>
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
