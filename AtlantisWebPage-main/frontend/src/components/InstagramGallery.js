import React, { useEffect, useRef } from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import "./InstagramGallery.css";

const SocialMediaGallery = () => {
  // Un post por plataforma
  const instagramUrl = "https://www.instagram.com/reel/DMIsUbhtj0n/";
  const tiktokUrl    = "https://www.tiktok.com/@ccatlantis/video/7527809511504022840";
  const facebookUrl  = "https://www.facebook.com/reel/2284409282007837";

  // Enlaces de los botones superiores
  const links = {
    instagram: "https://www.instagram.com/atlantis.oficial/",
    tiktok: "https://www.tiktok.com/@ccatlantis?lang=es",
    facebook: "https://www.facebook.com/AtlantisUnidadComercial",
  };

  // Refs solo para Instagram (TikTok ya no necesita el script embed)
  const igWrapRef = useRef(null);

  // Util para cargar scripts externos con id (evita duplicados)
  const loadScriptOnce = (id, src) =>
    new Promise((resolve) => {
      if (typeof window === "undefined" || typeof document === "undefined") return resolve();
      const existing = document.getElementById(id);
      if (existing) {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.id = id;
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      document.body.appendChild(s);
    });

  useEffect(() => {
    let cancelled = false;

    const setupEmbeds = async () => {
      if (typeof window === "undefined" || typeof document === "undefined") return;

      // Carga de Instagram únicamente
      await loadScriptOnce("instagram-embed-js", "https://www.instagram.com/embed.js");

      if (cancelled) return;

      // --- Instagram: procesar SOLO si no se ha procesado antes este blockquote ---
      const igEl = igWrapRef.current?.querySelector(".instagram-media");
      if (igEl && !igEl.dataset.processed) {
        igEl.dataset.processed = "true";
        try {
          window.instgrm?.Embeds?.process();
        } catch {
          // silencioso
        }
      }
    };

    setupEmbeds();

    return () => {
      cancelled = true;
    };
  }, []);

  // Facebook: plugin de video en iframe
  const fbIframeSrc =
    "https://www.facebook.com/plugins/video.php?href=" +
    encodeURIComponent(facebookUrl) +
    "&show_text=false&width=400";

  // TikTok: player con loop + autoplay + rel=0
  const getTikTokId = (url) => {
    const m = url.match(/video\/(\d+)/);
    return m ? m[1] : "";
  };
  const tiktokId = getTikTokId(tiktokUrl);
  const tiktokIframeSrc = `https://www.tiktok.com/player/v1/${tiktokId}?loop=1&autoplay=1&rel=0`;

  return (
    <section className="social-gallery">
      {/* Botones superiores */}
      <div className="sg-actions">
        <a
          className="sg-action"
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir a Instagram de Atlantis"
          title="Instagram"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a
          className="sg-action"
          href={links.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir a TikTok de Atlantis"
          title="TikTok"
        >
          <FaTiktok />
          <span>TikTok</span>
        </a>

        <a
          className="sg-action"
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir a Facebook de Atlantis"
          title="Facebook"
        >
          <FaFacebook />
          <span>Facebook</span>
        </a>
      </div>

      {/* 3 tarjetas: una por plataforma */}
      <div className="sg-grid sg-grid--three">
        {/* Instagram */}
        <article className="sg-card">
          <div ref={igWrapRef} className="sg-embed sg-embed--instagram">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={instagramUrl}
              data-instgrm-version="14"
            />
          </div>
          <footer className="sg-footer">
            <h4 className="sg-title">Instagram</h4>
          </footer>
        </article>

        {/* TikTok con iframe player */}
        <article className="sg-card">
          <div className="sg-embed sg-embed--tiktok">
            <iframe
              title="TikTok video"
              src={tiktokIframeSrc}
              width="400"
              height="600"
              allow="autoplay; fullscreen"
              frameBorder="0"
            />
          </div>
          <footer className="sg-footer">
            <h4 className="sg-title">TikTok</h4>
          </footer>
        </article>

        {/* Facebook */}
        <article className="sg-card">
          <div className="sg-embed sg-embed--facebook">
            <iframe
              title="Facebook video"
              src={fbIframeSrc}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <footer className="sg-footer">
            <h4 className="sg-title">Facebook</h4>
          </footer>
        </article>
      </div>
    </section>
  );
};

export { SocialMediaGallery };