import React from "react";

export default function Contact() {
  return (
    <div className="py-24 px-6 bg-black text-center">
      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-16 tracking-wide"
          style={{ color: "#00BFFF", textShadow: "0 0 15px #00BFFF" }}>
        Contact Us
      </h2>

      {/* Contact Links */}
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-6 text-gray-300 text-lg md:text-xl">
        {[
          { icon: "📧", label: "Mozilla.club@example.com", href: "mailto:mozilla.club@example.com" },
          { icon: "🔗", label: "LinkedIn", href: "https://linkedin.com" },
          { icon: "💻", label: "GitHub", href: "https://github.com" },
          { icon: "📸", label: "Instagram", href: "https://instagram.com" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-3 transition-colors duration-300 hover:text-[#00BFFF]"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* Logo + Council */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16">
        <img
          src="/Images/logo/Mozilla_Logo.jpg"
          alt="Mozilla Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2"
          style={{ borderColor: "#00BFFF", boxShadow: "0 0 15px #00BFFF" }}
        />
        <p className="text-white font-semibold text-xl md:text-2xl mt-2 md:mt-0"
           style={{ textShadow: "0 0 10px #00BFFF" }}>
          Mozilla Council
        </p>
      </div>

      {/* Address */}
      <p className="mt-12 text-gray-400 text-base md:text-lg leading-relaxed">
        Fr. Conceicao Rodrigues College of Engineering <br />
        Bandstand, Bandra (W) <br />
        Mumbai - 400050
      </p>
    </div>
  );
}
