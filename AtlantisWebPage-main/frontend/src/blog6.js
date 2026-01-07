import React from "react";
import "./css/blog1.css";
import { Link } from "react-router-dom";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagenes laterales
import homeLoversImg from "./Material/PLAN HOGAR.png";
import funLoversImg from "./Material/PLAN HOBBIES.png";
import beautyLoversImg from "./Material/PLAN LIFESTYLE.png";
import FoodiesImg from "./Material/PLAN FOODIE.png";
import decathlonImg from "./Material/proximoPlan/blogAtlantis.jpg";

function Blog6(){
    return(
        <div className="plan-page blog-page">
            <Navigation />
            <Whatsapp/>
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Planes Atlantis</p>
                    <h1>DECATHLON</h1>
                    <p className="hero-sub">Deporte, bienestar y equipamiento en el coraz&oacute;n de Bogot&aacute;.</p>
                </div>
            </header>

            <div className="blog">
                <div className="blog-boddy">
                    <div className="blog-header">
                        <p className="blog-header-descript">DECATHLON</p>
                        <p className="blog-header-titulo">Descubre Decathlon en Atlantis: deporte y bienestar en el corazón de Bogotá 🏃‍♀️⚽</p>
                    </div>
                    <img src={decathlonImg} className="blog-img"/>
                    <div className="blog-textPrincipal">
                        <p className="blog-text">El 19 de septiembre abrió sus puertas en Atlantis la nueva tienda Decathlon, la número 19 en Colombia. Ubicada en el tercer piso del Centro Comercial Atlantis, esta apertura marca un hito para la Zona T, que ahora cuenta con una propuesta deportiva innovadora, accesible y diseñada para todos.</p>
                        <p className="blog-subtitulo">¿Qué encontrarás en Decathlon Atlantis?</p>
                        <p className="blog-text">Con más de 636 m² de superficie, la tienda reúne artículos para más de 60 deportes, desde montañismo, running y natación hasta pádel, fitness y fútbol. Cada disciplina cuenta con marcas propias especializadas y un equipo preparado para guiarte en tu compra.</p>
                        <p className="blog-text">Además, esta es una de las primeras tiendas en Bogotá con la nueva imagen de Decathlon, que incorpora materiales sostenibles y un diseño pensado para que la experiencia sea más inmersiva, moderna y cercana.</p>
                        <p className="blog-subtitulo">Horarios de atención</p>
                        <p className="blog-text">📍 Centro Comercial Atlantis – 3er piso</p>
                        <p className="blog-text">🕙 Todos los días de 10:00 a.m. a 9:00 p.m.</p>
                        <p className="blog-subtitulo">¿Por qué venir a Decathlon Atlantis?</p>
                        <p className="blog-text">• Vive una experiencia deportiva completa en el corazón de Bogotá.</p>
                        <p className="blog-text">• Descubre productos de calidad para todos los niveles, desde principiantes hasta profesionales.</p>
                        <p className="blog-text">• Disfruta de un espacio moderno y sostenible, perfecto para equiparte e inspirarte a moverte más.</p>
                    </div>
                </div>
                <div className="barraLateral">
                    <div className="barraLateral-categorias">
                        <p className="titulo-lateral">CATEGORIAS</p>
                        <p className="categorias">HOME LOVERS</p>
                        <p className="categorias">FUN LOVERS</p>
                        <p className="categorias">LIFESTYLE</p>
                        <p className="categorias">FOODIES</p>
                        <p className="categorias">DECATHLON</p>
                    </div>
                    <div className="barraLateral-pubRecientes">
                        <p className="titulo-lateral">PUBLICACIONES RECIENTES</p>
                        <div className="Pub">
                            <Link to="/blog1">
                            <img src={homeLoversImg} className="img-prev"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Buscas un plan para renovar tu hogar o actualizar tu estilo?</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                        <div className="Pub">
                            <Link to="/blog2">
                            <img src={funLoversImg} className="img-prev"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Que seria de una gran pelicula sin el lugar perfecto para verla?</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                        <div className="Pub">
                            <Link to="/blog3">
                            <img src={beautyLoversImg} className="img-prev"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Transforma tu energia, transforma tu vida.</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                        <div className="Pub">
                            <Link to="/blog4">
                            <img src={FoodiesImg} className="img-prev"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Explora un mundo de sabores en un solo destino.</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <BrandCarousel />
            <Footer />
        </div>
    );
}
export {Blog6};
