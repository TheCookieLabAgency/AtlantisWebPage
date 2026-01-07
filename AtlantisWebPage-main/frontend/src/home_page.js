import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./css/homePage.css";
import { BrandCarousel } from "./BrandCarousel";
import { CategoryCarousel } from "./CategoryCarousel";
import { Navigation } from "./components/Navigation";
import { SocialMediaGallery } from "./components/InstagramGallery";
import { Whatsapp } from "./components/Whatsapp";

import bannerVideo from './Material/BANNER-VIDEO.mp4';
// Banners estáticos que siguen al video inicial
import banner2 from './Material/banner_inicio/septiembre/BANNER SEPTIEMBRE_1.png';
import banner3 from './Material/banner_inicio/septiembre/BANNER SEPTIEMBRE_3.png';
import banner4 from './Material/banner_inicio/septiembre/BANNER SEPTIEMBRE_4.png';
import banner5 from './Material/banner_inicio/octubre/BANNER_SORTEO.png';
import sorteoPdf from './Material/banner_inicio/octubre/TYC_SORTEO.pdf';
import saleImg from "./Material/SALE.png";
import marcasFavoritas from "./Material/MARCAS.png";
import comoLlegar from "./Material/MAPA.png";

import Tacos from "./Material/GastronomiaHome/GASTRONOMIA-3-CAPA_TACOS.png";
import Aguitas from "./Material/GastronomiaHome/GASTRONOMIA-1-CAPA_BEBIDAS.png";
import Pastica from "./Material/GastronomiaHome/GASTRONOMIA-2-CAPA_PASTA.png";

import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import { Footer } from "./components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CINEMARK_URL = "https://www.cinemark.com.co/ciudad/bogota/atlantis";

const importCinemaMovies = () => {
  try {
    const context = require.context(
      "./Material/MaterialCartelera/cine",
      false,
      /\.(png|jpe?g|svg)$/
    );

    return context
      .keys()
      .sort()
      .map((key) => {
        const cleanName = key.replace("./", "");
        const baseName = cleanName.replace(/\.(png|jpe?g|svg)$/i, "");
        // Remove trailing numeric codes (keep short sequel numbers like "2" or "3")
        const nameWithoutCodes = baseName.replace(/(-\d{5,})+$/g, "");
        const normalized = nameWithoutCodes.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
        const title = normalized
          ? normalized
              .toLowerCase()
              .replace(/\b\w/g, (char) => char.toUpperCase())
          : "Cartelera Cinemark";

        return {
          img: context(key),
          enlace: CINEMARK_URL,
          titulo: title,
        };
      });
  } catch (error) {
    console.error("No se pudo cargar la cartelera de cine:", error);
    return [];
  }
};

const peliculas = importCinemaMovies();

/* Contacto */
const email = 'habeasdata@atlantisplaza.com';
const subject ='Consulta Atlantis';

