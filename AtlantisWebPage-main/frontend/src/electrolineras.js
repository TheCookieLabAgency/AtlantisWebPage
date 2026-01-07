import React from "react";
import "./css/parking.css";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagen
import electrolinerasimg from "./img/SERVICIOS/img_electrolineras.jpg";

function Electrolineras() {
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

      {/* HERO: texto izq / imagen der */}
      <section className="smart-parking-hero">
        <div className="sp-container">
          {/* Texto */}
          <div className="sp-copy">
            <span className="sp-eyebrow">Servicio</span>
            <h1 className="sp-title">Electrolineras</h1>
            <p className="sp-subtitle">
              Carga tu vehículo eléctrico de forma cómoda y segura.
            </p>

            <ul className="sp-bullets">
              <li>3 puntos de carga disponibles en el centro comercial.</li>
              <li> ⁠Pago a través de la APP EV JUNGLE.</li>
              <li>Fácil acceso y señalización dentro del parqueadero.</li>
            </ul>
          </div>

          {/* Imagen protagonista */}
          <figure className="sp-figure">
            <img
              src={electrolinerasimg}
              alt="Puntos de carga para vehículos eléctricos"
              className="sp-image"
            />
            <figcaption className="sp-figcaption">Puntos de carga</figcaption>
          </figure>
        </div>
      </section>

      {/* Carrusel de marcas */}
      <BrandCarousel />

      <Footer />
    </div>
  );
}

export { Electrolineras };
