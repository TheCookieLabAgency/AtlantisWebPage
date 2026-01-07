import React, { useEffect, useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import pdfFile from "../Material/PL-01-Politica-tratamiento-de-datos-personales.pdf";
import CookiePreferencesModal from "./cookiePreferencesModal";

const defaultPreferences = {
  analytics: false,
  marketing: false,
};

const COOKIE_PREFERENCES_KEY = "atlantisCookiePreferences";
const COOKIE_CONSENT_KEY = "atlantisCookieConsentStatus";

const loadStoredPreferences = () => {
  try {
    const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (stored) {
      return { ...defaultPreferences, ...JSON.parse(stored) };
    }
  } catch (error) {
    // Si hay un problema con localStorage, se ignora y se mantiene el valor por defecto.
  }
  return defaultPreferences;
};

const persistPreferences = (preferences, status = "custom") => {
  try {
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ status, updatedAt: new Date().toISOString() })
    );
  } catch (error) {
    // El almacenamiento puede fallar si el usuario lo restringe; en ese caso continuamos sin bloquear la UI.
  }
};

const CookieConsentBanner = () => {
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [draftPreferences, setDraftPreferences] = useState(defaultPreferences);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const storedPreferences = loadStoredPreferences();
    setPreferences(storedPreferences);
    setDraftPreferences(storedPreferences);
    const hasConsent = Cookies.get("atlantisCookieConsent");
    if (!hasConsent) {
      setIsBannerVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = { analytics: true, marketing: true };
    setPreferences(newPreferences);
    setDraftPreferences(newPreferences);
    persistPreferences(newPreferences, "accepted");
    Cookies.set("atlantisCookieConsent", "accepted", { expires: 180, path: "/" });
    setIsBannerVisible(false);
  };

  const handleDeclineAll = () => {
    const newPreferences = { analytics: false, marketing: false };
    setPreferences(newPreferences);
    setDraftPreferences(newPreferences);
    persistPreferences(newPreferences, "declined");
    Cookies.set("atlantisCookieConsent", "declined", { expires: 180, path: "/" });
    setIsBannerVisible(false);
  };

  const handleModalClose = (shouldSave = false) => {
    setIsModalOpen(false);
    if (shouldSave) {
      setPreferences(draftPreferences);
      persistPreferences(draftPreferences, "custom");
      Cookies.set("atlantisCookieConsent", "custom", { expires: 180, path: "/" });
      setIsBannerVisible(false);
    }
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar todas"
        declineButtonText="Rechazar opcionales"
        enableDeclineButton
        cookieName="atlantisCookieConsent"
        style={{ background: "#2B373B", zIndex: 1000 }}
        buttonStyle={{ color: "#ffffff", fontSize: "13px", background: "#e65252" }}
        declineButtonStyle={{ color: "#ffffff", background: "#364152", fontSize: "13px" }}
        expires={180}
        onAccept={handleAcceptAll}
        onDecline={handleDeclineAll}
        visible={isBannerVisible ? "show" : "hidden"}
      >
        Usamos cookies para mejorar tu experiencia y recordar tus preferencias.{" "}
        <a href={pdfFile} target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700" }}>
          Más información
        </a>{" "}
        |{" "}
        <button
          type="button"
          onClick={() => {
            setDraftPreferences(preferences);
            setIsModalOpen(true);
          }}
          style={{
            background: "transparent",
            border: "none",
            color: "#ffd700",
            cursor: "pointer",
            textDecoration: "underline",
            padding: 0,
            fontSize: "14px",
          }}
        >
          Administrar preferencias
        </button>
      </CookieConsent>
      <CookiePreferencesModal
        open={isModalOpen}
        onClose={handleModalClose}
        preferences={draftPreferences}
        onUpdate={setDraftPreferences}
      />
    </>
  );
};

export default CookieConsentBanner;
