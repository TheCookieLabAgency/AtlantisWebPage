import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import "./Footer.css";

import logo from "../img/HOME/FOOTER/logo.png";

import actionBlack from "../Material/PLAN HOGAR.png";
import cinemark from "../Material/PLAN HOBBIES.png";
import procedimientoReclamacionParqueaderos from "../Material/PROCEDIMIENTO_DE_RECLAMACION_EN_PARQUEADEROS.pdf";

import avisoPrivacidadAtlantis from "../Material/Aviso de Privacidad - Atlantis.pdf";
import politicaTratamientoDatosPersonales from "../Material/PL-01-Politica-tratamiento-de-datos-personales.pdf";
import politicaAmbientalBasuraCero from "../Material/POLÍTICA AMBIENTAL BASURA MULTIPLIKA Vr. 3.pdf";
import politicaAmbiental from "../Material/politicas/POL-SGA-01-Politica-Ambiental-V2.pdf";
import politicaSeguridadSalud from "../Material/politicas/POL-ST-01-Politica-Seguridad-Salud-Trabajo-V2.pdf";
import petFriendlyPDF from "../Material/DECÁLOGO PET FRIENDLY.pdf";

const Footer = () => {
  const INFO_FILES = {
    "Aviso de Privacidad Atlantis": avisoPrivacidadAtlantis,
    "Política de Tratamiento de Datos Personales":
      politicaTratamientoDatosPersonales,
    "Política Ambiental Basura Cero": politicaAmbientalBasuraCero,
    "Política Ambiental": politicaAmbiental,
    "Política Seguridad y salud en el Trabajo": politicaSeguridadSalud,
  };

  const handleNavigation = (key) => {
    const url = INFO_FILES[key];
    if (url) window.open(url, "_blank");
  };

  const handleNewsClick = (title) => {
    console.log("Abriendo noticia:", title);
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case "phone":
        window.open(`tel:${value.replace(/\s/g, "")}`);
        break;
      case "address":
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`);
        break;
      default:
        break;
    }
  };

  const redirectToWhatsapp = () => {
    const phoneNumber = "573187503969";
    const message = "Hola, quiero más información sobre Atlantis";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const onKeyActivate = (fn) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn();
    }
  };

  return (
    <footer className="footer-dark">
      <div className="footer-content">
        {/* 1) Columna: logo + contacto + (AHORA) descripción ABAJO */}
        <div className="footer-section footer-main">
          <div className="footer-logo">
            <img src={logo} alt="Atlantis" />
          </div>

          {/* Contacto */}
          <ul className="footer-contact">
            <li
              className="contact-item clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                handleContactClick(
                  "address",
                  "Calle 81 No. 13-05, Bogotá, Colombia"
                )
              }
              onKeyDown={onKeyActivate(() =>
                handleContactClick(
                  "address",
                  "Calle 81 No. 13-05, Bogotá, Colombia"
                )
              )}
            >
              <FaMapMarkerAlt />
              <span>Calle 81 No. 13-05, Bogotá, Colombia</span>
            </li>

            <li className="contact-item">
              <FaClock />
              <span>Lunes a domingo de 5:00 a.m. a 12:00 a.m.</span>
            </li>

            <li
              className="contact-item clickable"
              role="button"
              tabIndex={0}
              onClick={redirectToWhatsapp}
              onKeyDown={onKeyActivate(redirectToWhatsapp)}
            >
              <FaPhone />
              <span>+57 318 7503969</span>
            </li>
          </ul>

          {/* Descripción (movida ABAJO) */}
          <p className="footer-desc">
            En el corazón de la Zona T de Bogotá, Atlantis es tu punto de
            encuentro con la mejor experiencia gastronómica, las tendencias del
            hogar y el entretenimiento.
          </p>
        </div>

        {/* 2) Novedades */}
        <div className="footer-section footer-news-section">
          <h3>NOVEDADES</h3>
          <div className="footer-news">
            <article
              className="news-item clickable"
              onClick={() =>
                handleNewsClick(
                  "¿Buscas un plan para renovar tu hogar o actualizar tu estilo?"
                )
              }
            >
              <div className="news-image">
                <img src={actionBlack} alt="Renovación de hogar" />
              </div>
              <div className="news-content">
                <h4>
                  ¿Buscas un plan para renovar tu hogar o actualizar tu estilo?
                </h4>
                <span className="news-meta">2025 | 1 Comentario</span>
              </div>
            </article>

            <article
              className="news-item clickable"
              onClick={() =>
                handleNewsClick(
                  "¿Qué sería de una gran película sin el lugar perfecto para verla?"
                )
              }
            >
              <div className="news-image">
                <img src={cinemark} alt="Experiencia cinematográfica" />
              </div>
              <div className="news-content">
                <h4>
                  ¿Qué sería de una gran película sin el lugar perfecto para
                  verla?
                </h4>
                <span className="news-meta">2025 | 3 Comentarios</span>
              </div>
            </article>
          </div>
        </div>

        {/* 3) Nuestras marcas */}
        <div className="footer-section footer-links">
          <h3>NUESTRAS MARCAS</h3>
          <ul>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Buen comer
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Hobbies
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Hogar
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Soy Top Member
              </a>
            </li>
          </ul>
        </div>

        {/* 4) Conoce más */}
        <div className="footer-section footer-links footer-knowmore">
          <h3>CONOCE MÁS</h3>
          <ul className="knowmore-grid">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(petFriendlyPDF, "_blank", "noopener,noreferrer");
                }}
              >
                Decálogo Pet Friendly Atlantis
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Programa de Fidelización Soy Top Member
              </a>
            </li>
            <li>
              <a
                href="https://multiplika.co/pqrs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peticiones, Quejas, Reclamos y/o Sugerencias
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("Aviso de Privacidad Atlantis");
                }}
              >
                Aviso de Privacidad Atlantis
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(
                    "Política de Tratamiento de Datos Personales"
                  );
                }}
              >
                Política de Tratamiento de Datos Personales
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("Política Ambiental Basura Cero");
                }}
              >
                Política Ambiental Basura Cero
              </a>
            </li>

            

            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Manual de Políticas y Procedimientos Atlantis
              </a>
            </li>
            <li>
              <a href="/smart_parking">
                Conoce los Detalles de Nuestro Parqueadero
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("Política Ambiental");
                }}
              >
                Política Ambiental
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    procedimientoReclamacionParqueaderos,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Reclamación en el Parqueadero
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("Política Seguridad y salud en el Trabajo");
                }}
              >
                Política Seguridad y salud en el Trabajo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
