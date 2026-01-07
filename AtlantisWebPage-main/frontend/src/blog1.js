import React from "react";
import "./css/blog1.css";
import { Link } from "react-router-dom";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp"
import { Footer } from "./components/Footer";

// Imágenes de eventos
import homeLoversImg from "./Material/PLAN HOGAR.png";
import funLoversImg from "./Material/PLAN HOBBIES.png";
import beautyLoversImg from "./Material/PLAN LIFESTYLE.png";
import FoodiesImg from "./Material/PLAN FOODIE.png";
import homeLovers2 from "./img/04 PLANES/img_homelovers2.jpg"

function Blog1(){
    return(
        <div className="plan-page blog-page">
            {/* Navegación unificada */}
            <Navigation />
            <Whatsapp/>
            {/* Banner con título */}
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Planes Atlantis</p>
                    <h1>HOME LOVERS</h1>
                    <p className="hero-sub">Renueva tu hogar y tu look en un solo destino.</p>
                </div>
            </header>

            {/*Blog*/}
            <div className="blog">
                <div className="blog-boddy">
                    <div className="blog-header">
                        <p className="blog-header-descript">HOME LOVERS</p>
                        <p className="blog-header-titulo">¿Buscas un plan para renovar tu hogar o actualizar tu estilo?</p>

                    </div>
                    <img src={homeLoversImg} className="blog-img"/>
                    <div className="blog-textPrincipal">
                        <p className="blog-text">En <strong>Atlantis</strong> encuentras las mejores opciones para transformar tu espacio y refrescar tu look con las marcas que marcan tendencia.
</p>
                        <p className="blog-subtitulo">Si lo tuyo es darle un nuevo aire a tu hogar...</p>
                        <p className="blog-text">Descubre lo último en diseño y decoración en <strong>Tugo, Casaideas, Club House y Brissa</strong>. Desde pequeños detalles hasta muebles que reinventan cada rincón, todo está aquípara que tu casa refleje tu estilo.</p>
                    </div>
                    <div className="blog-secundario">
                        <img src={homeLovers2} className="blog-secundario-img"/>
                        <div className="blog-secundario-texto">
                            <p className="blog-subtitulo">¿Y que tal un cambio de look?</p>
                            <p className="blog-text">Atrévete a explorar las tendencias en <strong>Chevignon, Jon Sonen y Mercedes Campuzano</strong>. Para los más pequeños, <strong>Kid Republic</strong> tiene opciones llenas de estilo y comodidad
                            <br></br><br></br>En <strong>Atlantis, cada plan es una experiencia</strong>. Ven , explora y deja que la moda y el diseño te sorprendan. Estamos donde siempre , pero no de la misma manera.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="barraLateral">
                    <div className="barraLateral-categorias">
                        <p className="titulo-lateral">CATEGORÍAS</p>
                        <p className="categorias">HOME LOVERS</p>
                        <p className="categorias">FUN LOVERS</p>
                        <p className="categorias">BEAUTY AND SPORT LOVERS</p>
                        <p className="categorias">FOODIES</p>
                    </div>
                    <div className="barraLateral-pubRecientes">
                        <p className="titulo-lateral">PUBLICACIONES RECIENTES</p>
                        <div className="Pub">
                            <Link to="/blog2">
                            <img src={funLoversImg} className="img-prev"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">¿Qué sería de una gran película sin el lugar perfecto para verla?</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                        <div className="Pub">
                            <Link to="/blog3">
                            <img src={beautyLoversImg} className="img-prev"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Transforma tu energía, transforma tu vida.</p>
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

            {/* 🔥 CARRUSEL DE MARCAS OPTIMIZADO */}
            <BrandCarousel />
            
            {/* Footer */}
<Footer />
        </div>
    );
}
export {Blog1};
