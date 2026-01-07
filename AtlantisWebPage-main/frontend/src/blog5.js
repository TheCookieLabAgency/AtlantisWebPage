import React from "react";
import "./css/blog1.css";
import { Link } from "react-router-dom";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

// Imagenes utilizadas en la barra lateral
import homeLoversImg from "./Material/PLAN HOGAR.png";
import funLoversImg from "./Material/PLAN HOBBIES.png";
import beautyLoversImg from "./Material/PLAN LIFESTYLE.png";
import FoodiesImg from "./Material/PLAN FOODIE.png";

function Blog5(){
    return(
        <div className="plan-page blog-page">
            <Navigation />
            <Whatsapp/>
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Planes Atlantis</p>
                    <h1>DESTINO ATLANTIS</h1>
                    <p className="hero-sub">Un programa pensado para turistas que quieren m&aacute;s de Bogot&aacute;.</p>
                </div>
            </header>

            <div className="blog">
                <div className="blog-boddy">
                    <div className="blog-header">
                        <p className="blog-header-descript">DESTINO ATLANTIS</p>
                        <p className="blog-header-titulo">Descubre Destino Atlantis: la experiencia para turistas en Bogotá 🌎✨ </p>
                    </div>
                    {/* Placeholder blanco para la imagen */}
                    <div className="blog-img" style={{background:"#ffffff", border:"1px solid #e5e5e5", marginBottom:"12px"}}></div>
                    <div className="blog-textPrincipal">
                        <p className="blog-text">¿Vienes de visita a Bogotá y quieres vivir una experiencia diferente? En el Centro Comercial Atlantis encontrarás mucho más que compras. Con Destino Atlantis, un programa exclusivo para turistas, podrás disfrutar lo mejor de la cultura colombiana, su gastronomía y productos únicos que llevarán tu viaje a otro nivel.</p>
                        <p className="blog-subtitulo">¿Qué es Destino Atlantis?</p>
                        <p className="blog-text">Destino Atlantis es una iniciativa pensada para quienes visitan Bogotá desde otras ciudades o países. Hace parte del programa Soy Top Member y reúne más de 30 marcas con productos 100% colombianos, espacios gastronómicos, bienestar y experiencias memorables.</p>
                        <p className="blog-text">Además, al registrarte recibirás un café gratis de Mesa de los Santos, reconocido entre los mejores del mundo. ¡Un detalle especial para empezar tu recorrido con todo el sabor colombiano! ☕💙</p>
                        <p className="blog-subtitulo">¿Cómo funciona?</p>
                        <p className="blog-text">1.\tIngresa al minisite 👉 Destino Atlantis.</p>
                        <p className="blog-text">2.\tExplora el catálogo digital con productos colombianos y promociones exclusivas.</p>
                        <p className="blog-text">3.\tRegistra tus compras en el Punto de Información del centro comercial.</p>
                        <p className="blog-text">4.\tDisfruta de beneficios, souvenirs y actividades diseñadas para turistas nacionales e internacionales.</p>
                        <p className="blog-subtitulo">¿Por qué elegir Destino Atlantis?</p>
                        <p className="blog-text">•\tEncuentra souvenirs y productos locales únicos en un solo lugar.</p>
                        <p className="blog-text">•\tDisfruta de una gastronomía auténtica para todos los gustos.</p>
                        <p className="blog-text">•\tObtén beneficios inmediatos como tu café de cortesía y promociones especiales.</p>
                        <p className="blog-text">•\tVive una experiencia turística completa en pleno corazón de Bogotá.</p>
                        <p className="blog-text">________________________________________</p>
                        <p className="blog-text">👉 Si visitas la ciudad, haz de tu viaje un recuerdo inolvidable con Destino Atlantis.</p>
                        <p className="blog-text">Conoce más aquí: <a href="https://destinoatlantis.soytopmember.com" target="_blank" rel="noopener noreferrer">destinoatlantis.soytopmember.com</a></p>
                    </div>
                </div>
                <div className="barraLateral">
                    <div className="barraLateral-categorias">
                        <p className="titulo-lateral">CATEGORIAS</p>
                        <p className="categorias">HOME LOVERS</p>
                        <p className="categorias">FUN LOVERS</p>
                        <p className="categorias">LIFESTYLE</p>
                        <p className="categorias">FOODIES</p>
                        <p className="categorias">DESTINO ATLANTIS</p>
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
export {Blog5};
