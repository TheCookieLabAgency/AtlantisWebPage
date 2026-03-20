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


function VlogAtlantis(){
    return(
        <div className="plan-page blog-page">

            <Navigation />
            <Whatsapp/>

            {/* HERO */}
            <header className="main-header-fon-blog">
                <div className="banner-title blog-hero">
                    <p className="hero-kicker">Vlog Atlantis</p>
                    <h1>ATLANTIS 26 AÑOS</h1>
                    <p className="hero-sub">
                        Historia, renovación y evolución del centro comercial.
                    </p>
                </div>
            </header>

            {/* BLOG */}
            <div className="blog">

                <div className="blog-boddy">

                    <div className="blog-header">
                        <p className="blog-header-descript">ATLANTIS</p>
                        <p className="blog-header-titulo">
                            Atlantis: 26 años siendo puerta y protagonista del comercio en Bogotá
                        </p>
                    </div>

                    {/* IMAGEN 1 */}
                    <img src={blogAtlantis1} className="blog-img" alt="Historia Atlantis"/>

                    <div className="blog-textPrincipal">

                        <p className="blog-subtitulo">Los inicios de un ícono urbano</p>

                        <p className="blog-text">
                        En el año 2000, cuando Bogotá aún no tenía la densidad comercial que hoy caracteriza
                        a la Zona T, abrió sus puertas el Centro Comercial Atlantis. Lo que en ese momento era
                        una apuesta arquitectónica inspirada en el CocoWalk de Miami —un concepto tropical,
                        fresco y disruptivo para la ciudad— terminó convirtiéndose en uno de los primeros
                        íconos comerciales del norte de Bogotá.
                        </p>

                        <p className="blog-text">
                        Durante su primera década, Atlantis fue un referente turístico y social. La icónica
                        guitarra de Hard Rock Café instalada en su fachada no solo marcaba la presencia de la
                        marca en Colombia, sino que se convirtió en un punto de encuentro y fotografía en la
                        ciudad.
                        </p>

                        <p className="blog-text">
                        Junto con Cinemark y una oferta gastronómica que no existía en el sector en ese
                        momento, Atlantis ayudó a consolidar lo que hoy conocemos como la Zona T.
                        </p>

                    </div>

                    {/* IMAGEN + TEXTO LATERAL */}

                    <div className="blog-secundario">

                        <img src={blogAtlantis2} className="blog-secundario-img" alt="Evolución Atlantis"/>

                        <div className="blog-secundario-texto">

                            <p className="blog-subtitulo">
                            De referente a complemento estratégico
                            </p>

                            <p className="blog-text">
                            Hacia 2014-2015, cuando la Zona T ya contaba con mayor densidad comercial y
                            nuevos actores en el entorno, Atlantis redefinió su posición: dejó de ver el
                            sector como competencia y empezó a asumirse como complemento dentro del
                            ecosistema comercial.
                            </p>

                            <p className="blog-text">
                            Esa reflexión transformó su mix comercial. La apuesta por gastronomía
                            diferenciada, entretenimiento y servicios complementarios fortaleció su
                            identidad como un jugador articulador del sector.
                            </p>

                        </div>

                    </div>

                    <div className="blog-textPrincipal">

                        <p className="blog-subtitulo">
                        La renovación como punto de inflexión
                        </p>

                        <p className="blog-text">
                        En 2016 comenzó uno de los momentos más retadores en su historia: la renovación
                        integral de fachadas e interiorismo.
                        </p>

                        <p className="blog-text">
                        La arquitectura original inspirada en un concepto tropical de los años noventa
                        había sido innovadora en su momento, pero el consumidor exigía actualización.
                        El proyecto de remodelación fue ejecutado por etapas, minimizando el impacto
                        en la operación.
                        </p>

                        <p className="blog-text">
                        Este proceso dio paso a lo que hoy se conoce como su fachada flotante, una
                        solución constructiva eficiente que permitió modernizar el centro comercial
                        sin cerrar el activo.
                        </p>

                        <p className="blog-text">
                        El nombre “Atlantis Plaza” evolucionó a “Atlantis”, reforzando una identidad
                        más aspiracional alineada con la transformación del sector.
                        </p>

                    </div>

                    {/* IMAGEN FINAL */}

                    <img src={blogAtlantis3} className="blog-img" alt="Atlantis actualidad"/>

                    <div className="blog-textPrincipal">

                        <p className="blog-subtitulo">
                        Un activo que se reinventa
                        </p>

                        <p className="blog-text">
                        Tras la pandemia, Atlantis volvió a ajustar su vocación. Con la llegada de
                        nuevos operadores y una estrategia enfocada en servicios complementarios,
                        el centro comercial reafirmó su rol dentro del ecosistema comercial del sector.
                        </p>

                        <p className="blog-text">
                        Entre 2022 y 2025 el tráfico de visitantes creció <strong>41%</strong>,
                        acompañado por un incremento en ventas y niveles de ocupación cercanos
                        al <strong>99%</strong>.
                        </p>

                        <p className="blog-text">
                        El fortalecimiento del mix comercial también se reflejó en la llegada de
                        marcas como el primer formato de <strong>900 m² de Jumbo</strong>,
                        la llegada de <strong>Parmessano</strong> a Bogotá, la presencia
                        de <strong>Decathlon</strong> en la Zona T y la evolución de
                        <strong> Cinemark</strong> con salas Premier.
                        </p>

                        <p className="blog-subtitulo">
                        Disrupción más allá de la arquitectura
                        </p>

                        <p className="blog-text">
                        Atlantis también ha sido pionero en decisiones que marcaron tendencia
                        en el sector, siendo uno de los primeros centros comerciales en
                        declararse oficialmente <strong>pet friendly</strong> en Colombia.
                        </p>

                        <p className="blog-text">
                        Hoy, en una zona donde la oferta comercial se ha multiplicado,
                        Atlantis ha logrado algo más complejo que liderar:
                        <strong> mantenerse relevante.</strong>
                        </p>

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

export {VlogAtlantis};
