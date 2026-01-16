import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./css/nuestraMarcaTest.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandCarousel } from "./BrandCarousel";
import { Navigation } from "./components/Navigation";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";
import { FaHeart } from "react-icons/fa";

import actionBlackLogo from "./Material/logos/ACTION BLACK__.png";
import beikedLogo from "./Material/logos/BEIKED__.png";
import brissaLogo from "./Material/logos/BRISSA__.png";
import casaIdeasLogo from "./Material/logos/CASA IDEAS__.png";
import chevignonLogo from "./Material/logos/CHEVIGNON__.png";
import cinemarkLogo from "./Material/logos/CINEMARK__.png";
import clubHouseLogo from "./Material/logos/CLUB HOUSE__.png";
import crepesLogo from "./Material/logos/CREPES & WAFFLES__.png";
import cromanticLogo from "./Material/logos/CROMANTIC__.png";
import decathlonLogo from "./Material/logos/DECATHLON__.png";
import dejamuLogo from "./Material/logos/DEJAMU__.png";
import dliliLogo from "./Material/logos/DLILI__.png";
import dollarCityLogo from "./Material/logos/DOLLARCITY__.png";
import drSchollsLogo from "./Material/logos/DR SCHOLLS__.png";
import dunkinLogo from "./Material/logos/DUNKIN__.png";
import elCorralLogo from "./Material/logos/EL CORRAL__.png";
import farmatodoLogo from "./Material/logos/FARMATODO__.png";
import fxaLogo from "./Material/logos/FXA__.png";
import goyurtLogo from "./Material/logos/Goyurt__.png";
import grupoSerattaLogo from "./Material/logos/GRUPO SERATTA__.png";
import jirehLogo from "./Material/logos/JIREH__.png";
import jonSonenLogo from "./Material/logos/JON SONEN__.png";
import juanValdezLogo from "./Material/logos/JUAN VALDEZ__.png";
import juliaoLogo from "./Material/logos/JULIAO__.png";
import jumboLogo from "./Material/logos/JUMBO__.png";
import kfcLogo from "./Material/logos/KFC__.png";
import kidsRepublicLogo from "./Material/logos/KIDS REPUBLIC__.png";
import laBiferiaLogo from "./Material/logos/LA BIFERIA__.png";
import laMesaLogo from "./Material/logos/MESA DE LOS SANTOS__.png";
import macCenterLogo from "./Material/logos/MAC CENTER__.png";
import medipielLogo from "./Material/logos/MEDIPIEL__.png";
import mercedesCampuzanoLogo from "./Material/logos/MERCEDES CAMPUZANO__.png";
import mrBonoLogo from "./Material/logos/MR BONO__.png";
import muhLogo from "./Material/logos/MUH__.png";
import parmessanoLogo from "./Material/logos/PARMESSANO__.png";
import pepeGangaLogo from "./Material/logos/PEPE GANGA__.png";
import samsaraLogo from "./Material/logos/SAMSARA__.png";
import springLogo from "./Material/logos/SPRING__.png";
import subwayLogo from "./Material/logos/SUBWAY__.png";
import tugoLogo from "./Material/logos/TUGO__.png";

import crepes from "./img/MARCAS/01 BUEN COMER/crepes.jpg";
import dejamu from "./img/MARCAS/01 BUEN COMER/dejamu.jpg";
import dlili from "./img/MARCAS/01 BUEN COMER/dlili.jpg";
import elCorral from "./img/MARCAS/01 BUEN COMER/el corral.jpg";
import goyurt from "./img/MARCAS/01 BUEN COMER/goyurt.jpg";
import grupoSeratta from "./img/MARCAS/01 BUEN COMER/grupo seratta.jpg";
import juanValdez from "./img/MARCAS/01 BUEN COMER/Juan valdez.jpg";
import kfc from "./img/MARCAS/01 BUEN COMER/kfc.jpg";
import laBiferia from "./img/MARCAS/01 BUEN COMER/LA BIFERIA.jpg";
import laMesa from "./img/MARCAS/01 BUEN COMER/La mesa.jpg";
import mrBono from "./img/MARCAS/01 BUEN COMER/Mr. Bono.jpg";
import parmessano from "./img/MARCAS/01 BUEN COMER/Parmessano.jpg";
import subway from "./img/MARCAS/01 BUEN COMER/subway.jpg";
import beiked from "./img/MARCAS/01 BUEN COMER/BEIKED.png";
import dunkin from "./img/MARCAS/01 BUEN COMER/DUNKIN.png";

