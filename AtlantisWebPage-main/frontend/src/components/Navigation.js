import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navigation.css";
import logo from "../img/HOME/MENU PRINCIPAL/logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown
} from "react-icons/fa";
import politicaTratamientoDatosPersonales from "../Material/PL-01-Politica-tratamiento-de-datos-personales.pdf";
import avisoPrivacidadAtlantis from "../Material/Aviso de Privacidad - Atlantis.pdf";

const API_BASE =
  process.env.REACT_APP_API_BASE_URL;


const isDesktopViewport = () =>
  window.matchMedia("(min-width: 1025px) and (hover: hover) and (pointer: fine)").matches;
  

function Navigation() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ---------- Auth (popover) ----------
  const [showAuthPop, setShowAuthPop] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // "login" | "register"
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [policyConsent, setPolicyConsent] = useState({ tratamiento: false, privacidad: false });
  const [policyModalError, setPolicyModalError] = useState("");
  const [pendingRegisterPayload, setPendingRegisterPayload] = useState(null);

  // Sesión
  const [isAuthed, setIsAuthed] = useState(!!localStorage.getItem("stm_token"));
  const [docId, setDocId] = useState(
    localStorage.getItem("stm_identification") || ""
  );

  // refs: anclas para desktop/móvil + el popover de auth
  const authAnchorDesktopRef = useRef(null);
  const authAnchorMobileRef = useRef(null);
  const authPopRef = useRef(null);

  // ----- Menú de cuenta (cuando está logueado) -----
  const [showAcctPop, setShowAcctPop] = useState(false);
  const acctAnchorDesktopRef = useRef(null);
  const acctAnchorMobileRef = useRef(null);
  const acctPopRef = useRef(null);
  const policyOverlayRef = useRef(null);
  const policyModalRef = useRef(null);
  const showPolicyModalRef = useRef(false);

  // Helper: fuerza solo dígitos y corta al máximo
  function handleNumericInput(e, max) {
    const onlyDigits = (e.target.value || "").replace(/\D+/g, "").slice(0, max);
    if (e.target.value !== onlyDigits) e.target.value = onlyDigits;
  }

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      identification_type_id: Number(form.get("identification_type_id") || 1),
      identification: form.get("identification")?.trim(),
      email: form.get("email"),
      cellphone: form.get("cellphone"),
    };
    setPendingRegisterPayload(payload);
    setPolicyConsent({ tratamiento: false, privacidad: false });
    setPolicyModalError("");
    setShowPolicyModal(true);
  }

  const handlePolicyCancel = () => {
    setShowPolicyModal(false);
    setPendingRegisterPayload(null);
    setPolicyModalError("");
    setPolicyConsent({ tratamiento: false, privacidad: false });
  };

  const handlePolicyConfirm = async () => {
    if (!policyConsent.tratamiento || !policyConsent.privacidad) {
      setPolicyModalError("Debes aceptar ambas politicas para continuar.");
      return;
    }
    if (!pendingRegisterPayload) {
      setShowPolicyModal(false);
      return;
    }
    setShowPolicyModal(false);
    await registerWithPayload(pendingRegisterPayload);
    setPendingRegisterPayload(null);
    setPolicyConsent({ tratamiento: false, privacidad: false });
  };


  useEffect(() => {
    showPolicyModalRef.current = showPolicyModal;
  }, [showPolicyModal]);

  function toggleAuthPop(mode = "login") {
    setAuthMode(mode);
    setAuthError("");
    setShowAcctPop(false);
    setShowPolicyModal(false);
    setPendingRegisterPayload(null);
    setPolicyConsent({ tratamiento: false, privacidad: false });
    setPolicyModalError("");
    setShowAuthPop((v) => !v);

    if (isDesktopViewport()) {
      setIsMobileMenuOpen(false);
    }
  }


  function toggleAcctPop() {
    setShowAuthPop(false);
    setShowAcctPop((v) => !v);
  }

  // Abre el popover de login cuando alguien dispara el evento global
  useEffect(() => {
    const openAuth = () => {
      setShowAcctPop(false);
      setAuthMode("login");
      setShowAuthPop(true);
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("stm:open-auth", openAuth);
    return () => window.removeEventListener("stm:open-auth", openAuth);
  }, []);

  // Cierre al click fuera (auth + cuenta)
  useEffect(() => {
    function onClickOutside(e) {
      const insidePolicy = showPolicyModalRef.current &&
        policyOverlayRef.current &&
        policyOverlayRef.current.contains(e.target);

      if (insidePolicy) {
        return;
      }
      const insideAuth =
        (authAnchorDesktopRef.current &&
          authAnchorDesktopRef.current.contains(e.target)) ||
        (authAnchorMobileRef.current &&
          authAnchorMobileRef.current.contains(e.target)) ||
        (authPopRef.current && authPopRef.current.contains(e.target));

      const insideAcct =
        (acctAnchorDesktopRef.current &&
          acctAnchorDesktopRef.current.contains(e.target)) ||
        (acctAnchorMobileRef.current &&
          acctAnchorMobileRef.current.contains(e.target)) ||
        (acctPopRef.current && acctPopRef.current.contains(e.target));

      if (!insideAuth) {
        setShowAuthPop(false);
        setShowPolicyModal(false);
        setPendingRegisterPayload(null);
        setPolicyConsent({ tratamiento: false, privacidad: false });
        setPolicyModalError("");
      }
      if (!insideAcct) setShowAcctPop(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Sincroniza sesión/identificación entre pestañas
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "stm_token")
        setIsAuthed(!!localStorage.getItem("stm_token"));
      if (e.key === "stm_identification")
        setDocId(localStorage.getItem("stm_identification") || "");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  async function apiPost(path, body, token) {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
      const err = new Error(data?.message || `HTTP ${res.status}`);
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);
    const form = new FormData(e.currentTarget);
    const identification = form.get("identification")?.trim();
    const password = form.get("password");

    try {
      const { token } = await apiPost("/api/login", { identification, password });
      localStorage.setItem("stm_token", token);
      localStorage.setItem("stm_identification", identification);
      setDocId(identification);
      setIsAuthed(true);
      setShowAuthPop(false);
      window.dispatchEvent(new Event("stm:auth-login"));
    } catch (err) {
      setAuthError(
        err?.data?.message || "Credenciales inválidas o error del servidor."
      );
    } finally {
      setAuthLoading(false);
    }
  }

  async function registerWithPayload(payload) {
    setAuthError("");
    setPolicyModalError("");
    setAuthLoading(true);

    try {
      // Registro
      await apiPost("/api/register", payload);
      // Login automático (password = identificación)
      const { token } = await apiPost("/api/login", {
        identification: payload.identification,
        password: payload.identification,
      });
      localStorage.setItem("stm_token", token);
      localStorage.setItem("stm_identification", payload.identification);
      setDocId(payload.identification);
      setIsAuthed(true);
      setShowAuthPop(false);
      window.dispatchEvent(new Event("stm:auth-login"));
    } catch (err) {
      setAuthError(err?.data?.message || "Error al registrar. Verifica los datos.");
    } finally {
      setAuthLoading(false);
    }
  }

  // 🔴 Logout unificado
  function handleLogout() {
    localStorage.removeItem("stm_token");
    localStorage.removeItem("stm_identification");
    setDocId("");
    setIsAuthed(false);
    setShowAuthPop(false);
    setShowAcctPop(false);
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new Event("stm:auth-logout")); // avisa a NuestrasMarcas, etc.
  }

  // refs scroll
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  // Ajustables
  const TOP_PIN_DISTANCE = 160;
  const MIN_DELTA = 10;

  // Helpers ruta activa
  const isActive = (target) => {
    if (target === "/") return pathname === "/";
    return pathname.startsWith(target);
  };
  const isActiveInfo = pathname === "/" && hash === "#Informacion";
  const serviciosPaths = [
    "/smart_parking",
    "/bici_parking",
    "/electrolineras",
    "/sillas_de_ruedas",
    "/bodegas_m3",
    "/enfermeria",
  ];
  const isServiciosActive = serviciosPaths.some((p) => pathname.startsWith(p));

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const y = Math.max(window.scrollY || window.pageYOffset || 0, 0);
        const delta = y - lastYRef.current;

        if (isMobileMenuOpen) {
          if (!isVisible) setIsVisible(true);
          lastYRef.current = y;
          tickingRef.current = false;
          return;
        }

        if (y <= TOP_PIN_DISTANCE) {
          if (!isVisible) setIsVisible(true);
        } else {
          if (delta > MIN_DELTA && isVisible) {
            setIsVisible(false);
          } else if (delta < -MIN_DELTA && !isVisible) {
            setIsVisible(true);
          }
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobileMenuOpen, isVisible]);

  useEffect(() => {
  const handleResize = () => {
    if (isDesktopViewport()) {
      setIsMobileMenuOpen(false);
      setOpenSubmenu(null);
    }
  };
  window.addEventListener("resize", handleResize, { passive: true });
  return () => window.removeEventListener("resize", handleResize);
}, []);


  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsMobileMenuOpen((v) => !v);
      setOpenSubmenu(null);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 50);
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const navigateToTop = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 100);
  };

  const handlePageNavigation = (e, path) => {
    e.preventDefault();
    closeMobileMenu();
    setShowAuthPop(false);
    setShowAcctPop(false);
    navigateToTop(path);
  };

  return (
    <div className={`navigation-overlay ${isVisible ? "visible" : "hidden"}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-right">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/AtlantisUnidadComercial "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/atlantis.oficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@ccatlantis?lang=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@atlantisplazacc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/centro-comercial-atlantis-plaza/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="top-bar-wrapper">
            <a
              href="https://www.google.com/maps/place/Atlantis+Plaza/@4.6669154,-74.0560605,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-link"
            >
              TU RUTA A ATLANTIS
            </a>
            <a href="/#Informacion" className="top-bar-link">
              NUESTROS HORARIOS
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <a href="/">
          <img
            src={logo}
            alt="Atlantis Centro Comercial"
            className={`logo ${isMobileMenuOpen ? "logo-animated" : ""} ${
              isTransitioning ? "transitioning" : ""
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
          <ul className="nav-list">
            <li>
              <a
                href="/"
                onClick={(e) => handlePageNavigation(e, "/")}
                className={isActive("/") ? "active" : undefined}
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="/sale"
                onClick={(e) => handlePageNavigation(e, "/sale")}
                className={isActive("/sale") ? "active" : undefined}
              >
                SALE
              </a>
            </li>
            <li>
              <a
                href="/Nuestras_marcas"
                onClick={(e) => handlePageNavigation(e, "/Nuestras_marcas")}
                className={isActive("/Nuestras_marcas") ? "active" : undefined}
              >
                NUESTRAS MARCAS
              </a>
            </li>
            <li>
              <a
                href="/TuProximoPlan"
                onClick={(e) => handlePageNavigation(e, "/TuProximoPlan")}
                className={isActive("/TuProximoPlan") ? "active" : undefined}
              >
                VLOG DE ATLANTIS
              </a>
            </li>

            <li className={`has-submenu ${isServiciosActive ? "active" : ""}`}>
              <span className={isServiciosActive ? "active" : undefined}>
                SERVICIOS
              </span>
              <ul className="submenu">
                <li>
                  <a
                    href="/smart_parking"
                    onClick={(e) => handlePageNavigation(e, "/smart_parking")}
                    className={isActive("/smart_parking") ? "active" : undefined}
                  >
                    Smart Parking
                  </a>
                </li>
                <li>
                  <a
                    href="/bici_parking"
                    onClick={(e) => handlePageNavigation(e, "/bici_parking")}
                    className={isActive("/bici_parking") ? "active" : undefined}
                  >
                    Biciparking
                  </a>
                </li>
                <li>
                  <a
                    href="/electrolineras"
                    onClick={(e) => handlePageNavigation(e, "/electrolineras")}
                    className={
                      isActive("/electrolineras") ? "active" : undefined
                    }
                  >
                    Electrolineras
                  </a>
                </li>
                <li>
                  <a
                    href="/sillas_de_ruedas"
                    onClick={(e) =>
                      handlePageNavigation(e, "/sillas_de_ruedas")
                    }
                    className={
                      isActive("/sillas_de_ruedas") ? "active" : undefined
                    }
                  >
                    Sillas de ruedas
                  </a>
                </li>
                <li>
                  <a
                    href="/bodegas_m3"
                    onClick={(e) => handlePageNavigation(e, "/bodegas_m3")}
                    className={isActive("/bodegas_m3") ? "active" : undefined}
                  >
                    Bodegas M3
                  </a>
                </li>
                <li>
                  <a
                    href="/enfermeria"
                    onClick={(e) => handlePageNavigation(e, "/enfermeria")}
                    className={isActive("/enfermeria") ? "active" : undefined}
                  >
                    Punto de Primeros Auxilios
                  </a>
                </li>
                <li>
                  <a href="https://multiplika.co/pqrs/">PQRs</a>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/#Informacion"
                className={isActiveInfo ? "active" : undefined}
              >
                INFORMACIÓN
              </Link>
            </li>

            {/* --- Área de Auth / Cuenta (DESKTOP) --- */}
            {!isAuthed ? (
              <li ref={authAnchorDesktopRef} className="auth-popover-anchor">
                <button
                  type="button"
                  className="auth-inline-btn"
                  onClick={() => toggleAuthPop("login")}
                >
                  INGRESA/REGÍSTRATE
                </button>

                {showAuthPop && (
                  <div ref={authPopRef} className="auth-popover">
                    <div className="auth-pop-header">
                      <button
                        className={`auth-pop-tab ${
                          authMode === "login" ? "active" : ""
                        }`}
                        onClick={() => {
                          setAuthMode("login");
                          setAuthError("");
                          setShowPolicyModal(false);
                        }}
                      >
                        Iniciar sesión
                      </button>
                      <button
                        className={`auth-pop-tab ${
                          authMode === "register" ? "active" : ""
                        }`}
                        onClick={() => {
                          setAuthMode("register");
                          setAuthError("");
                          setPolicyConsent({ tratamiento: false, privacidad: false });
                          setPolicyModalError("");
                        }}
                      >
                        Registrarme
                      </button>
                    </div>

                    {authMode === "login" ? (
                      <form className="auth-pop-form" onSubmit={handleLoginSubmit}>
                        <label>
                          Identificación*
                          <input
                            name="identification"
                            required
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={15}
                            onInput={(e) => handleNumericInput(e, 15)}
                          />
                        </label>
                        <label>
                          Contraseña*{" "}
                          <small>(por defecto es tu identificación si te registraste)</small>
                          <input
                            type="password"
                            name="password"
                            required
                            maxLength={50}
                          />
                        </label>
                        {authError && (
                          <div className="auth-pop-error">{authError}</div>
                        )}
                        <button
                          type="submit"
                          disabled={authLoading}
                          className="auth-pop-submit"
                        >
                          {authLoading ? "Entrando..." : "Entrar"}
                        </button>
                      </form>
                    ) : (
                      <form
                        className="auth-pop-form"
                        onSubmit={handleRegisterSubmit}
                      >
                        <label>
                          Nombre completo*
                          <input name="name" required maxLength={50} />
                        </label>
                        <label>
                          Email*
                          <input type="email" name="email" required maxLength={50} />
                        </label>
                        <label>
                          Celular* (requerido)
                          <input
                            name="cellphone"
                            required
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={15}
                            onInput={(e) => handleNumericInput(e, 15)}
                          />
                        </label>
                        <div className="auth-pop-row">
                          <label>
                            Tipo de identificación*
                            <select
                              name="identification_type_id"
                              defaultValue="1"
                            >
                              <option value="1">Cédula</option>
                              <option value="2">Pasaporte</option>
                            </select>
                          </label>
                          <label>
                            Identificación*
                            <input
                              name="identification"
                              required
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={15}
                              onInput={(e) => handleNumericInput(e, 15)}
                            />
                          </label>
                        </div>
                        <p className="auth-pop-note">
                          La contraseña será tu número de identificación.
                        </p>
                        {authError && (
                          <div className="auth-pop-error">{authError}</div>
                        )}
                        <button
                          type="submit"
                          disabled={authLoading}
                          className="auth-pop-submit"
                        >
                          {authLoading ? "Creando..." : "Crear cuenta y entrar"}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </li>
            ) : (
              <li ref={acctAnchorDesktopRef} className="auth-popover-anchor">
                <button
                  type="button"
                  className="auth-inline-btn"
                  onClick={toggleAcctPop}
                >
                  {docId ? `ID: ${docId}` : "MI CUENTA"}
                </button>
                {showAcctPop && (
                  <div ref={acctPopRef} className="auth-popover">
                    <div className="auth-pop-form">
                      <p style={{ margin: "0 0 6px 0", opacity: 0.9 }}>
                        Sesión iniciada
                      </p>
                      {docId && (
                        <p style={{ margin: "0 0 12px 0", fontWeight: 600 }}>
                          Documento:{" "}
                          <span style={{ opacity: 0.95 }}>{docId}</span>
                        </p>
                      )}
                      <a
                        href="https://www.soytopmember.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="auth-pop-submit"
                        style={{
                          display: "block",
                          textAlign: "center",
                          marginBottom: 8,
                        }}
                      >
                        Ir a SoyTopMember
                      </a>
                      <button
                        type="button"
                        className="auth-pop-submit"
                        onClick={handleLogout}
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )}

            <li>
              <FaSearch className="icono" />
            </li>
            <li>
              <FaHeart className="icono" />
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${
            isMobileMenuOpen ? "menu-button-animated" : ""
          } ${isTransitioning ? "transitioning" : ""}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`hamburger-icon ${
              isMobileMenuOpen ? "hamburger-to-x" : ""
            }`}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {/* 1) PRIMERO: Auth/Cuenta en móvil */}
              {!isAuthed ? (
                <li ref={authAnchorMobileRef} className="auth-popover-anchor">
                  <button
                    type="button"
                    className="auth-inline-btn"
                    onClick={() => toggleAuthPop("login")}
                  >
                    INGRESA/REGÍSTRATE
                  </button>

                  {showAuthPop && (
                    <div
                      ref={authPopRef}
                      className="auth-popover auth-popover-mobile"
                    >
                      <div className="auth-pop-header">
                        <button
                          className={`auth-pop-tab ${
                            authMode === "login" ? "active" : ""
                          }`}
                        onClick={() => {
                          setAuthMode("login");
                          setAuthError("");
                          setShowPolicyModal(false);
                          setPendingRegisterPayload(null);
                          setPolicyConsent({ tratamiento: false, privacidad: false });
                          setPolicyModalError("");
                        }}
                        >
                          Iniciar sesión
                        </button>
                        <button
                          className={`auth-pop-tab ${
                            authMode === "register" ? "active" : ""
                          }`}
                        onClick={() => {
                          setAuthMode("register");
                          setAuthError("");
                          setPolicyConsent({ tratamiento: false, privacidad: false });
                          setPolicyModalError("");
                        }}
                        >
                          Registrarme
                        </button>
                      </div>

                      {authMode === "login" ? (
                        <form
                          className="auth-pop-form"
                          onSubmit={handleLoginSubmit}
                        >
                          <label>
                            Identificación*
                            <input
                              name="identification"
                              required
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={15}
                              onInput={(e) => handleNumericInput(e, 15)}
                            />
                          </label>
                          <label>
                            Contraseña*{" "}
                            <small>(por defecto es tu identificación si te registraste)</small>
                            <input
                              type="password"
                              name="password"
                              required
                              maxLength={50}
                            />
                          </label>
                          {authError && (
                            <div className="auth-pop-error">{authError}</div>
                          )}
                          <button
                            type="submit"
                            disabled={authLoading}
                            className="auth-pop-submit"
                          >
                            {authLoading ? "Entrando..." : "Entrar"}
                          </button>
                        </form>
                      ) : (
                        <form
                          className="auth-pop-form"
                          onSubmit={handleRegisterSubmit}
                        >
                          <label>
                            Nombre completo*
                            <input name="name" required maxLength={50} />
                          </label>
                          <label>
                            Email*
                            <input
                              type="email"
                              name="email"
                              required
                              maxLength={50}
                            />
                          </label>
                          <label>
                            Celular* (requerido)
                            <input
                              name="cellphone"
                              required
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={15}
                              onInput={(e) => handleNumericInput(e, 15)}
                            />
                          </label>
                          <div className="auth-pop-row">
                            <label>
                              Tipo de identificación*
                              <select
                                name="identification_type_id"
                                defaultValue="1"
                              >
                                <option value="1">Cédula</option>
                                <option value="2">Pasaporte</option>
                              </select>
                            </label>
                            <label>
                              Identificación*
                              <input
                                name="identification"
                                required
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={15}
                                onInput={(e) => handleNumericInput(e, 15)}
                              />
                            </label>
                          </div>
                          <p className="auth-pop-note">
                            La contraseña será tu número de identificación
                          </p>
                          {authError && (
                            <div className="auth-pop-error">{authError}</div>
                          )}
                          <button
                            type="submit"
                            disabled={authLoading}
                            className="auth-pop-submit"
                          >
                            {authLoading ? "Creando..." : "Crear cuenta y entrar"}
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </li>
              ) : (
                <li ref={acctAnchorMobileRef} className="auth-popover-anchor">
                  <button
                    type="button"
                    className="auth-inline-btn"
                    onClick={toggleAcctPop}
                  >
                    {docId ? `ID: ${docId}` : "MI CUENTA"}
                  </button>
                  {showAcctPop && (
                    <div
                      ref={acctPopRef}
                      className="auth-popover auth-popover-mobile"
                    >
                      <div className="auth-pop-form">
                        <p style={{ margin: "0 0 6px 0", opacity: 0.9 }}>
                          Sesión iniciada
                        </p>
                        {docId && (
                          <p style={{ margin: "0 0 12px 0", fontWeight: 600 }}>
                            Documento:{" "}
                            <span style={{ opacity: 0.95 }}>{docId}</span>
                          </p>
                        )}
                        <a
                          href="https://www.soytopmember.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="auth-pop-submit"
                          style={{
                            display: "block",
                            textAlign: "center",
                            marginBottom: 8,
                          }}
                        >
                          Ir a SoyTopMember
                        </a>
                        <button
                          type="button"
                          className="auth-pop-submit"
                          onClick={handleLogout}
                        >
                          Cerrar sesión
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              )}

              {/* 2) Resto de ítems */}
              <li>
                <a
                  href="/"
                  onClick={(e) => handlePageNavigation(e, "/")}
                  className={isActive("/") ? "active" : undefined}
                >
                  INICIO
                </a>
              </li>
              <li>
                <a
                  href="/sale"
                  onClick={(e) => handlePageNavigation(e, "/sale")}
                  className={isActive("/sale") ? "active" : undefined}
                >
                  SALE
                </a>
              </li>
              <li>
                <a
                  href="/Nuestras_marcas"
                  onClick={(e) =>
                    handlePageNavigation(e, "/Nuestras_marcas")
                  }
                  className={
                    isActive("/Nuestras_marcas") ? "active" : undefined
                  }
                >
                  NUESTRAS MARCAS
                </a>
              </li>
              <li>
                <a
                  href="/TuProximoPlan"
                  onClick={(e) => handlePageNavigation(e, "/TuProximoPlan")}
                  className={isActive("/TuProximoPlan") ? "active" : undefined}
                >
                  TU PRÓXIMO PLAN
                </a>
              </li>

              <li className="mobile-submenu-item">
                <div
                  className={`mobile-submenu-trigger ${
                    isServiciosActive ? "active" : ""
                  }`}
                  onClick={() => toggleSubmenu("servicios")}
                >
                  <span className={isServiciosActive ? "active" : undefined}>
                    SERVICIOS
                  </span>
                  <FaChevronDown
                    className={`submenu-arrow ${
                      openSubmenu === "servicios" ? "rotated" : ""
                    }`}
                  />
                </div>
                <ul
                  className={`mobile-submenu ${
                    openSubmenu === "servicios" ? "open" : ""
                  }`}
                >
                  <li>
                    <a
                      href="/smart_parking"
                      onClick={(e) => handlePageNavigation(e, "/smart_parking")}
                      className={isActive("/smart_parking") ? "active" : undefined}
                    >
                      Smart Parking
                    </a>
                  </li>
                  <li>
                    <a
                      href="/bici_parking"
                      onClick={(e) => handlePageNavigation(e, "/bici_parking")}
                      className={isActive("/bici_parking") ? "active" : undefined}
                    >
                      Biciparking
                    </a>
                  </li>
                  <li>
                    <a
                      href="/electrolineras"
                      onClick={(e) => handlePageNavigation(e, "/electrolineras")}
                      className={
                        isActive("/electrolineras") ? "active" : undefined
                      }
                    >
                      Electrolineras
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sillas_de_ruedas"
                      onClick={(e) =>
                        handlePageNavigation(e, "/sillas_de_ruedas")
                      }
                      className={
                        isActive("/sillas_de_ruedas") ? "active" : undefined
                      }
                    >
                      Sillas de ruedas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/bodegas_m3"
                      onClick={(e) => handlePageNavigation(e, "/bodegas_m3")}
                      className={isActive("/bodegas_m3") ? "active" : undefined}
                    >
                      Bodegas M3
                    </a>
                  </li>
                  <li>
                    <a
                      href="/enfermeria"
                      onClick={(e) => handlePageNavigation(e, "/enfermeria")}
                      className={isActive("/enfermeria") ? "active" : undefined}
                    >
                      Punto de Primeros Auxilios
                    </a>
                  </li>
                  <li>
                    <a href="https://multiplika.co/pqrs/">PQRs</a>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/#Informacion"
                  onClick={closeMobileMenu}
                  className={isActiveInfo ? "active" : undefined}
                >
                  INFORMACIÓN
                </Link>
              </li>

              <li className="mobile-icons">
                <FaSearch className="icono" />
                <FaHeart className="icono" />
              </li>
            </ul>

            <div className="mobile-social-section">
              <div className="mobile-social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
              <div className="mobile-top-links">
                <a href="/ruta-atlantis" className="mobile-top-link" onClick={closeMobileMenu}>
                  TU RUTA A ATLANTIS
                </a>
                <a href="/horarios" className="mobile-top-link" onClick={closeMobileMenu}>
                  NUESTROS HORARIOS
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {showPolicyModal && (
        <div className="policy-modal-overlay" ref={policyOverlayRef} onClick={handlePolicyCancel}>
          <div className="policy-modal" ref={policyModalRef} onClick={(e) => e.stopPropagation()}>
            <h3>Autorizaciones necesarias</h3>
            <p>Acepta las siguientes politicas para completar tu registro:</p>
            <label className="policy-modal-check">
              <input
                type="checkbox"
                checked={policyConsent.tratamiento}
                onChange={(e) =>
                  setPolicyConsent((prev) => ({
                    ...prev,
                    tratamiento: e.target.checked,
                  }))
                }
              />
              <span>
                Autorizo el tratamiento de mis datos personales conforme a la{" "}
                <a
                  href={politicaTratamientoDatosPersonales}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politica de Tratamiento de Datos Personales
                </a>
                .
              </span>
            </label>
            <label className="policy-modal-check">
              <input
                type="checkbox"
                checked={policyConsent.privacidad}
                onChange={(e) =>
                  setPolicyConsent((prev) => ({
                    ...prev,
                    privacidad: e.target.checked,
                  }))
                }
              />
              <span>
                Confirmo que he leido y acepto el{" "}
                <a
                  href={avisoPrivacidadAtlantis}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aviso de Privacidad
                </a>
                .
              </span>
            </label>
            {policyModalError && (
              <div className="policy-modal-error">{policyModalError}</div>
            )}
            <div className="policy-modal-actions">
              <button
                type="button"
                className="policy-modal-cancel"
                onClick={handlePolicyCancel}
                disabled={authLoading}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="policy-modal-confirm"
                onClick={handlePolicyConfirm}
                disabled={authLoading}
              >
                {authLoading ? "Procesando..." : "Aceptar y continuar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Navigation };



