import React from "react";
import "./css/parking.css";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagen tarifas
import smartParkingImg from "./Material/TARIFAS PARQUEADERO 2025.png";

function SmartParking() {
  return (
    <div className="smart-parking-page">
      <Navigation />
      <Whatsapp />

      {/* Banner simple (opcional) */}
      <header className="main-header-font-parking">
        <div className="banner-title">
          <h1>Servicios</h1>
        </div>
      </header>

      {/* HERO dividido: texto izq / imagen der (imagen más grande) */}
      <section className="smart-parking-hero">
        <div className="sp-container">
          {/* Texto (izquierda en desktop) */}
          <div className="sp-copy">
            <span className="sp-eyebrow">Servicio</span>
            <h1 className="sp-title">Smart Parking</h1>
            <p className="sp-subtitle">
              Ingresa sin contacto, paga fácil y estaciona sin complicarte. 
              Vive una experiencia ágil y segura con nuestras tarifas claras.
            </p>

            <ul className="sp-bullets">
              <li>Lectura de placas: entrada y salida sin tickets.</li>
              <li>Pagos rápidos con múltiples medios.</li>
              <li>Tarifas actualizadas y visibles.</li>
            </ul>

            <div className="sp-ctas">
      
            </div>
          </div>

          {/* Imagen (más grande) */}
          <figure className="sp-figure" id="tarifas">
            <img
              src={smartParkingImg}
              alt="Tarifas de parqueadero 2025 - Smart Parking"
              className="sp-image"
            />
            <figcaption className="sp-figcaption">Tarifas 2025</figcaption>
          </figure>
        </div>
      </section>

      {/* Carrusel de marcas */}
      <BrandCarousel />

      <Footer />
    </div>
  );
}

export { SmartParking };