import brissa from "./img/MARCAS/02 HOGAR/brissa.jpg";
import candleChop from "./img/MARCAS/02 HOGAR/candle chop.jpg";
import casaIdeas from "./img/MARCAS/02 HOGAR/casa ideas.jpg";
import clubHouse from "./img/MARCAS/02 HOGAR/club house.jpg";
import dollarcity from "./img/MARCAS/02 HOGAR/dollarcity.jpg";
import jumbo from "./img/MARCAS/02 HOGAR/jumbo.jpg";
import pepeGanga from "./img/MARCAS/02 HOGAR/pepe ganga.jpg";
import quality from "./img/MARCAS/02 HOGAR/quality.jpg";
import spring from "./img/MARCAS/02 HOGAR/spring.jpg";
import tugo from "./img/MARCAS/02 HOGAR/tugo.jpg";

import actionBlack from "./img/MARCAS/03 LIFESTYLE/action black.jpg";
import bananaBelts from "./img/MARCAS/03 LIFESTYLE/Banana belts.jpg";
import chevignon from "./img/MARCAS/03 LIFESTYLE/chevignon.jpg";
import cromantic from "./img/MARCAS/03 LIFESTYLE/cromantic.jpg";
import entrelazos from "./img/MARCAS/03 LIFESTYLE/entrelazos.jpg";
import farmatodo from "./img/MARCAS/03 LIFESTYLE/farmatodo.jpg";
import fxa from "./img/MARCAS/03 LIFESTYLE/fxa.jpg";
import jireh from "./img/MARCAS/03 LIFESTYLE/jireh.jpg";
import jonSonen from "./img/MARCAS/03 LIFESTYLE/jon sonen.jpg";
import juliao from "./img/MARCAS/03 LIFESTYLE/juliao.jpg";
import kidsRepublic from "./img/MARCAS/03 LIFESTYLE/kids republic.jpg";
import medipiel from "./img/MARCAS/03 LIFESTYLE/medipiel.jpg";
import mercedesCampuzano from "./img/MARCAS/03 LIFESTYLE/mercedes campuzano.jpg";
import milagros from "./img/MARCAS/03 LIFESTYLE/milagros.jpg";
import muh from "./img/MARCAS/03 LIFESTYLE/muh.jpg";
import pandora from "./img/MARCAS/03 LIFESTYLE/pandora.jpg";
import samsara from "./img/MARCAS/03 LIFESTYLE/samsara.jpg";
import trendy from "./img/MARCAS/03 LIFESTYLE/trendy.jpg";
import wanita from "./img/MARCAS/03 LIFESTYLE/wanita.jpg";
import decathlon from "./img/MARCAS/03 LIFESTYLE/DECATHLON.png";
import drScholls from "./img/MARCAS/03 LIFESTYLE/DR SCHOLLS.png";

import beautiphone from "./img/MARCAS/04 HOBBIES/beautiphone.jpg";
import cinemark from "./img/MARCAS/04 HOBBIES/cinemark.jpg";
import macCenter from "./img/MARCAS/04 HOBBIES/mac center.jpg";
import popsocket from "./img/MARCAS/04 HOBBIES/popsocket.jpg";

