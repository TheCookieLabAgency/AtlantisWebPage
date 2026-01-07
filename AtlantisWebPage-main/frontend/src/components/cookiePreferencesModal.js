import React from "react";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.55)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1001,
};

const modalStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  maxWidth: "520px",
  width: "92%",
  padding: "32px 28px",
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
};

const titleStyle = {
  fontSize: "22px",
  marginBottom: "12px",
  color: "#1f2933",
};

const descriptionStyle = {
  fontSize: "15px",
  lineHeight: 1.5,
  color: "#364152",
  marginBottom: "20px",
};

const categoryContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  marginBottom: "28px",
};

const categoryStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
};

const checkboxStyle = {
  marginTop: "4px",
};

const buttonRowStyle = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
};

const primaryButtonStyle = {
  backgroundColor: "#e65252",
  border: "none",
  color: "#ffffff",
  padding: "10px 22px",
  borderRadius: "42px",
  cursor: "pointer",
  fontWeight: 600,
};

const secondaryButtonStyle = {
  backgroundColor: "transparent",
  border: "1px solid #cfd8df",
  color: "#364152",
  padding: "10px 22px",
  borderRadius: "42px",
  cursor: "pointer",
  fontWeight: 600,
};

const CookiePreferencesModal = ({ open, onClose, preferences, onUpdate }) => {
  if (!open) {
    return null;
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    onUpdate({ ...preferences, [name]: checked });
  };

  return (
    <div style={overlayStyle} role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-heading">
      <div style={modalStyle}>
        <h2 id="cookie-preferences-heading" style={titleStyle}>
          Preferencias de cookies
        </h2>
        <p style={descriptionStyle}>
          Selecciona las categorías de cookies que deseas permitir. Las cookies necesarias son imprescindibles para el funcionamiento de la página y siempre estarán activas.
        </p>
        <div style={categoryContainerStyle}>
          <div style={categoryStyle}>
            <input type="checkbox" checked disabled style={checkboxStyle} />
            <div>
              <strong>Necesarias</strong>
              <p style={{ margin: "4px 0 0 0", color: "#52606d", fontSize: "14px" }}>
                Permiten funciones básicas como la navegación y el acceso seguro a áreas protegidas. El sitio web no puede funcionar adecuadamente sin ellas.
              </p>
            </div>
          </div>
          <div style={categoryStyle}>
            <input
              type="checkbox"
              name="analytics"
              id="cookie-analytics"
              checked={preferences.analytics}
              onChange={handleCheckboxChange}
              style={checkboxStyle}
            />
            <div>
              <label htmlFor="cookie-analytics">
                <strong>Analíticas</strong>
              </label>
              <p style={{ margin: "4px 0 0 0", color: "#52606d", fontSize: "14px" }}>
                Nos ayudan a comprender cómo interactúan los visitantes con el sitio web recopilando y comunicando información de forma anónima.
              </p>
            </div>
          </div>
          <div style={categoryStyle}>
            <input
              type="checkbox"
              name="marketing"
              id="cookie-marketing"
              checked={preferences.marketing}
              onChange={handleCheckboxChange}
              style={checkboxStyle}
            />
            <div>
              <label htmlFor="cookie-marketing">
                <strong>Marketing</strong>
              </label>
              <p style={{ margin: "4px 0 0 0", color: "#52606d", fontSize: "14px" }}>
                Se utilizan para hacer seguimiento a los visitantes en los sitios web con el fin de mostrar anuncios relevantes y atractivos para cada usuario.
              </p>
            </div>
          </div>
        </div>
        <div style={buttonRowStyle}>
          <button type="button" onClick={onClose} style={secondaryButtonStyle}>
            Cancelar
          </button>
          <button type="button" onClick={() => onClose(true)} style={primaryButtonStyle}>
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferencesModal;
