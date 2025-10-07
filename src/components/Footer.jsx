import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-cyan-500/20">
      <p>© {new Date().getFullYear()} Mozilla Club. All rights reserved.</p>
    </footer>
  );
}
