import React from "react";
import "./css/tuProximoPlan.css";
import { Link } from "react-router-dom";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagenes de eventos
import homeLoversImg from "./Material/PLAN HOGAR.png";
import funLoversImg from "./Material/PLAN HOBBIES.png";
import beautyLoversImg from "./Material/PLAN LIFESTYLE.png";
import FoodiesImg from "./Material/PLAN FOODIE.png";
import bannerPlan from "./Material/banners_pags_web/vive_tu_plan.png";
import decathlonImg from "./Material/proximoPlan/blogAtlantis.jpg";
import capadociaImg from "./Material/proximoPlan/blogCapadocia.jpg";

// NUEVAS IMÁGENES VLOG ATLANTIS
import blogAtlantis1 from "./Material/proximoPlan/BLogAtlantis1.JPG";

function TuProximoPlan(){
    return(
        <div className="plan-page tu-plan-page">

            {/* Navegacion */}
            <Navigation />
            <Whatsapp/>

            {/* Hero */}
            <header className="main-header-fon-tuPlan">
                <div className="banner-title">
                    <p className="hero-kicker">Vlog Atlantis</p>
                    <h1>Planes que prenden la chispa</h1>
                    <p className="hero-sub">
                        Elige un plan, comp&aacute;rtelo con tu comunidad y deja que Atlantis se encargue del resto.
                    </p>

                    <div className="hero-actions">
                        <Link to="/Blog7" className="hero-btn primary">Ver sorteo Capadocia</Link>
                        <Link to="/Blog6" className="hero-btn ghost">Ver &uacute;ltimas aperturas</Link>
                    </div>
                </div>
            </header>

            {/* Encuentra tu plan */}
            <section className="find-section">

                <div className="find-headline">
                    <p className="find-eyebrow">Experiencias curadas</p>
                    <h2>Encuentra tu siguiente aventura en Atlantis</h2>
                    <p className="find-copy">
                        Desde viajes de cuento hasta sabores y deporte, comparte las novedades con tus clientes y activa la participaci&oacute;n.
                    </p>
                </div>

                <div className="events-grid">

                    {/* CAPADOCIA */}
                    <div className="event-card">
                        <Link to="/Blog7" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={capadociaImg} alt="Viaje a Capadocia" />

                            <div className="event-overlay">
                                <span className="event-category">CAPADOCIA</span>
                                <p className="event-title">Gana un viaje so&ntilde;ado a Turqu&iacute;a</p>
                                <span className="event-kicker">Registra facturas desde $200.000</span>
                            </div>

                        </Link>
                    </div>

                    {/* HOME LOVERS */}
                    <div className="event-card">
                        <Link to="/Blog1" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={homeLoversImg} alt="Home Lovers" />

                            <div className="event-overlay">
                                <span className="event-category">HOME LOVERS</span>
                                <p className="event-title">Renueva tu casa y tu estilo</p>
                                <span className="event-kicker">Dise&ntilde;o, decoraci&oacute;n y moda</span>
                            </div>

                        </Link>
                    </div>

                    {/* FUN LOVERS */}
                    <div className="event-card">
                        <Link to="/Blog2" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={funLoversImg} alt="Fun Lovers" />

                            <div className="event-overlay">
                                <span className="event-category">FUN LOVERS</span>
                                <p className="event-title">Cine, estrenos y palomitas</p>
                                <span className="event-kicker">Cinemark en Atlantis</span>
                            </div>

                        </Link>
                    </div>

                    {/* LIFESTYLE */}
                    <div className="event-card">
                        <Link to="/Blog3" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={beautyLoversImg} alt="Lifestyle" />

                            <div className="event-overlay">
                                <span className="event-category">LIFESTYLE</span>
                                <p className="event-title">Energ&iacute;a y bienestar sin pausa</p>
                                <span className="event-kicker">Entrena, cuida y recarga</span>
                            </div>

                        </Link>
                    </div>

                    {/* FOODIES */}
                    <div className="event-card">
                        <Link to="/Blog4" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={FoodiesImg} alt="Foodies" />

                            <div className="event-overlay">
                                <span className="event-category">FOODIES</span>
                                <p className="event-title">Sabores para todos los antojos</p>
                                <span className="event-kicker">Nivel 4: explora y prueba</span>
                            </div>

                        </Link>
                    </div>

                    {/* DECATHLON */}
                    <div className="event-card">
                        <Link to="/Blog6" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={decathlonImg} alt="Decathlon" />

                            <div className="event-overlay">
                                <span className="event-category">DECATHLON</span>
                                <p className="event-title">Deporte y equipamiento en un solo lugar</p>
                                <span className="event-kicker">Productos para 60+ deportes</span>
                            </div>

                        </Link>
                    </div>

                    {/* DESTINO ATLANTIS */}
                    <div className="event-card">
                        <Link to="/Blog5" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={bannerPlan} alt="Destino Atlantis" />

                            <div className="event-overlay">
                                <span className="event-category">DESTINO ATLANTIS</span>
                                <p className="event-title">Un programa hecho para turistas</p>
                                <span className="event-kicker">Souvenirs y beneficios locales</span>
                            </div>

                        </Link>
                    </div>

                    {/* VLOG ATLANTIS */}
                    <div className="event-card">
                         <Link to="/Blog8" className="event-link">

                            <div className="event-date">
                                <span className="day">2025</span>
                            </div>

                            <img src={blogAtlantis1} alt="Atlantis 26 años" />

                            <div className="event-overlay">
                                <span className="event-category">VLOG ATLANTIS</span>
                                <p className="event-title">
                                    Atlantis: 26 años siendo puerta del comercio en Bogotá
                                </p>
                                <span className="event-kicker">
                                    Historia, renovación y evolución del centro comercial
                                </span>
                            </div>

                        </Link>
                    </div>

                </div>
            </section>

            {/* Carrusel de marcas */}
            <BrandCarousel />

            {/* Footer */}
            <Footer />

        </div>
    );
}

export {TuProximoPlan};
