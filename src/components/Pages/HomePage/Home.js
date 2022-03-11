import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Music from "../Music/Music";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer.js";
import { aboutObject } from "../About/AboutData";

export default function Home() {
  return (
    <>
      <About {...aboutObject} />
      <Projects />
      <Music />
      <Contact />
      <Footer />
    </>
  );
}
