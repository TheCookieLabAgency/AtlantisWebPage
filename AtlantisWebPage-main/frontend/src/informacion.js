import React from "react";
import "./css/informacion.css";
import { Navigation } from "./components/Navigation";
import logo from "./img/HOME/MENU PRINCIPAL/logo.png";
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { Footer } from "./components/Footer";

function Informacion() {
  return (
    <div className="informacion-page">
      {/* Navegación unificada */}
      <Navigation />
      
      {/* Banner con título */}
      <header className="banner-informacion">
        <div className="banner-title">
          <h1>INFORMACIÓN</h1>
        </div>
      </header>

      {/* Contenido principal */}
      <section className="info-content">
        <div className="info-container">
          <div className="info-section">
            <h2>HORARIOS DE ATENCIÓN</h2>
            <p>Lunes a domingo de 5:00 a.m. a 12:00 a.m.</p>
            <p>Todos los días del año para tu comodidad.</p>
          </div>

          <div className="info-section">
            <h2>UBICACIÓN</h2>
            <p>Calle 81 No. 13-05</p>
            <p>Zona T - Bogotá, Colombia</p>
            <p>En el corazón de la ciudad, fácil acceso en transporte público y privado.</p>
          </div>

          <div className="info-section">
            <h2>CONTACTO</h2>
            <p>Teléfono: 601 580 3780</p>
            <p>Email: habeasdata@atlantisplaza.com</p>
            <p>Síguenos en nuestras redes sociales para estar al día con nuestras novedades.</p>
          </div>

          <div className="info-section">
            <h2>SERVICIOS DISPONIBLES</h2>
            <ul>
              <li>Smart Parking - Estacionamiento inteligente</li>
              <li>Biciparking - Parqueadero gratuito para bicicletas</li>
              <li>Electrolineras - Carga para vehículos eléctricos</li>
              <li>Sillas de ruedas - Préstamo gratuito</li>
              <li>Bodegas M3 - Almacenamiento temporal</li>
              <li>Enfermería - Atención básica de salud</li>
            </ul>
          </div>

          <div className="info-section">
            <h2>POLÍTICAS Y REGLAMENTOS</h2>
            <ul>
              <li>Decálogo Pet Friendly Atlantis</li>
              <li>Aviso de Privacidad Atlantis</li>
              <li>Manual de Políticas y Procedimientos</li>
              <li>Política de Seguridad y Salud en el Trabajo</li>
              <li>Programa de Fidelización Soy Top Member</li>
              <li>Política de Tratamiento de Datos Personales</li>
              <li>Política Ambiental Basura Cero</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
<Footer />
    </div>
  );
}

export { Informacion };