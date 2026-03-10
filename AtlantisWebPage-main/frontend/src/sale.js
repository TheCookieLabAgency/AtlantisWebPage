import React from "react";
import "./css/sale.css";
import { FacebookMediaGallery } from "./components/FacebookGalley";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";


//Ofertas del Mes
/*import jbStoryOleosImg from "./img/SALE/OfertasSeptiembre/JB STORY OLEOS.png";
import suenaEnRosaImg from "./img/SALE/OfertasSeptiembre/Story Sueña en rosa.png";
import dualIphone16PlusImg from "./img/SALE/OfertasSeptiembre/DUAL_IPHONE 16 PLUS STORY.png";
import jbAguasTocadorImg from "./img/SALE/OfertasSeptiembre/JB STORY AGUAS DE TOCADOR.png";
import jbHogarImg from "./img/SALE/OfertasSeptiembre/JB STORY HOGAR.png";
*/
import { Footer } from "./components/Footer";

import logo1 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-Actionblack.png";
import logo2 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-casaideas.png";
import logo3 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-chevignon.png";
import logo4 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-cinemark.png";
import logo5 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-crepes.png";
import logo6 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-cromantic.png";
import logo7 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-dollarcity.png";
import logo8 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-Actionblack.png";
import logo9 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-farmatodo.png";
import logo11 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-juanvaldez.png";
import logo12 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-jumbo.png";
import logo13 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-labiferia.png";
import logo14 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-maccenter.png";
import logo15 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-mercedescampuzano.png";
import logo16 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-pandora.png";
import logo17 from "./img/HOME/CARRUSEL MARCAS/LogoMarca-parmesano.png";

import electrolineraIcon from "./img/SALE/icon_electrolinera.svg";
import premioEstacionamientoIcon from "./img/SALE/icon_premioestacionamiento.svg";
import soyTopIcon from "./img/SALE/icon_soytop.svg";

// Promos actuales (OfertasSeptiembre)
import atlantisImg from "./img/SALE/OfertasSeptiembre/Atlantis.png";
import macCenterImg from "./img/SALE/OfertasSeptiembre/Mac-Center.png";
import loveStoryImg from "./img/SALE/OfertasSeptiembre/kv-Lovestory_historia.jpg";


const redirectToWhatsapp = () => {
    const phoneNumber = '573187503969';
    const message = 'Hola, quiero más información sobre Atlantis';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };


