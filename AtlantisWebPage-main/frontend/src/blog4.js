import React from "react";
import "./css/blog1.css";
import { Link } from "react-router-dom";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp"

// Imágenes de eventos
import homeLoversImg from "./Material/PLAN HOGAR.png";
import funLoversImg from "./Material/PLAN HOBBIES.png";
import beautyLoversImg from "./Material/PLAN LIFESTYLE.png";
import FoodiesImg from "./Material/PLAN FOODIE.png";
import { Footer } from "./components/Footer";

function Blog4(){
    return(
        <div className="plan-page blog-page">
            {/* Navegación unificada */}
            <Navigation />
            <Whatsapp/>
            {/* Banner con título */}
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Planes Atlantis</p>
                    <h1>FOODIES</h1>
                    <p className="hero-sub">Sabores únicos y experiencias para cada antojo.</p>
                </div>
            </header>

            {/*Blog*/}
            <div className="blog">
                <div className="blog-boddy">
                    <div className="blog-header">
                        <p className="blog-header-descript">FOODIES</p>
                        <p className="blog-header-titulo">Explora un mundo de sabores en un solo destino.</p>
                    </div>
                    <img src={FoodiesImg} className="blog-img"/>
                    <div className="blog-textPrincipal">
                        <p className="blog-text">En el nivel 4, <strong>Seratta</strong> te invita a descubrir experiencias gastronómicas únicas, con más de 20 propuestas que despiertan los sentidos.
                            <br></br><br></br><strong>El café perfecto para cada momento</strong>. Disfruta el inconfundible aroma de <strong>Juan Valdez</strong>, ideal para una pausa especial, o déjate sorprender por la excelencia de <strong>Café Mesa de los Santos</strong>, uno de los mejores del mundo.
                            <br></br><br></br><strong>El dulce final que lo cambia todo</strong>. En <strong>Todo Fresa</strong>, cada torta y cada granizado son el cierre perfecto para un día inolvidable.
                            <br></br>En Atlantis, cada visita es un viaje de sabor y emociones. ¡Ven y vive la experiencia!</p>
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
                            <Link to="/blog1">
                            <img src={homeLoversImg} className="img-prev"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">¿Buscas un plan para renovar tu hogar o actualizar tu estilo?</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
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
export {Blog4};
