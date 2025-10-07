import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Cursor />   {/* Neon mouse cursor */}
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><AboutUs /></section>
        <section id="events"><Events /></section>
        <section id="team"><Team /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
