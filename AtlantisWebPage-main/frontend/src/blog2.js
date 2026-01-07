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

function Blog2(){
    return(
        <div className="plan-page blog-page">
            {/* Navegación unificada */}
            <Navigation />
            <Whatsapp/>
            {/* Banner con título */}
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Planes Atlantis</p>
                    <h1>FUN LOVERS</h1>
                    <p className="hero-sub">Estrenos, pantalla gigante y el mejor plan de cine.</p>
                </div>
            </header>

            {/*Blog*/}
            <div className="blog">
                <div className="blog-boddy">
                    <div className="blog-header">
                        <p className="blog-header-descript">FUN LOVERS</p>
                        <p className="blog-header-titulo">¿Qué sería de una gran película sin el lugar perfecto para verla?</p>
                    </div>
                    <img src={funLoversImg} className="blog-img"/>
                    <div className="blog-textPrincipal">
                        <p className="blog-text">En Atlantis, una ida a <strong>Cinemark</strong> es más que ver una historia en pantalla: es vivirla. Ven y disfruta los estrenos más esperados con la mejor calidad de imagen y sonido, sumérgete en cada historia y acompaña el momento con unas deliciosas palomitas.
                            <br></br><br></br>Es el plan ideal para compartir en familia y ver la emoción en los más pequeños, para una cita diferente donde la película se convierte en el mejor pretexto o incluso para disfrutar un momento solo para ti, sin distracciones, solo tú y la pantalla gigante. Porque hay historias que merecen vivirse en grande, y en Atlantis se disfrutan mejor.
                            <br></br><br></br>Ven, vive la experiencia y haz de Atlantis tu destino favorito.
    </p>
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
export {Blog2};
