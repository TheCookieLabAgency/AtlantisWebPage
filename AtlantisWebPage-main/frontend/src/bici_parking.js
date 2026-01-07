import React from "react";
import "./css/parking.css";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagen
import biciparkingimg from "./img/SERVICIOS/img_biciparking.jpg";

function Biciparking() {
  return (
    <div className="smart-parking-page">
      <Navigation />
      <Whatsapp />

      {/* Banner simple (coherente con servicios) */}
      <header className="main-header-font-parking">
        <div className="banner-title">
          <h1>Servicios</h1>
        </div>
      </header>

      {/* HERO: texto izq / imagen der (imagen protagonista) */}
      <section className="smart-parking-hero" id="biciparking">
        <div className="sp-container">
          {/* Texto */}
          <div className="sp-copy">
            <span className="sp-eyebrow">Servicio</span>
            <h1 className="sp-title">Biciparking</h1>
            <p className="sp-subtitle">
              Disfruta gratis de uno de los mejores bici parqueaderos del país,
              certificado con <strong>Sello Oro</strong> por la Secretaría de Movilidad.
              Un espacio seguro, cómodo y pensado para ciclistas.
            </p>

            <ul className="sp-bullets">
              <li>Certificación <strong>Sello Oro</strong> (Secretaría de Movilidad).</li>
              <li>Taller mecánico para ajustes rápidos.</li>
              <li>Dispensador de agua y <em>ducha de aire</em>.</li>
              <li>Parqueaderos cómodos y señalizados.</li>
              <li><strong>Horario:</strong> 5:00 a. m. – 12:00 a. m. todos los días.</li>
            </ul>

            <div className="sp-ctas">
            </div>
          </div>

          {/* Imagen protagonista */}
          <figure className="sp-figure">
            <img
              src={biciparkingimg}
              alt="Biciparking certificado Sello Oro - Atlantis"
              className="sp-image"
            />
            <figcaption className="sp-figcaption">Zona de Biciparking</figcaption>
          </figure>
        </div>
      </section>



      {/* Carrusel de marcas */}
      <BrandCarousel />

      <Footer />
    </div>
  );
}

export { Biciparking };
