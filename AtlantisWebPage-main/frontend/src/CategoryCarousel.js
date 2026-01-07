import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/categoryCarousel.css";

// Importar las imágenes de categorías
import soytop from "./Material/SOYTOP.png";
import lifestyle from "./Material/LIFESTYLE.png";
import hogar from "./Material/HOGAR.png";
import hobbies from "./Material/HOBBIES.png";
import buencomer from "./Material/BUEN COMER.png";

function CategoryCarousel({ 
  speed = "slow", 
  direction = "left", 
  className = "categories-section" 
}) {
  const categoriesScrollerRef = useRef(null);
  const navigate = useNavigate();

  // Array de categorías con sus imágenes y nombres
  const categories = [
    { img: buencomer, name: "BUEN COMER", className: "" },
    { img: hogar, name: "HOGAR", className: "" },
    { img: lifestyle, name: "LIFESTYLE", className: "" },
    { img: hobbies, name: "HOBBIES", className: "" },
    { img: soytop, name: "SOY TOP MEMBER", className: "" }
  ];

  // Función para manejar click en categoría
  const handleClick = (categoria) => {
    navigate("/Nuestras_marcas", { state: { categoria } });
  };

  // Función de animación basada en Kevin Powell adaptada para React
  useEffect(() => {
    const addAnimation = () => {
      const scroller = categoriesScrollerRef.current;
      
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
        ref={categoriesScrollerRef} 
        data-speed={speed} 
        data-direction={direction}
      >
        <div className="scroller__inner">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`category-carousel-item ${category.className}`}
              onClick={() => handleClick(category.name)}
            >
              <img 
                src={category.img} 
                alt={category.name} 
                className="category-image" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { CategoryCarousel };