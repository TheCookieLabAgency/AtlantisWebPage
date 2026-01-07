import React from "react";
import "./css/parking.css";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagen
import enfermeriaImg from "./img/SERVICIOS/img_enfermeria.jpg";

function Enfermeria() {
  return (
    <div className="smart-parking-page">
      <Navigation />
      <Whatsapp />

      {/* Banner simple */}
      <header className="main-header-font-parking">
        <div className="banner-title">
          <h1>Servicios</h1>
        </div>
      </header>

      {/* HERO: texto izq / imagen der (imagen protagonista) */}
      <section className="smart-parking-hero">
        <div className="sp-container">
          {/* Texto */}
          <div className="sp-copy">
            <span className="sp-eyebrow">Servicio</span>
            <h1 className="sp-title">Punto de Primeros Auxilios</h1>
            <p className="sp-subtitle">
              Atención inmediata dentro del centro comercial con el respaldo de nuestro
              equipo de seguridad. Estamos listos para ayudarte cuando lo necesites.
            </p>

            <ul className="sp-bullets">
              <li>Disponibilidad durante el horario del centro comercial.</li>
              <li>Personal capacitado para situaciones de primeros auxilios.</li>
              <li>Acompañamiento de seguridad para tu tranquilidad.</li>
            </ul>
          </div>

          {/* Imagen grande a la derecha */}
          <figure className="sp-figure">
            <img
              src={enfermeriaImg}
              alt="Punto de Primeros Auxilios y Seguridad"
              className="sp-image"
            />
            <figcaption className="sp-figcaption">
              Atención y seguridad para visitantes
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Carrusel de marcas */}
      <BrandCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export { Enfermeria };
