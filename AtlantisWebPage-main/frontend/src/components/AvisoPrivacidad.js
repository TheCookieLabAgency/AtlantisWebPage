import React, { useEffect, useState } from "react";
import politicaDatos from "../Material/PL-01-Politica-tratamiento-de-datos-personales.pdf";
const AvisoPrivacidad = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("avisoPrivacidadVisto");

    if (!alreadySeen) {
      setVisible(true);
    }
  }, []);

  const cerrar = () => {
    localStorage.setItem("avisoPrivacidadVisto", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>ATLANTIS INFORMA</h3>
        <p>
          Nuestra Política de Tratamiento de Datos Personales ha
          sido actualizada.
        </p>

        <a
          href={politicaDatos}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          👉 Ver Política Actualizada
        </a>

        <button onClick={cerrar} style={styles.button}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
  },
  link: {
    display: "block",
    margin: "15px 0",
    color: "blue",
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
  },
};

export default AvisoPrivacidad;
