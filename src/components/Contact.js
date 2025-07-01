import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; 
import './Contact.css';

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'nahuelmf.sl@gmail.com',  // ID del servicio de EmailJS
        'prueba', // ID de la plantilla
        formRef.current,
        'uDn8BDDQoU4wkBGIT' // Tu clave pública
      )
      .then(
        () => {
          alert('Mensaje enviado con éxito!');
          formRef.current.reset();
        },
        () => {
          alert('Error al enviar el mensaje. Intente más tarde.');
        }
      );
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Tu nombre" required />
      <input type="email" name="email" placeholder="Tu correo electrónico" required />
      <input type="tel" name="phone" placeholder="Tu teléfono" />
      <textarea name="message" placeholder="Escribí tu mensaje..." rows="5" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

const Footer = () => (
  <footer className="contact">
    <h2>Contacto</h2>

    {/* ✅ Formulario con EmailJS */}
    <ContactForm />

    {/* Datos de contacto adicionales */}
    <p>📧 Email: <a href="mailto:nahuelmf.sl@gmail.com">nahuelmf.sl@gmail.com</a></p>
    <p>📱 WhatsApp: <a href="https://wa.me/5491141615158" target="_blank" rel="noopener noreferrer">+54 9 11 41 61 51 58</a></p>
    <a
  href="https://wa.me/5491141615158"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
    alt="WhatsApp"
    className="whatsapp-icon heartbeat"
  />
</a>


    {/* Redes sociales */}
<div className="social-links flex gap-4 mt-4">
  <a href="https://github.com/nahuelmf" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href="https://www.linkedin.com/in/nahuel-mart%C3%ADn-figueroa-9796831b1/" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
  <a href="https://www.instagram.com/nahuedev/" target="_blank" rel="noopener noreferrer">
    Instagram
  </a>
</div>


    <p className="footer-note">© {new Date().getFullYear()} Nahuel Figueroa</p>
  </footer>
);

export default Footer;
