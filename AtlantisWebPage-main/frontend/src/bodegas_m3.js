import React from "react";
import "./css/parking.css";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagen
import bodegasImg from "./img/SERVICIOS/img_bodegas3m.jpg";

function BodegasM3() {
  return (
    <div className="smart-parking-page">
      {/* Navegación */}
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
            <h1 className="sp-title">Bodegas M3</h1>

            <p className="sp-subtitle">
              Almacenamiento por m³ dentro de Atlantis. Reserva y gestiona tu espacio en{" "}
              <a
                href="https://m3storage.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                m3storage.co
              </a>.
            </p>

            <ul className="sp-bullets">
              <li>10 bodegas disponibles dentro del centro comercial.</li>
              <li>Reserva y pago 100% en línea.</li>
              <li>Ubicación cómoda para recoger o almacenar tus pertenencias.</li>
            </ul>
          </div>

          {/* Imagen */}
          <figure className="sp-figure">
            <img
              src={bodegasImg}
              alt="Bodegas M3 dentro de Atlantis"
              className="sp-image"
            />
            <figcaption className="sp-figcaption">
              Gestión y reservas en m3storage.co
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

export { BodegasM3 };