function HomePage(){
  const [isMobile, setIsMobile] = useState(false);
  // 0 = banner video, 1.. = banners
  const [heroIndex, setHeroIndex] = useState(0);
  const heroTimerRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [activeMovie, setActiveMovie] = useState(null);

  /* 🔔 ref y estado para la sección de gastronomía (scroll-trigger) */
  const gastroRef = useRef(null);
  const [gastroActive, setGastroActive] = useState(false);

  /* Detectar móvil */
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Preload de banners solo en móvil para mejorar la carga percibida
  useEffect(() => {
    if (!isMobile) return;
    const sources = [banner2, banner3, banner4, banner5];
    const preloaders = sources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    return () => {
      preloaders.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [isMobile]);

  // Preload global de banners (PC y móvil)
  useEffect(() => {
    const imgSources = [banner2, banner3, banner4, banner5];
    const imgPreload = imgSources.map((src) => {
      const i = new Image();
      i.src = src;
      return i;
    });

    return () => {
      imgPreload.forEach((i) => { i.onload = null; i.onerror = null; });
    };
  }, []);

  // Preload del banner principal en desktop para evitar parpadeo
  useEffect(() => {
    if (isMobile) return;
    const imgs = [banner2, banner3, banner4, banner5].map((src) => {
      const i = new Image();
      i.src = src;
      return i;
    });
    return () => {
      imgs.forEach((i) => {
        i.onload = null;
        i.onerror = null;
      });
    };
  }, [isMobile]);

  // Medir la altura del header para la máscara negra en móvil
  useEffect(() => {
    if (!isMobile) {
      setNavHeight(0);
      return;
    }
    const overlay = document.querySelector('.navigation-overlay');
    const topBar = document.querySelector('.top-bar');
    const mainHeader = document.querySelector('.main-header');

    const calc = () => {
      if (overlay) {
        const h = overlay.getBoundingClientRect().height || 0;
        setNavHeight(h);
        return;
      }
      let sum = 0;
      if (topBar) sum += topBar.getBoundingClientRect().height || 0;
      if (mainHeader) sum += mainHeader.getBoundingClientRect().height || 0;
      setNavHeight(sum);
    };

    calc();
    window.addEventListener('resize', calc);
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(calc);
      if (overlay) ro.observe(overlay);
      if (topBar) ro.observe(topBar);
      if (mainHeader) ro.observe(mainHeader);
    }
    return () => {
      window.removeEventListener('resize', calc);
      if (ro) ro.disconnect();
    };
  }, [isMobile]);

  const cinemaSettings = useMemo(() => {
    const totalMovies = peliculas.length || 1;
    const baseSlides = isMobile ? 1 : Math.min(4, totalMovies);
    const centerMode = !isMobile && totalMovies > 1;

    return {
      dots: totalMovies > 1,
      arrows: totalMovies > 1,
      infinite: totalMovies > baseSlides,
      speed: 600,
      slidesToShow: baseSlides,
      slidesToScroll: isMobile ? 1 : Math.min(2, baseSlides),
      autoplay: totalMovies > 1,
      autoplaySpeed: 4500,
      pauseOnHover: true,
      accessibility: true,
      centerMode,
      centerPadding: centerMode ? (totalMovies >= 3 ? '140px' : '10vw') : '0px',
      focusOnSelect: centerMode,
      swipeToSlide: true,
      adaptiveHeight: true,
      cssEase: 'ease-in-out',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: Math.min(3, totalMovies),
            slidesToScroll: Math.min(2, Math.min(3, totalMovies)),
            centerMode: totalMovies > 1,
            centerPadding: totalMovies >= 3 ? '100px' : '8vw',
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: Math.min(2, totalMovies),
            slidesToScroll: Math.min(1, Math.min(2, totalMovies)),
            centerMode: totalMovies > 1,
            centerPadding: '70px',
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: totalMovies > 1,
            centerMode: false,
            centerPadding: '0px',
          },
        },
      ],
    };
  }, [isMobile, peliculas.length]);

  /* Gmail + WhatsApp */
  const redirectToGmail = () => {
    const encodedSubject = encodeURIComponent(subject);
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${encodedSubject}`;
    window.open(url, '_blank');
  };
  const redirectToWhatsapp = () => {
    const phoneNumber = "573187503969";
    const message = "Hola, quiero más información sobre Atlantis";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  /* Scroll a anclas */
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  /* 🔥 IntersectionObserver para activar gastronomía ANTES de entrar */
  useEffect(() => {
    if (!gastroRef.current || isMobile) return;

    const el = gastroRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setGastroActive(true);   // activa clase .active
            observer.unobserve(el);  // corre una sola vez
          }
        });
      },
      {
        root: null,
        rootMargin: "200px 0px -20% 0px", // empieza un poco antes
        threshold: 0.1
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  const navigate = useNavigate();
  const handleClick = (categoria) => navigate("/Nuestras_marcas", { state: { categoria } });

  const commercialVideoLink = 'https://multiplika.co/portal-clientes/';
  const heroSlides = [
    { src: bannerVideo, link: null, alt: 'Banner Video', isVideo: true },
    { src: banner2, link: commercialVideoLink, alt: 'Banner Septiembre 1' },
    { src: banner3, link: 'https://destinoatlantis.soytopmember.com/', alt: 'Banner 2' },
    { src: banner4, link: 'https://www.instagram.com/atlantis.oficial/p/DOO6dp3k_44/', alt: 'Banner 3' },
    { src: banner5, link: sorteoPdf, alt: 'Banner sorteo' },
  ];
  const TOTAL_HERO_SLIDES = heroSlides.length;

  // Rotacion automatica para los banners principales
  useEffect(() => {
    if (heroTimerRef.current) {
      clearInterval(heroTimerRef.current);
      heroTimerRef.current = null;
    }
    heroTimerRef.current = setInterval(() => {
      setHeroIndex((prev) => (prev === TOTAL_HERO_SLIDES - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (heroTimerRef.current) {
        clearInterval(heroTimerRef.current);
        heroTimerRef.current = null;
      }
    };
  }, [TOTAL_HERO_SLIDES]);

  const nextHero = () => setHeroIndex((idx) => (idx === TOTAL_HERO_SLIDES - 1 ? 0 : idx + 1));
  const prevHero = () => setHeroIndex((idx) => (idx === 0 ? TOTAL_HERO_SLIDES - 1 : idx - 1));
  const openMoviePopover = (movie) => setActiveMovie(movie);
  const closeMoviePopover = () => setActiveMovie(null);

  return (
    <div className="home">
      {/* Navegación unificada */}
      <Navigation />

      {/* Header + Video/Banners */}
      <header
        className="main-header-fon"
        style={isMobile ? { marginTop: Math.max((navHeight || 0) - 16, 0) } : undefined}
      >
        <div className="video-container">
          {(() => {
            const slide = heroSlides[heroIndex] || heroSlides[0];
            const aria = slide.link ? 'Ir a promocion del banner ' + (heroIndex + 1) : undefined;
            const media = slide.isVideo ? (
              <video
                className="background-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={slide.alt || 'Banner video'}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt || 'Banner ' + (heroIndex + 1)}
                className="hero-image"
                draggable={false}
                decoding="async"
                loading="eager"
                fetchpriority="high"
              />
            );
            return slide.link ? (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
                aria-label={aria}
              >
                {media}
              </a>
            ) : (
              media
            );
          })()}
          <button className="hero-nav prev" onClick={prevHero} aria-label="Anterior">&#8249;</button>
          <button className="hero-nav next" onClick={nextHero} aria-label="Siguiente">&#8250;</button>
        </div>
      </header>

      <Whatsapp/>

      {/* Botones principales */}
      <div className="main-buttons">
        <Link to="/sale" className="image-button" aria-label="Ir a SALE">
          <img src={saleImg} alt="SALE" />
        </Link>
        <Link to="/nuestras_marcas" className="image-button" aria-label="Ir a tus marcas favoritas">
          <img src={marcasFavoritas} alt="Encuentra tu marca favorita" />
        </Link>
        <Link
          to="https://www.google.com/maps/place/Atlantis+Plaza/@4.6669154,-74.0560605,17z"
          className="image-button"
          aria-label="Cómo llegar a Atlantis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={comoLlegar} alt="Cómo llegar" />
        </Link>
      </div>

      {/* 🔥 Carrusel de categorías */}
      <CategoryCarousel />

      {/* Gastronomía con capas animadas por scroll */}
      <section className="gastronomy">
        <div
          ref={gastroRef}
          className={`gastronomy-animated ${gastroActive ? 'active' : ''}`}
          aria-hidden="true"
        >
          <img className="gastronomy-tacos" src={Tacos} alt="" />
          <img className="gastronomy-aguitas" src={Aguitas} alt="" />
          <img className="gastronomy-pastica" src={Pastica} alt="" />
        </div>

        <div className="overlay-text">
          <h2>ATLANTIS GASTRONÓMICO</h2>
          <p>
            A lo largo de los años, Atlantis ha evolucionado hasta convertirse en 
            <strong> uno de los destinos gastronómicos de la ciudad</strong>. 
            </p>
            <p>
            Su oferta combina <strong> experiencias de alta cocina</strong> con propuestas 
            <strong> accesibles y diversas</strong>, lo que lo posiciona como 
            <strong> un punto de encuentro</strong> para todos los gustos.
          </p>
          <p><strong>¡DESCUBRE NUEVOS SABORES!</strong></p>
          <button onClick={() => handleClick("BUEN COMER")}>DESCUBRE UN NUEVO SABOR</button>
        </div>
      </section>

      {/* Marcas */}
      <BrandCarousel />

      {/* Cine */}
      <section className="cinema">
        <div className="cinema-container">
          <h2>DESCUBRE UNA GRAN HISTORIA</h2>

          {peliculas.length > 0 ? (
            <>
              <div className="cinema-slider">
                <Slider {...cinemaSettings}>
                  {peliculas.map((pelicula, index) => (
                    <div
                      key={pelicula.titulo || index}
                      className="movie-slide"
                    >
                      <div
                        className="movie-card"
                        onClick={() => openMoviePopover(pelicula)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openMoviePopover(pelicula);
                          }
                        }}
                      >
                        <img
                          src={pelicula.img}
                          alt={pelicula.titulo ? `Pelicula: ${pelicula.titulo}` : `Pelicula ${index + 1}`}
                        />
                        <a
                          href={pelicula.enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ver-mas"
                          onClick={(e) => e.stopPropagation()}
                        >
                          VER MAS
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              {activeMovie && (
                <div className="movie-popover-backdrop" onClick={closeMoviePopover}>
                  <div
                    className="movie-popover"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-label={activeMovie.titulo || 'Detalle de película'}
                  >
                    <img src={activeMovie.img} alt={activeMovie.titulo || 'Pelicula'} />
                    <div className="movie-popover-body">
                      <h3>{activeMovie.titulo || 'Cartelera Cinemark'}</h3>
                      <p>Disfruta esta función en Cinemark Atlantis.</p>
                      <div className="popover-actions">
                        <a
                          href={activeMovie.enlace || CINEMARK_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="popover-link"
                        >
                          Ver horarios
                        </a>
                        <button className="popover-close" onClick={closeMoviePopover}>Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="cinema-empty">Cartelera proximamente.</p>
          )}
        </div>
      </section>

      {/* Sección "Encuéntrate con lo que más quieres" */}
      <section className="find-section">
        <h2>ENCUÉNTRATE CON LO QUE MÁS QUIERES</h2>
        <p>Mantente al día con nuestras campañas, eventos y novedades. Descubre todo lo que Atlantis tiene preparado para ti.</p>

        <div className="events-grid">
          <div className="event-card">
            <img src={require("./Material/PLAN HOGAR.png")} alt="Home Lovers" />
            <Link to="/Blog1" className="event-overlay" aria-label="Ver Home Lovers">
              <span className="event-category">HOME LOVERS</span>
              <div className="event-author">
              </div>
            </Link>
          </div>

          <div className="event-card">
            <img src={require("./Material/PLAN HOBBIES.png")} alt="Fun Lovers" />
            <Link to="/Blog2" className="event-overlay" aria-label="Ver Fun Lovers">
              <span className="event-category">FUN LOVERS</span>
              <div className="event-author">
              </div>
            </Link>
          </div>

          <div className="event-card">
            <img src={require("./Material/PLAN LIFESTYLE.png")} alt="Beauty and Sport Lovers" />
            <Link to="/Blog3" className="event-overlay" aria-label="Ver Lifestyle">
              <span className="event-category">LIFESTYLE</span>
              <div className="event-author">
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mapa + Contáctanos + Instagram */}
      <section id="Informacion" className="map">
        <div className="info-y-mapa">
          <div className="info-section">
            <div className="info-content">
              <h2>CÓMO LLEGAR</h2>
              <p>
                Estamos en el corazón de la Zona T, el epicentro del turismo, el entretenimiento y las mejores experiencias en Bogotá,
                rodeados de tiendas, restaurantes y atracciones imperdibles.
              </p>
              <p><strong>¿Cómo llegar?</strong></p>
              <ul>
                <li> <strong>Transporte público:</strong> Toma las rutas de TransMilenio que pasan por la estación Héroes, a solo unos minutos caminando.</li>
                <li> <strong>Bicicleta:</strong> Disfruta del mejor biciparqueadero de los centros comerciales de Bogotá, sin costo.</li>
                <li> <strong>Carro:</strong> Tendrás un acceso rápido y cómodo con nuestro Smart Parking sin contacto.</li>
                <li> <strong>A pie:</strong> Si vienes desde la Zona Rosa o el Parque de la 93, estamos a la distancia ideal para disfrutar de un paseo agradable.</li>
              </ul>
              <p>Ven, vive la experiencia ATLANTIS.</p>

              <section className="contacto-section">
                <div className="fila">
                  <div className="columna">
                    <h4>VISÍTANOS</h4>
                    <p><FaMapMarkerAlt style={{ marginRight: '8px', color:'yellow' }} />Calle 81 No. 13-05<br />Bogotá, Colombia</p>
                  </div>
                  <div className="columna">
                    <h4>CONTÁCTANOS</h4>
                    <p onClick={redirectToWhatsapp} style={{ cursor: 'pointer' }}>
                      <FaPhoneAlt style={{ marginRight: '8px', color:'yellow' }} /> +57 318 7503969
                    </p>
                  </div>
                </div>
                <hr />
                <div className="fila">
                  <div className="columna">
                    <h4> NUESTRO HORARIO</h4>
                    <p><FaCalendarAlt style={{ marginRight: '8px', color:'yellow' }} />Lunes a domingo<br />5:00 a.m. a 12:00 a.m.</p>
                  </div>
                  <div className="columna">
                    <h4>ESCRÍBENOS</h4>
                    <p onClick={redirectToGmail} style={{ cursor: 'pointer' }}>
                      <FaEnvelope style={{ marginRight: '8px', color:'yellow' }} />habeasdata@atlantisplaza.com
                    </p>
                  </div>
                </div>
                <hr />
                <div className="fila">
                  <div className="columna">
                    <h3>SÍGUENOS</h3>
                    <div className="social-icons">
                      <a href="https://www.facebook.com/AtlantisUnidadComercial" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Atlantis">
                        <FaFacebookF/>
                      </a>
                      <a href="https://www.instagram.com/atlantis.oficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Atlantis">
                        <FaInstagram />
                      </a>
                      <a href="https://www.tiktok.com/@ccatlantis?lang=es" target="_blank" rel="noopener noreferrer" aria-label="TikTok de Atlantis">
                        <FaTiktok />
                      </a>
                    </div>
                  </div>
                  <div className="columna">
                    <button
                      className="Registro"
                      onClick={() => (window.location.href = 'https://www.soytopmember.com/')}
                    >
                      Regístrate
                    </button>
                  </div>  
                </div>
              </section>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Ubicación Atlantis"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.7399361249844!2d-74.0560605!3d4.6669154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aa3ef4c73c5%3A0xe2d32bc6c441abc6!2sAtlantis%20Plaza!5e0!3m2!1ses!2sco!4v1684436900144!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="insta-gallery">
            <SocialMediaGallery/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export { HomePage };
