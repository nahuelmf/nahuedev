import React from "react";



const Header = () => (
  <header className="header">
    <div className="header-content">
    <video
        src="/assets/NahuelmartinFigueroa.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fade-in"
        style={{ maxWidth: "100%", height: "20rem", borderRadius: "1rem" }}
      />
    </div>
  </header>
);

export default Header;

