import React from "react";
import { Link } from "react-router-dom";
import "./css/servicios.css";
import { Navigation } from "./components/Navigation";
import logo from "./img/HOME/MENU PRINCIPAL/logo.png";
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { Footer } from "./components/Footer";

// Importar imágenes de servicios
import smartParkingImg from "./img/SERVICIOS/img_smartparking.jpg";
import biciParkingImg from "./img/SERVICIOS/img_biciparking.jpg";
import electrolinerasImg from "./img/SERVICIOS/img_electrolineras.jpg";
import sillasRuedasImg from "./img/SERVICIOS/img_sillasderuedas.jpg";
import bodegasM3Img from "./img/SERVICIOS/img_bodegas3m.jpg";
import enfermeriaImg from "./img/SERVICIOS/img_enfermeria.jpg";

function Servicios() {
  const servicios = [
    {
      id: 1,
      title: "SMART PARKING",
      description: "Tecnología de punta para un estacionamiento inteligente y sin contacto. Fácil, rápido y seguro.",
      image: smartParkingImg,
      link: "/smart_parking",
      features: ["Sin contacto", "Tecnología inteligente", "Seguridad 24/7"]
    },
    {
      id: 2,
      title: "BICIPARKING",
      description: "El mejor biciparqueadero de los centros comerciales de Bogotá. Gratuito y completamente seguro.",
      image: biciParkingImg,
      link: "/bici_parking",
      features: ["Completamente gratuito", "Seguridad garantizada", "Fácil acceso"]
    },
    {
      id: 3,
      title: "ELECTROLINERAS",
      description: "Estaciones de carga para vehículos eléctricos. Contribuye al cuidado del medio ambiente mientras visitas Atlantis.",
      image: electrolinerasImg,
      link: "/electrolineras",
      features: ["Carga rápida", "Eco-friendly", "Disponible 24/7"]
    },
    {
      id: 4,
      title: "SILLAS DE RUEDAS",
      description: "Servicio gratuito de préstamo de sillas de ruedas para garantizar la accesibilidad de todos nuestros visitantes.",
      image: sillasRuedasImg,
      link: "/sillas_de_ruedas",
      features: ["Servicio gratuito", "Disponibilidad inmediata", "Accesibilidad total"]
    },
    {
      id: 5,
      title: "BODEGAS M3",
      description: "Servicio de almacenamiento temporal para tus compras. Disfruta sin preocuparte por cargar tus bolsas.",
      image: bodegasM3Img,
      link: "/bodegas_m3",
      features: ["Almacenamiento seguro", "Temporal", "Comodidad total"]
    },
    {
      id: 6,
      title: "ENFERMERÍA",
      description: "Atención básica de salud y primeros auxilios. Tu bienestar es nuestra prioridad.",
      image: enfermeriaImg,
      link: "/enfermeria",
      features: ["Atención profesional", "Primeros auxilios", "Disponible en horario comercial"]
    }
  ];

  return (
    <div className="servicios-page">
      {/* Navegación unificada */}
      <Navigation />
      
      {/* Banner con título */}
      <header className="banner-servicios">
        <div className="banner-title">
          <h1>NUESTROS SERVICIOS</h1>
        </div>
      </header>

      {/* Sección intro */}
      <section className="services-intro">
        <div className="intro-container">
          <h2>EXPERIENCIAS QUE VAN MÁS ALLÁ DE LAS COMPRAS</h2>
          <p>
            En Atlantis nos preocupamos por brindarte la mejor experiencia desde el momento que llegas 
            hasta que te vas. Conoce todos los servicios que tenemos disponibles para ti.
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="services-grid-section">
        <div className="services-grid">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="service-card">
              <div className="service-image-container">
                <img src={servicio.image} alt={servicio.title} />
                <div className="service-overlay">
                  <Link to={servicio.link} className="service-link">
                    VER MÁS
                  </Link>
                </div>
              </div>
              <div className="service-content">
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
                <ul className="service-features">
                  {servicio.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de contacto y horarios */}
      <section className="services-info">
        <div className="info-grid">
          <div className="info-card">
            <h3>HORARIOS DE SERVICIO</h3>
            <p>Lunes a domingo</p>
            <p className="highlight">5:00 a.m. a 12:00 a.m.</p>
            <p>Algunos servicios pueden tener horarios especiales.</p>
          </div>
          
          <div className="info-card">
            <h3>INFORMACIÓN Y CONTACTO</h3>
            <p>Teléfono: 601 580 3780</p>
            <p>Email: habeasdata@atlantisplaza.com</p>
            <p>Ubicación: Calle 81 No. 13-05, Bogotá</p>
          </div>
          
          <div className="info-card">
            <h3>SERVICIOS ADICIONALES</h3>
            <p>• WiFi gratuito en todo el centro comercial</p>
            <p>• Cajeros automáticos disponibles</p>
            <p>• Servicio al cliente</p>
            <p>• Información turística</p>
          </div>
        </div>
      </section>

      {/* Footer */}
<Footer />
    </div>
  );
}

export { Servicios };