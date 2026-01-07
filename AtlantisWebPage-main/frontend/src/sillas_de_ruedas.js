import React from "react";
import "./css/parking.css";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagen
import sillasImg from "./img/SERVICIOS/img_sillasderuedas.jpg";

function SillasDeRuedas() {
  return (
    <div className="smart-parking-page">
      {/* Navegación unificada */}
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
            <h1 className="sp-title">Sillas de ruedas</h1>
            <p className="sp-subtitle">
              Contamos con sillas de ruedas para facilitar tu recorrido dentro del centro comercial.
            </p>

            <ul className="sp-bullets">
              <li>Disponemos de <strong>4 sillas</strong> para préstamo.</li>
              <li>Solicítala en el <strong>Punto de Información</strong>.</li>
              <li>Préstamo gratuito con documento de identificación.</li>
            </ul>
          </div>

          {/* Imagen */}
          <figure className="sp-figure">
            <img
              src={sillasImg}
              alt="Sillas de ruedas disponibles para visitantes"
              className="sp-image"
            />
            <figcaption className="sp-figcaption">Disponibilidad sujeta a demanda</figcaption>
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

export { SillasDeRuedas };
