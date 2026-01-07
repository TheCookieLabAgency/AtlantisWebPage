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

function Blog3(){
    return(
        <div className="plan-page blog-page">
            {/* Navegación unificada */}
            <Navigation />
            <Whatsapp/>
            {/* Banner con título */}
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Planes Atlantis</p>
                    <h1>LIFESTYLE</h1>
                    <p className="hero-sub">Energía, bienestar y resultados reales.</p>
                </div>
            </header>

            {/*Blog*/}
            <div className="blog">
                <div className="blog-boddy">
                    <div className="blog-header">
                        <p className="blog-header-descript">LIFESTYLE</p>
                        <p className="blog-header-titulo">Transforma tu energía, transforma tu vida.</p>

                    </div>
                    <img src={beautyLoversImg} className="blog-img"/>
                    <div className="blog-textPrincipal">
                        <p className="blog-text">En <strong>Action Black</strong>, cada entrenamiento es un paso hacia tu mejor versión, con guías especializadas y resultados reales.
                            <br></br><br></br>El equilibrio perfecto entre esfuerzo y recompensa. Después de una gran rutina, un parfait de <strong>Dejamú</strong>, con yogurt, fruta y granola, es el impulso que tu cuerpo merece.
                            <br></br><br></br>La piel también refleja bienestar. En <strong>Medipiel</strong>, encontrarás lo mejor para hidratar y revitalizar tu piel después de entrenar. Un ritual de cuidado que potencia tu salud desde adentro hacia afuera.
                            <br></br><br></br>Atlantis es el lugar donde el bienestar se convierte en estilo de vida.</p>
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
export {Blog3};
