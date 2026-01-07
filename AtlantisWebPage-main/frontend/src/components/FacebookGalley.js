// components/FacebookGalley.jsx
import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./FacebookGalley.css";

export const FacebookMediaGallery = ({
  urls = [
    "https://www.facebook.com/reel/2284409282007837",
    "https://www.facebook.com/reel/1274524237584553",
    "https://www.facebook.com/reel/1257259469185686",
  ],
  pageUrl = "https://www.facebook.com/AtlantisUnidadComercial",
  title = "Facebook",
}) => {
  // Construye la URL del plugin de Facebook para cada video
  const toFbPluginSrc = (videoUrl) =>
    `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      videoUrl
    )}&show_text=false&width=400&height=711`;

  return (
    <section className="social-gallery" aria-label="Galería de videos de Facebook">
      {/* Botón superior (solo Facebook) */}
      <div className="sg-actions">
        <a
          className="sg-action"
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir al Facebook de Atlantis"
          title="Facebook"
        >
          <FaFacebook />
          <span>Facebook</span>
        </a>
      </div>

      {/* Grid centrado de 3/2/1 cards según ancho */}
      <div className="sg-grid sg-grid--three">
        {urls.map((u, i) => (
          <article className="sg-card" key={i}>
            <div className="sg-embed sg-embed--facebook">
              <iframe
                title={`Facebook video ${i + 1}`}
                src={toFbPluginSrc(u)}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <footer className="sg-footer">
              <h4 className="sg-title">{title}</h4>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};
