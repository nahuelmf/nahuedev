
import React from "react";

const Skills = () => (
  <section className="skills">
    <h2>Habilidades</h2>
    <div className="skills-container">
      {/* UX/UI */}
      <div className="skill-card">
        <h3>🎨 Diseño UX/UI</h3>
        <ul>
          <li>Wireframes y prototipos (Figma)</li>
          <li>Principios de usabilidad</li>
          <li>Diseño responsivo</li>
          <li>Accesibilidad web (WCAG)</li>
          <li>Arquitectura de la información</li>
        </ul>
      </div>

      {/* Programación */}
      <div className="skill-card">
        <h3>💻 Programación</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React App (Hooks, Routing)</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>Firebase, Vite, Vercel</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
