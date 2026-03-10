import React, { useEffect, useRef } from "react";
import "./css/brandCarousel.css";

// Importar todos los logos de marcas
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

function BrandCarousel({ 
  speed = "slow", 
  direction = "left", 
  className = "brands-section" 
}) {
  const brandsScrollerRef = useRef(null);

  // Array de todos los logos
  const brandLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17
  ];

  // 🔥 FUNCIÓN DE KEVIN POWELL ADAPTADA PARA REACT
  useEffect(() => {
    const addAnimation = () => {
      const scroller = brandsScrollerRef.current;
      
      if (scroller) {
        // Agregar data-animated="true" al scroller
        scroller.setAttribute("data-animated", "true");
        
        // Hacer array de los elementos dentro de scroller__inner
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        
        // Para cada item en el array, clonarlo
        // agregar aria-hidden
        // agregarlo al scroller__inner
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    };

    // Si el usuario no ha optado por reduced motion, agregar la animación
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div className={className}>
      <div 
        className="scroller" 
        ref={brandsScrollerRef} 
        data-speed={speed} 
        data-direction={direction}
      >
        <div className="scroller__inner">
          {brandLogos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Brand Logo ${index + 1}`} 
              className="brand-logo" 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { BrandCarousel };