function CenteredPromoCarousel({
  items,
  autoMs = 3400,
  spacing = 84,          // separación base
  cardWidth = 300,       // ancho base carta
  sideCount = 3,
  mobileSideCount = 1,
  mobileBreakpoint = 768,
  scaleBoost = 1.5,      // escala global

  // Borde blur (se mantiene)
  blurEdge = 18,
  blurAmount = 18,
  blurOpacity = 0.55,


  centerBias = 50,        
}) {
  const [active, setActive] = React.useState(0);
  const [winW, setWinW] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const isMobile = winW <= mobileBreakpoint;
  const visibleSide = isMobile ? mobileSideCount : sideCount;

  const n = items.length;
  const pausedRef = React.useRef(false);
  const timerRef = React.useRef(null);

  // drag
  const [dragX, setDragX] = React.useState(0);
  const startXRef = React.useRef(0);
  const isDraggingRef = React.useRef(false);

  const next = React.useCallback(() => setActive((i) => (i + 1) % n), [n]);
  const prev = React.useCallback(() => setActive((i) => (i - 1 + n) % n), [n]);

  const startTimer = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => { if (!pausedRef.current) next(); }, autoMs);
  }, [autoMs, next]);

  const resetAutoplay = React.useCallback(() => { pausedRef.current = false; startTimer(); }, [startTimer]);

  React.useEffect(() => {
    if (n) startTimer();
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [n, startTimer]);

  React.useEffect(() => {
    const onResize = () => setWinW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onEnter = () => (pausedRef.current = true);
  const onLeave = () => (pausedRef.current = false);

  const onTouchStart = (e) => {
    pausedRef.current = true;
    const t = e.touches?.[0]; if (!t) return;
    startXRef.current = t.clientX; isDraggingRef.current = true; setDragX(0);
  };
  const onTouchMove = (e) => { if (!isDraggingRef.current) return; const t = e.touches?.[0]; if (!t) return; setDragX(t.clientX - startXRef.current); };
  const onTouchEnd = () => {
    if (!isDraggingRef.current) return;
    const th = 50; if (dragX <= -th) next(); else if (dragX >= th) prev();
    setDragX(0); isDraggingRef.current = false; resetAutoplay();
  };

  const onPointerDown = (e) => { if (isMobile) return; pausedRef.current = true; startXRef.current = e.clientX; isDraggingRef.current = true; setDragX(0); };
  const onPointerMove = (e) => { if (!isDraggingRef.current) return; setDragX(e.clientX - startXRef.current); };
  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    const th = 60; if (dragX <= -th) next(); else if (dragX >= th) prev();
    setDragX(0); isDraggingRef.current = false; resetAutoplay();
  };

  // ====== GEOMETRÍA ======
  const stepXBase = cardWidth + spacing;
  const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

  // proporción 16:9 para tus imágenes 1920x1080
  const baseCardHeight = (cardWidth * 9) / 16;
  const maxScale = scaleBoost;
  const neededHeight = Math.round(baseCardHeight * maxScale + 90);

  // 🟣 altura del contenedor + espacio para puntos en móvil
  const mobileDotsH = 24; // alto aproximado de los dots
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: `clamp(${Math.max(300, neededHeight)}px, 54vw, ${neededHeight + 180}px)`,
    paddingBottom: isMobile ? mobileDotsH + 12 : 0, // ← reserva espacio para que no los tape
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    touchAction: "pan-y",
    perspective: 1400,
  };

  // 🟣 Dots por encima de las cartas y centrados
  const dotsWrapStyle = {
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 8,
    zIndex: 3000,         // ← por encima de las slides
    pointerEvents: "auto" // ← clickeables
  };
  const dotBase = { width: 8, height: 8, borderRadius: "50%", border: "1px solid rgba(0,0,0,.25)", background: "rgba(0,0,0,.12)", transition: "transform .2s ease, background .2s ease" };
  const dotActive = { background: "#660099", borderColor: "#660099", transform: "scale(1.2)" };

  return (
    <div
      style={containerStyle}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
      onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp}
      aria-roledescription="carrusel" aria-label="Promociones"
    >
      {!isMobile && (
        <>
          <button aria-label="Anterior" onClick={() => { prev(); resetAutoplay(); }}
            style={{ position: "absolute", left: 10, zIndex: 2500, background: "rgba(0,0,0,.45)", color: "#fff", border: 0, width: 36, height: 36, borderRadius: "50%", cursor: "pointer" }}>‹</button>
          <button aria-label="Siguiente" onClick={() => { next(); resetAutoplay(); }}
            style={{ position: "absolute", right: 10, zIndex: 2500, background: "rgba(0,0,0,.45)", color: "#fff", border: 0, width: 36, height: 36, borderRadius: "50%", cursor: "pointer" }}>›</button>
        </>
      )}

      {items.map((p, i) => {
        // offset circular mínimo
        let raw = i - active;
        if (raw > n / 2) raw -= n;
        if (raw < -n / 2) raw += n;

        const abs = Math.abs(raw);
        const visible = abs <= visibleSide;

        // t = 0 (centro), 1 (muy al fondo)
        const maxDepth = visibleSide + 1;
        const t = Math.min(abs / maxDepth, 1);
        const e = easeOutQuad(t);

        // escala base + multiplicador global
        const scaleBase = 1 - 0.30 * e;  // 1, 0.9, 0.78, 0.68...
        const scale = scaleBase * scaleBoost;

        // arco y profundidad
        const stepX = stepXBase * (1 - 0.35 * e);
        const depth = -220 * e;
        const tilt = -raw * (12 * e);

        const opacity = Math.max(0.35, 1 - 0.22 * abs);

        const slideStyle = {
          position: "absolute",
          top: "50%", left: "50%",
          width: cardWidth,  // la altura vendrá por aspect-ratio 16:9 de la carta
          transform: `
            translate(-50%,-50%)
            translateX(${raw * stepX + dragX + centerBias}px)  /* ← corrección de centrado */
            translateZ(${depth}px)
            rotateY(${tilt}deg)
            scale(${scale})
          `,
          transformStyle: "preserve-3d",
          transition: isDraggingRef.current
            ? "none"
            : "transform 560ms cubic-bezier(.22,.61,.36,1), opacity 560ms cubic-bezier(.22,.61,.36,1)",
          zIndex: 1000 - abs,
          opacity: visible || abs === 0 ? opacity : 0,
          cursor: abs === 0 ? "default" : "pointer",
          pointerEvents: visible ? "auto" : "none",
          willChange: "transform, opacity",
        };

        return (
          <div
            key={i}
            style={slideStyle}
            onClick={() => { if (abs !== 0) { setActive(i); resetAutoplay(); } }}
            role={abs === 0 ? "group" : "button"}
            aria-label={`${i + 1} de ${n}`}
          >
            <div
              className="promo-card"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: abs === 0 ? "0 22px 52px rgba(0,0,0,.22)" : "0 12px 28px rgba(0,0,0,.16)",
                transition: "box-shadow 300ms ease",
              }}
            >
              {/* Fondo borroso */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${p.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: `blur(${blurAmount}px)`,
                  transform: "scale(1.1)",
                  opacity: blurOpacity,
                }}
              />
              {/* Imagen completa con borde blur (espaciado) */}
              <div
                style={{
                  position: "absolute",
                  inset: blurEdge,
                  borderRadius: 10,
                  overflow: "hidden",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src={p.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
              {/* Viñeta suave */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(110% 110% at 50% 50%, rgba(255,255,255,0) 65%, rgba(0,0,0,.08) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        );
      })}

      {isMobile && n > 1 && (
        <div style={dotsWrapStyle} aria-label="Indicadores de carrusel">
          {items.map((_, i) => (
            <button key={i} onClick={() => { setActive(i); resetAutoplay(); }}
              aria-label={`Ir a la promoción ${i + 1}`}
              style={{ ...dotBase, ...(i === active ? dotActive : null) }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------------------- */

function Sale() {
  // Promos actuales (3 imágenes)
  const promosNew = [
    { img: atlantisImg,  title: "Atlantis - Difusor Glossy Gardenia", description: "Promoción en The Candle Shop" },
    { img: macCenterImg, title: "Mac Center - Apple Event",           description: "Sé el primero en enterarte" },
    { img: loveStoryImg, title: "Love Story - Nueva Colección",       description: "Joyería entrelazos" },
  ];
  /*const promos = [
    { img: jbStoryOleosImg, title: "JB STORY ÓLEOS", description: "Ofertas del mes", type: "monthly" },
    { img: suenaEnRosaImg, title: "Story Sueña en Rosa", description: "Ofertas del mes", type: "monthly" },
    { img: dualIphone16PlusImg, title: "DUAL iPhone 16 Plus", description: "Ofertas del mes", type: "monthly" },
    { img: jbAguasTocadorImg, title: "JB STORY Aguas de Tocador", description: "Ofertas del mes", type: "monthly" },
    { img: jbHogarImg, title: "JB STORY Hogar", description: "Ofertas del mes", type: "monthly" },
  ];*/

  const brandLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17,
  ];

  return (
    <div className="sale-page">
      <Navigation />
      <Whatsapp />

      {/* Banner */}
      <header className="main-header-fon-sale" />

      {/* Promos */}
      <section className="sale-page promos-section">
        <CenteredPromoCarousel
          items={promosNew}
          autoMs={3400}
          spacing={90}
          cardWidth={300}
          sideCount={2}
          scaleStep={0.08}
        />
      </section>



      <div className="brands-section">
        <div
          className="scroller"
          data-animated="true"
          data-speed="slow"
          data-direction="left"
        >
          <div className="scroller__inner">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <img key={i} src={logo} alt={`Logo ${i + 1}`} className="brand-logo" />
            ))}
          </div>
        </div>
      </div>

      {/* Encuéntrate con lo que más quieres */}
      <section className="find-section">
        <FacebookMediaGallery/>
      </section>

      {/* Queremos conocerte */}
      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h2>
              Queremos <span className="purple-text">conocerte.</span>
            </h2>

            <div className="contact-details">
              <div className="location-wrapper">
                <div className="contact-item">
                  <h3>UBICACIÓN Y HORARIO</h3>
                  <div className="contact-detail">
                    <FaMapMarkerAlt />
                    <span>Calle 81 No. 13-05, Bogotá, Colombia</span>
                  </div>
                  <div className="contact-detail">
                    <FaClock />
                    <span>Lunes-Domingo de 5:00 a.m. a 12:00 a.m.</span>
                  </div>
                </div>
              </div>

              <div className="contact-wrapper">
                <div className="contact-item">
                  <h3>CONTACTO</h3>
                  <div className="contact-detail">
                    <FaPhone />
                    <span onClick={redirectToWhatsapp} style={{ cursor: 'pointer' }}>
                      318 7503969
                    </span>
                  </div>
                  <div className="contact-detail">
                    <FaEnvelope />
                    <span>habeasdata@atlantisplaza.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="map-section">
        <div className="map-container-sale">
          <iframe
            title="Ubicación Atlantis"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7399361249844!2d-74.0560605846766!3d4.666915443094714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aa3ef4c73c5%3A0xe2d32bc6c441abc6!2sAtlantis%20Plaza!5e0!3m2!1ses!2sco!4v1684436900144!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Servicios */}
      <section className="services-section">
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">
              <img src={electrolineraIcon} alt="Electrolinera" />
            </div>
            <h3>ELECTROLINERA</h3>
            <p>Carga tu vehículo eléctrico mientras visitas Atlantis.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src={premioEstacionamientoIcon} alt="Premio Estacionamiento" />
            </div>
            <h3>PREMIO ESTACIONAMIENTO</h3>
            <p>Premiados por ofrecer el mejor espacio para micromovilidad.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src={soyTopIcon} alt="Soy Top" />
            </div>
            <h3>SOY TOP</h3>
            <p>Registra tus compras y acumula beneficios exclusivos.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export { Sale };