const API_BASE = process.env.REACT_APP_API_BASE_URL;
const DEFAULT_HOURS = ["LUNES A DOMINGO 9:00 A.M. A 9:00 P.M."];

const marcasData = {
  "BUEN COMER": [
    { id: 2, name: "Crepes & Waffles", image: crepes, category: "BUEN COMER" },
    { id: 3, name: "Dejamu", image: dejamu, category: "BUEN COMER" },
    { id: 4, name: "Dlili", image: dlili, category: "BUEN COMER" },
    { id: 5, name: "El Corral", image: elCorral, category: "BUEN COMER" },
    { id: 6, name: "Goyurt", image: goyurt, category: "BUEN COMER" },
    { id: 7, name: "Grupo Seratta", image: grupoSeratta, category: "BUEN COMER" },
    { id: 8, name: "Juan Valdez", image: juanValdez, category: "BUEN COMER" },
    { id: 9, name: "KFC", image: kfc, category: "BUEN COMER" },
    { id: 10, name: "La Biferia", image: laBiferia, category: "BUEN COMER" },
    { id: 11, name: "La Mesa", image: laMesa, category: "BUEN COMER" },
    { id: 12, name: "Mr. Bono", image: mrBono, category: "BUEN COMER" },
    { id: 13, name: "Parmessano", image: parmessano, category: "BUEN COMER" },
    { id: 14, name: "Subway", image: subway, category: "BUEN COMER" },
    { id: 49, name: "Beiked", image: beiked, category: "BUEN COMER", hours: ["Todos los dias de 11 a.m. a 8 p.m."] },
    { id: 50, name: "Dunkin'", image: dunkin, category: "BUEN COMER", hours: ["Lunes a sabado de 7 a.m. a 8:30 p.m.", "Domingos de 10 a.m. a 7:00 p.m."] }
  ],
  HOGAR: [
    { id: 15, name: "Brissa", image: brissa, category: "HOGAR" },
    { id: 16, name: "Candle Chop", image: candleChop, category: "HOGAR" },
    { id: 17, name: "Casa Ideas", image: casaIdeas, category: "HOGAR" },
    { id: 18, name: "Club House", image: clubHouse, category: "HOGAR" },
    { id: 19, name: "Dollar City", image: dollarcity, category: "HOGAR" },
    { id: 20, name: "Jumbo", image: jumbo, category: "HOGAR" },
    { id: 21, name: "Pepe Ganga", image: pepeGanga, category: "HOGAR" },
    { id: 22, name: "Quality", image: quality, category: "HOGAR" },
    { id: 23, name: "Spring", image: spring, category: "HOGAR" },
    { id: 24, name: "Tugo", image: tugo, category: "HOGAR" }
  ],
  LIFESTYLE: [
    { id: 25, name: "Action Black", image: actionBlack, category: "LIFESTYLE" },
    { id: 26, name: "Banana Belts", image: bananaBelts, category: "LIFESTYLE" },
    { id: 27, name: "Chevignon", image: chevignon, category: "LIFESTYLE" },
    { id: 28, name: "Cromantic", image: cromantic, category: "LIFESTYLE" },
    { id: 29, name: "Entrelazos", image: entrelazos, category: "LIFESTYLE" },
    { id: 30, name: "Farmatodo", image: farmatodo, category: "LIFESTYLE" },
    { id: 31, name: "FXA", image: fxa, category: "LIFESTYLE" },
    { id: 32, name: "Jireh", image: jireh, category: "LIFESTYLE" },
    { id: 33, name: "Jon Sonen", image: jonSonen, category: "LIFESTYLE" },
    { id: 34, name: "Juliao", image: juliao, category: "LIFESTYLE" },
    { id: 35, name: "Kids Republic", image: kidsRepublic, category: "LIFESTYLE" },
    { id: 36, name: "Medipiel", image: medipiel, category: "LIFESTYLE" },
    { id: 37, name: "Mercedes Campuzano", image: mercedesCampuzano, category: "LIFESTYLE" },
    { id: 38, name: "Milagros", image: milagros, category: "LIFESTYLE" },
    { id: 39, name: "Muh", image: muh, category: "LIFESTYLE" },
    { id: 40, name: "Pandora", image: pandora, category: "LIFESTYLE" },
    { id: 41, name: "Samsara", image: samsara, category: "LIFESTYLE" },
    { id: 42, name: "Trendy", image: trendy, category: "LIFESTYLE" },
    { id: 43, name: "Wanita", image: wanita, category: "LIFESTYLE" },
    { id: 51, name: "Decathlon", image: decathlon, category: "LIFESTYLE", hours: ["Todos los dias de 10 a.m. a 8 p.m."] },
    { id: 52, name: "Dr. Sholls", image: drScholls, category: "LIFESTYLE", hours: ["Lunes a sabado de 8 a.m. a 5 p.m.", "Domingos y festivos de 10 a.m. a 4 p.m."] }
  ],
  HOBBIES: [
    { id: 45, name: "Beautiphone", image: beautiphone, category: "HOBBIES" },
    { id: 46, name: "Cinemark", image: cinemark, category: "HOBBIES" },
    { id: 47, name: "Mac Center", image: macCenter, category: "HOBBIES" },
    { id: 48, name: "Popsocket", image: popsocket, category: "HOBBIES" }
  ]
};

