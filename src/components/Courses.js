
import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      title: "Carrera Desarrollo Full Stack",
      institution: "Coderhouse",
      duration: "12 meses",
      year: 2024,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://drive.google.com/file/d/15bGpcnooekEzvE9IDBq2SmQiEINxpVQm/view?usp=sharing",
    },
    {
      title: "Carrera Diseño UX/UI",
      institution: "Coderhouse",
      duration: "10 meses",
      year: 2024,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://drive.google.com/file/d/1FcX16qB4uVs6dVlzi5e8BmWbEo0ItSre/view?usp=sharing",
    },
    {
      title: "Programación Backend",
      institution: "Coderhouse",
      duration: "2 meses",
      year: 2024,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/legacy-certificates/644d6532a42c3200024e6a4e?lang=es",
    },
    {
      title: "React JS",
      institution: "Coderhouse",
      duration: "2 meses",
      year: 2023,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/legacy-certificates/62ddb80e6e679500247e31df?lang=es",
    },
    {
      title: "Desarrollo Web",
      institution: "Coderhouse",
      duration: "2 meses",
      year: 2022,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/legacy-certificates/6220f66b8cc5ce006d4aa768?lang=es",
    },
    {
      title: "JavaScript",
      institution: "Coderhouse",
      duration: "2 meses",
      year: 2022,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/legacy-certificates/62d05a51c8b2730019f8ed9f?lang=es",
    },
    {
      title: "Diseño UX/UI Avanzado",
      institution: "Coderhouse",
      duration: "2 meses",
      year: 2024,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/legacy-certificates/675ee0ffe9330b55412d1b0d?lang=es",
    },
    {
      title: "UX Research",
      institution: "Coderhouse",
      duration: "1 mes",
      year: 2024,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/legacy-certificates/68325a25364c08fc90faac26?lang=es",
    },
    {
      title: "Diseño UX/UI",
      institution: "Coderhouse",
      duration: "2 meses",
      year: 2023,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/legacy-certificates/66ad638bc2db215e73f24c5b?lang=es",
    },
    {
      title: "UX Writing",
      institution: "Coderhouse",
      duration: "1 mes",
      year: 2024,
      logo: "https://cdn-club.lavoz.com.ar/marcas/I58632527.webp",
      certificateLink: "https://pub.coderhouse.com/certificates/a1c0fabc-95ad-4865-8788-b64023a77ec4?v=1",
    },
  ];

  return (
    <section className="courses">
      <h2>Cursos y Certificados</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card animated">
            <img src={course.logo} alt={course.institution} className="course-logo" />
            <h3>{course.title}</h3>
            <p><strong>Institución:</strong> {course.institution}</p>
            <p><strong>Duración:</strong> {course.duration}</p>
            <p><strong>Año:</strong> {course.year}</p>
            <a href={course.certificateLink} target="_blank" rel="noopener noreferrer">
              Ver certificado
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
