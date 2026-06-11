import React from "react";
import "./css/blog1.css";
import { Link } from "react-router-dom";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// imágenes blog principal
import blogAtlantis1 from "./Material/proximoPlan/BLogAtlantis1.JPG";
import blogAtlantis2 from "./Material/proximoPlan/BLogAtlantis2.JPG";
import blogAtlantis3 from "./Material/proximoPlan/BLogAtlantis3.JPG";

// imágenes barra lateral
import homeLoversImg from "./Material/PLAN HOGAR.png";
import funLoversImg from "./Material/PLAN HOBBIES.png";
import beautyLoversImg from "./Material/PLAN LIFESTYLE.png";
import FoodiesImg from "./Material/PLAN FOODIE.png";
import tycPDF from "./Material/TYC SORTEO GANA CON ATLANTIS.pdf";
import bannerSorteo from "./Material/banner_inicio/Mayo/BANNER MAYO_4 copia.png";

function Blog8() {
    return(
        <div className="plan-page blog-page">

            <Navigation />
            <Whatsapp />

            {/* HERO */}
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Sorteo Atlantis</p>
                    <h1>GANA CON ATLANTIS</h1>
                    <p className="hero-sub">
                        Más de $27 millones en premios te están esperando
                    </p>
                </div>
            </header>

            {/* BLOG */}
            <div className="blog">
                <div className="blog-boddy">

                    <div className="blog-header">
                        
                        <p className="blog-header-descript">ATLANTIS</p>
                        <p className="blog-header-titulo">
                            Gana con Atlantis: más de $27 millones en premios te están esperando
                        </p>
                    </div>
                    <img src={bannerSorteo} className="blog-img" alt="Gana con Atlantis" />
                    <div className="blog-textPrincipal">

                        <p className="blog-text">
                        En Atlantis queremos que cada visita se convierta en una experiencia inolvidable. 
                        Por eso llega “Gana con Atlantis”, un sorteo diseñado para premiar a quienes disfrutan, compran y viven Atlantis.
                        </p>

                        <p className="blog-subtitulo">Fechas de participación</p>

                        <p className="blog-text">
                        Desde el 4 de mayo hasta el 3 de noviembre de 2026, podrás participar por increíbles premios divididos en tres etapas:
                        </p>

                        <p className="blog-text">
                        <strong>Etapa 1 (4 de mayo – 3 de julio):</strong> 2 bonos de compra por $5.000.000
                        </p>

                        <p className="blog-text">
                        <strong>Etapa 2 (4 de julio – 3 de septiembre):</strong> 2 MacBook Neo de 13”
                        </p>

                        <p className="blog-text">
                        <strong>Etapa 3 (4 de septiembre – 3 de noviembre):</strong> iPhone 17e 256 GB + Apple Watch Series 11
                        </p>

                        <p className="blog-subtitulo">¿Cómo participar?</p>

                        <p className="blog-text">Realiza tus compras en Atlantis.</p>
                        <p className="blog-text">Registra tus facturas desde $200.000.</p>
                        <p className="blog-text">Recibe una boleta por cada valor acumulado equivalente.</p>
                        <p className="blog-text">¡Y listo! Ya estás participando.</p>

                        <p className="blog-text">
                        Además, tendrás hasta 8 días para registrar tus facturas.
                        </p>

                        <p className="blog-subtitulo">Fechas de sorteo</p>

                        <p className="blog-text">
                        3 de julio de 2026<br/>
                        3 de septiembre de 2026<br/>
                        3 de noviembre de 2026
                        </p>

                        <p className="blog-text">
                        Cada etapa es una nueva oportunidad para ganar.
                        </p>

                        <p className="blog-text">
                        En Atlantis siempre buscamos sorprenderte. Esta es tu oportunidad para convertir tus compras en grandes premios.
                        </p>

                        <p className="blog-text">
                        Ven, participa y vive la experiencia Atlantis.
                        </p>

                        {/* LINK A TYC */}
                        <p className="blog-text">
                        Consulta términos y condiciones <a href={tycPDF} target="_blank" rel="noopener noreferrer">
                                     aquí
                                    </a>.
                        </p>

                    </div>

                </div>
            </div>

            <BrandCarousel />
            <Footer />

        </div>
    );
}

export { Blog8 };