const brandLogos = {
  "Action Black": actionBlackLogo,
  "Beiked": beikedLogo,
  "Brissa": brissaLogo,
  "Casa Ideas": casaIdeasLogo,
  "Chevignon": chevignonLogo,
  "Cinemark": cinemarkLogo,
  "Club House": clubHouseLogo,
  "Crepes & Waffles": crepesLogo,
  "Cromantic": cromanticLogo,
  "Decathlon": decathlonLogo,
  "Dejamu": dejamuLogo,
  "Dlili": dliliLogo,
  "Dollar City": dollarCityLogo,
  "Dr. Sholls": drSchollsLogo,
  "Dunkin'": dunkinLogo,
  "El Corral": elCorralLogo,
  "Farmatodo": farmatodoLogo,
  "FXA": fxaLogo,
  "Goyurt": goyurtLogo,
  "Grupo Seratta": grupoSerattaLogo,
  "Jireh": jirehLogo,
  "Jon Sonen": jonSonenLogo,
  "Juan Valdez": juanValdezLogo,
  "Juliao": juliaoLogo,
  "Jumbo": jumboLogo,
  "KFC": kfcLogo,
  "Kids Republic": kidsRepublicLogo,
  "La Biferia": laBiferiaLogo,
  "La Mesa": laMesaLogo,
  "Mac Center": macCenterLogo,
  "Medipiel": medipielLogo,
  "Mercedes Campuzano": mercedesCampuzanoLogo,
  "Mr. Bono": mrBonoLogo,
  "Muh": muhLogo,
  "Parmessano": parmessanoLogo,
  "Pepe Ganga": pepeGangaLogo,
  "Samsara": samsaraLogo,
  "Spring": springLogo,
  "Subway": subwayLogo,
  "Tugo": tugoLogo
};

const LOGO_DEFAULT_CLASS = "nmt-logo-wrap--sm";

const brandPopupInfo = {
  // 2: {
  //   tagline: "Texto corto",
  //   description: "Descripcion principal para el popup.",
  //   highlights: ["Punto clave 1", "Punto clave 2"],
  //   details: [{ label: "Ubicacion", value: "Nivel 1" }],
  //   links: [{ label: "Ver mas", url: "https://example.com" }],
  //   theme: { primary: "#ff9d5c", secondary: "#ffd36b", accent: "#5fd3ff", ink: "#2a241f" }
  // }
};

const DEFAULT_THEME = {
  primary: "#4aa3ff",
  secondary: "#8ab6ff",
  accent: "#c2b0ff",
  ink: "#1a2233",
};

