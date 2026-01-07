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
import capadociaImg from "./Material/proximoPlan/blogCapadocia.jpg";

function Blog7(){
    return(
        <div className="plan-page blog-page">
            <Navigation />
            <Whatsapp/>
            <header className="main-header-fon-blog" style={{backgroundImage: `linear-gradient(180deg, rgba(7,12,26,0.2) 0%, rgba(7,12,26,0.78) 65%, rgba(7,12,26,0.9) 100%), url(${capadociaImg})`}}>
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Planes Atlantis</p>
                    <h1>CAPADOCIA</h1>
                    <p className="hero-sub">Globos, valles de colores y un sorteo para volar alto.</p>
                </div>
            </header>

            <div className="blog">
                <div className="blog-boddy">
                    <div className="blog-header">
                        <p className="blog-header-descript">CAPADOCIA</p>
                        <p className="blog-header-titulo">Despierta en Capadocia: tu pr&oacute;ximo plan gratis con Atlantis</p>
                    </div>
                    <img src={capadociaImg} className="blog-img" alt="Amanecer en Capadocia"/>
                    <div className="blog-textPrincipal">
                        <p className="blog-text">¿Listo para despegar hacia un lugar salido de un sue&ntilde;o? Capadocia, esa tierra m&aacute;gica donde los globos aerost&aacute;ticos pintan el amanecer y las monta&ntilde;as parecen esculpidas por la imaginaci&oacute;n, puede ser tu pr&oacute;ximo destino… ¡sin comprar tiquetes! 😱✨</p>
                        <p className="blog-subtitulo">Caminar por Capadocia es entrar a un cuento:</p>
                        <p className="blog-text">🏜️ Valles que cambian de color con la luz.</p>
                        <p className="blog-text">🎈 Globos que flotan sobre volcanes dormidos.</p>
                        <p className="blog-text">🏰 Ciudades subterr&aacute;neas que parecen mundos secretos.</p>
                        <p className="blog-text">🌅 Paisajes que ni el mejor filtro de Instagram puede mejorar.</p>
                        <p className="blog-text">¿Te imaginas despertar all&iacute;?</p>
                        <p className="blog-subtitulo">Participa y despierta gratis gracias a Atlantis</p>
                        <p className="blog-text">Solo necesitas invitar a tus clientes a registrar sus facturas por compras desde $200.000 en el Punto de Informaci&oacute;n. Con cada registro participan en nuestro sorteo para vivir:</p>
                        <p className="blog-text">🎁 Un viaje so&ntilde;ado a Capadocia por $15.000.000.</p>
                        <p className="blog-text">🎁 Bonos aventura de $5.000.000 y $1.000.000 de Decathlon.</p>
                        <p className="blog-text">Un regalo de a&ntilde;o nuevo tan incre&iacute;ble que hasta tu yo del futuro te lo va a agradecer. Entre m&aacute;s participen tus clientes, m&aacute;s crece la emoci&oacute;n y m&aacute;s se mueve tu marca.</p>
                        <p className="blog-text">S&uacute;mate, comparte la noticia, prende la chispa y… ✨ Que la suerte te encuentre flotando sobre Turqu&iacute;a. ✨</p>
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
                        <p className="categorias">CAPADOCIA</p>
                    </div>
                    <div className="barraLateral-pubRecientes">
                        <p className="titulo-lateral">PUBLICACIONES RECIENTES</p>
                        <div className="Pub">
                            <Link to="/blog6">
                            <img src={decathlonImg} className="img-prev" alt="Decathlon en Atlantis"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Descubre Decathlon en Atlantis</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                        <div className="Pub">
                            <Link to="/blog4">
                            <img src={FoodiesImg} className="img-prev" alt="Plan foodie Atlantis"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Explora un mundo de sabores en un solo destino.</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                        <div className="Pub">
                            <Link to="/blog3">
                            <img src={beautyLoversImg} className="img-prev" alt="Lifestyle en Atlantis"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Transforma tu energ&iacute;a, transforma tu vida.</p>
                                <p className="Pub-fechaComment">Abril, 2025 1 Comentario</p>
                            </div>
                            </Link>
                        </div>
                        <div className="Pub">
                            <Link to="/blog2">
                            <img src={funLoversImg} className="img-prev" alt="Fun lovers Atlantis"/>
                            <div className="Pub-text">
                                <p className="Pub-titulo">Qu&eacute; ser&iacute;a de una gran pel&iacute;cula sin el lugar perfecto para verla?</p>
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
export {Blog7};
