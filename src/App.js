// src/App.js
import React from "react";
import "./index.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills"; 
import Contact from "./components/Contact";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills /> 
      <Courses />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