const normalizeTheme = (theme) => ({
  primary: theme?.primary || DEFAULT_THEME.primary,
  secondary: theme?.secondary || DEFAULT_THEME.secondary,
  accent: theme?.accent || DEFAULT_THEME.accent,
  ink: theme?.ink || DEFAULT_THEME.ink,
});

function NuestrasMarcasTest() {
  const [activeCategory, setActiveCategory] = useState("TODAS");
  const [visibleBrands, setVisibleBrands] = useState(12);
  const [favorites, setFavorites] = useState({});
  const [pending, setPending] = useState(new Set());
  const [logoSizing, setLogoSizing] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const todasLasMarcas = Object.values(marcasData).flat();
  const marcasFiltradas =
    activeCategory === "TODAS" ? todasLasMarcas : marcasData[activeCategory] || [];
  const marcasAMostrar = marcasFiltradas.slice(0, visibleBrands);
  const sliderBrands = marcasFiltradas.length ? marcasFiltradas : todasLasMarcas;
  const previewBrands = marcasFiltradas.slice(0, 3);

  const getBrandTheme = useCallback(
    (brand) => normalizeTheme(brandPopupInfo[brand?.id]?.theme),
    []
  );

  const activeTheme =
    sliderBrands.length > 0
      ? getBrandTheme(sliderBrands[activeSlideIndex] || sliderBrands[0])
      : DEFAULT_THEME;

  const categories = ["TODAS", "BUEN COMER", "HOGAR", "LIFESTYLE", "HOBBIES", "SOY TOP MEMBER"];
  const location = useLocation();
  const categoriaInicial = location.state?.categoria || "TODAS";

  useEffect(() => {
    setActiveCategory(categoriaInicial);
    setVisibleBrands(12);
  }, [categoriaInicial]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleBrands(12);
  };

  const handleVerMas = () => {
    setVisibleBrands((prev) => Math.min(prev + 12, marcasFiltradas.length));
  };

  const openModal = useCallback(
    (brand) => {
      const index = sliderBrands.findIndex((item) => item.id === brand.id);
      const slideIndex = index >= 0 ? index : 0;
      setActiveSlideIndex(slideIndex);
      setIsModalOpen(true);
    },
    [sliderBrands]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleCardKeyDown = (event, brand) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(brand);
    }
  };

  useEffect(() => {
    if (!isModalOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    if (!isModalOpen || !sliderRef.current) return;
    sliderRef.current.slickGoTo(activeSlideIndex, true);
  }, [isModalOpen, activeSlideIndex]);

  const handleSlideChange = useCallback((index) => {
    setActiveSlideIndex(index);
  }, []);

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: sliderBrands.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 520,
    swipe: true,
    swipeToSlide: true,
    cssEase: "cubic-bezier(0.22, 0.61, 0.36, 1)",
    afterChange: handleSlideChange,
  };

  const apiGet = useCallback(async (path) => {
    const t = localStorage.getItem("stm_token");
    const res = await fetch(`${API_BASE}${path}`, {
      headers: {
        Accept: "application/json",
        ...(t ? { Authorization: `Bearer ${t}` } : {}),
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`);
    return data;
  }, []);

  const apiPost = useCallback(async (path, body) => {
    const t = localStorage.getItem("stm_token");
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(t ? { Authorization: `Bearer ${t}` } : {}),
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`);
    return data;
  }, []);

  const apiDelete = useCallback(async (path) => {
    const t = localStorage.getItem("stm_token");
    const res = await fetch(`${API_BASE}${path}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        ...(t ? { Authorization: `Bearer ${t}` } : {}),
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`);
    return data;
  }, []);

  const loadFavorites = useCallback(async () => {
    const t = localStorage.getItem("stm_token");
    if (!t) {
      setFavorites({});
      return;
    }
    try {
      const data = await apiGet("/api/favorite-programs");
      const arr = data?.data?.favorite_programs || [];
      const map = {};
      arr.forEach((fav) => {
        if (fav?.object_id) map[String(fav.object_id)] = { slug: fav.slug };
      });
      setFavorites(map);
    } catch (e) {
      console.warn("No se pudieron cargar favoritos:", e.message);
      setFavorites({});
    }
  }, [apiGet]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  useEffect(() => {
    const onLogin = () => loadFavorites();
    const onLogout = () => setFavorites({});

    window.addEventListener("stm:auth-login", onLogin);
    window.addEventListener("stm:auth-logout", onLogout);

    return () => {
      window.removeEventListener("stm:auth-login", onLogin);
      window.removeEventListener("stm:auth-logout", onLogout);
    };
  }, [loadFavorites]);

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === "stm_token") {
        if (event.newValue) loadFavorites();
        else setFavorites({});
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [loadFavorites]);

  async function toggleFavorite(brand) {
    if (!localStorage.getItem("stm_token")) {
      window.dispatchEvent(new Event("stm:open-auth"));
      return;
    }

    const key = String(brand.id);
    const wasFav = !!favorites[key];

    if (pending.has(brand.id)) return;
    const newPending = new Set(pending);
    newPending.add(brand.id);
    setPending(newPending);

    if (wasFav) {
      const prev = favorites[key];
      setFavorites((prevMap) => {
        const cp = { ...prevMap };
        delete cp[key];
        return cp;
      });

      try {
        const slug = prev.slug;
        await apiDelete(`/api/favorite-programs/${slug}`);
      } catch (e) {
        setFavorites((prevMap) => ({ ...prevMap, [key]: prev }));
        console.error("Error al quitar favorito:", e.message);
      } finally {
        const rm = new Set(newPending);
        rm.delete(brand.id);
        setPending(rm);
      }
    } else {
      setFavorites((prevMap) => ({ ...prevMap, [key]: { slug: "__pending__" } }));

      try {
        const resp = await apiPost("/api/favorite-programs", {
          object_id: key,
          name: brand.name || "favorito",
        });
        const slug = resp?.data?.slug;
        if (slug) {
          setFavorites((prevMap) => ({ ...prevMap, [key]: { slug } }));
        } else {
          setFavorites((prevMap) => {
            const cp = { ...prevMap };
            delete cp[key];
            return cp;
          });
        }
      } catch (e) {
        setFavorites((prevMap) => {
          const cp = { ...prevMap };
          delete cp[key];
          return cp;
        });
        console.error("Error al agregar favorito:", e.message);
      } finally {
        const rm = new Set(newPending);
        rm.delete(brand.id);
        setPending(rm);
      }
    }
  }

  const handleLogoLoad = useCallback((event, brandId) => {
    const img = event.currentTarget;
    const { naturalWidth = 0, naturalHeight = 0 } = img;
    const width = naturalWidth;
    const height = naturalHeight;

    let sizeClass = LOGO_DEFAULT_CLASS;

    if (width >= 2500 && height < 600) {
      sizeClass = "nmt-logo-wrap--xl";
    } else if (height >= 600 && height < 1000) {
      sizeClass = "nmt-logo-wrap--lg";
    } else if (height >= 1000 && height < 2000) {
      sizeClass = "nmt-logo-wrap--md";
    } else {
      sizeClass = "nmt-logo-wrap--sm";
    }

    setLogoSizing((prev) => (prev[brandId] === sizeClass ? prev : { ...prev, [brandId]: sizeClass }));
  }, []);


  return (
    <div className="nmt-page">
      <Navigation />
      <Whatsapp />

      <header className="nmt-hero">
        <div className="nmt-hero-inner">
          <div className="nmt-hero-card">
            <span className="nmt-hero-kicker">NUESTRAS MARCAS</span>
            <h1 className="nmt-hero-title">Nuestras Marcas</h1>
            <p className="nmt-hero-copy">
              Explora las marcas que marcan tendencia y guarda tus favoritas para encontrarlas rapido.
            </p>
            <div className="nmt-hero-stats">
              <div className="nmt-stat">
                <span className="nmt-stat-value">{todasLasMarcas.length}</span>
                <span className="nmt-stat-label">marcas</span>
              </div>
              <div className="nmt-stat">
                <span className="nmt-stat-value">{marcasFiltradas.length}</span>
                <span className="nmt-stat-label">en vista</span>
              </div>
            </div>
          </div>

          <div className="nmt-hero-panel">
            <div className="nmt-hero-panel-card">
              <div className="nmt-hero-panel-label">Categoria activa</div>
              <div className="nmt-hero-panel-title">{activeCategory}</div>
              <div className="nmt-hero-panel-count">{marcasFiltradas.length} marcas</div>
            </div>
            <div className="nmt-hero-preview">
              {previewBrands.map((marca) => (
                <button
                  key={marca.id}
                  type="button"
                  className="nmt-hero-preview-card"
                  style={{ backgroundImage: `url(${marca.image})` }}
                  onClick={() => openModal(marca)}
                  aria-label={`Ver ${marca.name}`}
                >
                  <span className="nmt-hero-preview-name">{marca.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="nmt-filter">
        <div className="nmt-filter-panel">
          <div className="nmt-filter-title">Explora por categoria</div>
          <div className="nmt-filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`nmt-chip ${activeCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="nmt-grid-section">
        <div className="nmt-grid-header">
          <div>
            <div className="nmt-grid-kicker">Mostrando</div>
            <h2 className="nmt-grid-title">
              {activeCategory === "TODAS" ? "Todas las marcas" : activeCategory}
            </h2>
          </div>
          <div className="nmt-grid-count">{marcasFiltradas.length} marcas</div>
        </div>

        <div className="nmt-grid">
          {marcasAMostrar.map((marca) => {
            const fav = !!favorites[String(marca.id)];
            const isWaiting = pending.has(marca.id);
            const hoursLines = marca.hours || DEFAULT_HOURS;
            const logoSrc = brandLogos[marca.name];
            const logoClass = logoSizing[marca.id] || LOGO_DEFAULT_CLASS;

            return (
              <div
                key={marca.id}
                className="nmt-card"
                role="button"
                tabIndex={0}
                onClick={() => openModal(marca)}
                onKeyDown={(event) => handleCardKeyDown(event, marca)}
                aria-label={`Abrir detalles de ${marca.name}`}
              >
                <img src={marca.image} alt={marca.name} className="nmt-card-image" />

                <button
                  className={`nmt-heart ${fav ? "active" : ""}`}
                  aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
                  disabled={isWaiting}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite(marca);
                  }}
                  title={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
                >
                  <FaHeart className="nmt-heart-icon" />
                </button>

                <div className="nmt-overlay">
                  <div className="nmt-overlay-content">
                    {logoSrc && (
                      <div className={`nmt-logo-wrap ${logoClass}`}>
                        <img
                          src={logoSrc}
                          alt={`Logo ${marca.name}`}
                          className="nmt-logo"
                          onLoad={(event) => handleLogoLoad(event, marca.id)}
                        />
                      </div>
                    )}
                    <div className="nmt-overlay-info">
                      <div className="nmt-overlay-category">{marca.category}</div>
                      <div className="nmt-overlay-name">{marca.name}</div>
                      <div className="nmt-overlay-hours">
                        {hoursLines.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < hoursLines.length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visibleBrands < marcasFiltradas.length && (
          <div className="nmt-more">
            <button className="nmt-more-btn" onClick={handleVerMas}>
              VER MAS MARCAS
            </button>
          </div>
        )}
      </section>

      <BrandCarousel />
      <Footer />

      {isModalOpen && sliderBrands.length > 0 && (
        <div className="nmt-modal nmt-modal--rect" onClick={closeModal}>
          <div
            className="nmt-modal-panel nmt-modal-panel--rect"
            role="dialog"
            aria-modal="true"
            aria-label="Detalle de marca"
            onClick={(event) => event.stopPropagation()}
            style={{
              "--nmt-brand-primary": activeTheme.primary,
              "--nmt-brand-secondary": activeTheme.secondary,
              "--nmt-brand-accent": activeTheme.accent,
              "--nmt-brand-ink": activeTheme.ink,
            }}
          >
            <button
              className="nmt-modal-close nmt-modal-close--rect"
              onClick={closeModal}
              aria-label="Cerrar popup"
              type="button"
            >
              X
            </button>
            <button
              className="nmt-modal-arrow nmt-modal-arrow--left"
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              disabled={sliderBrands.length <= 1}
              aria-label="Marca anterior"
            >
              {"<"}
            </button>
            <button
              className="nmt-modal-arrow nmt-modal-arrow--right"
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              disabled={sliderBrands.length <= 1}
              aria-label="Marca siguiente"
            >
              {">"}
            </button>
            <Slider ref={sliderRef} className="nmt-modal-slider" {...sliderSettings}>
              {sliderBrands.map((brand) => {
                const popupInfo = brandPopupInfo[brand.id];
                const theme = getBrandTheme(brand);
                const logoSrc = brandLogos[brand.name];
                const logoClass = logoSizing[brand.id] || LOGO_DEFAULT_CLASS;
                const hoursLines = brand.hours || DEFAULT_HOURS;

                return (
                  <div key={brand.id} className="nmt-modal-slide">
                    <div
                      className="nmt-modal-card"
                      style={{
                        "--nmt-brand-primary": theme.primary,
                        "--nmt-brand-secondary": theme.secondary,
                        "--nmt-brand-accent": theme.accent,
                        "--nmt-brand-ink": theme.ink,
                      }}
                    >
                      <div className="nmt-modal-cover">
                        <div className="nmt-modal-logo-shell">
                          {logoSrc && (
                            <div className={`nmt-logo-wrap ${logoClass}`}>
                              <img
                                src={logoSrc}
                                alt={`Logo ${brand.name}`}
                                className="nmt-logo"
                                onLoad={(event) => handleLogoLoad(event, brand.id)}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="nmt-modal-info">
                        <div className="nmt-modal-name">{brand.name}</div>
                        <div className="nmt-modal-category">{brand.category}</div>
                        {popupInfo?.tagline && (
                          <div className="nmt-modal-tagline">{popupInfo.tagline}</div>
                        )}
                        {popupInfo?.description && (
                          <p className="nmt-modal-description">{popupInfo.description}</p>
                        )}

                        {popupInfo?.highlights?.length > 0 && (
                          <ul className="nmt-modal-highlights">
                            {popupInfo.highlights.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}

                        {popupInfo?.details?.length > 0 && (
                          <div className="nmt-modal-detail-grid">
                            {popupInfo.details.map((item, idx) => (
                              <div key={idx} className="nmt-modal-detail">
                                <span className="nmt-modal-detail-label">{item.label}</span>
                                <span className="nmt-modal-detail-value">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="nmt-modal-hours">
                          <div className="nmt-modal-section-title">Horario</div>
                          <div className="nmt-modal-hours-lines">
                            {hoursLines.map((line, idx) => (
                              <span key={idx}>
                                {line}
                                {idx < hoursLines.length - 1 && <br />}
                              </span>
                            ))}
                          </div>
                        </div>

                        {popupInfo?.links?.length > 0 && (
                          <div className="nmt-modal-links">
                            {popupInfo.links.map((link, idx) => (
                              <a
                                key={idx}
                                className="nmt-modal-link"
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export { NuestrasMarcasTest };

