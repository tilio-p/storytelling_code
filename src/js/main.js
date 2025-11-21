import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap
  // Anime l'objet  lorsque son centre arrive en bas du viewport
  // Il devient visible et est déplacé horizontalement de 25%
  .to("#oiseau-1", {
    opacity: 1,
    x: "150%",
    scrollTrigger: {
      trigger: "#oiseau-1",
      start: "top bottom",
      scrub: 1,
    },
  });

// Anime l'objet  lorsque son centre arrive en bas du viewport
// Il devient visible et est déplacé horizontalement de -25%
gsap.to("#title", {
  opacity: 1,
  y: "-150%",
  scrollTrigger: {
    trigger: "#title",
    start: "top bottom",
    scrub: 1,
  },
});
gsap.to("#title2", {
  opacity: 1,
  y: "-350%",
  scrollTrigger: {
    trigger: "#title2",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.to("#oiseau-2", {
  opacity: 1,
  x: "180%",
  scrollTrigger: {
    trigger: "#oiseau-2",
    start: "top bottom",
    scrub: 1,
  },
});
gsap.to("#oiseau-3", {
  opacity: 1,
  x: "200%",
  scrollTrigger: {
    trigger: "#oiseau-3",
    start: "top bottom",
    scrub: 1,
  },
});
gsap.to("#oiseau-4", {
  opacity: 1,
  x: "40%",
  scrollTrigger: {
    trigger: "#oiseau-4",
    start: "top bottom",
    scrub: 1,
  },
});

// Crée un effet de scroll horizontal
gsap.to(".l-montagne-paysage", {
  opacity: 1,
  y: "10%",
  scrollTrigger: {
    trigger: ".l-montagne-paysage",
    start: "top bottom",
    scrub: 1,
    start: "-=600",
    end: "-=100",
  },
});
gsap.to(".l-montagne-paysage", {
  opacity: 1,
  x: "-5%",
  scrollTrigger: {
    trigger: "l-slider-container",
    start: " bottom bottom",
    scrub: 1,
    start: "+=3300",
  },
});
gsap.to(".l-slider-container", {
  x: "-33%",
  scrollTrigger: {
    trigger: ".l-slider-mask",
    start: "top top ",
    end: "500%",
    scrub: true,
    pin: true,
    markers: false,
  },
});

gsap.to(".l-slider-item", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".l-slider-item",
    scrub: true,
    start: "left 100%",
  },
});

gsap.to("#item-1", {
  opacity: 1,
  y: "-15%",
  scrollTrigger: {
    trigger: ".l-montagne-paysage",
    start: "bottom center",
    scrub: 1,
    start: "-=600",
    end: "-=150",
  },
});
gsap.to("#item-2", {
  opacity: 1,
  y: "-25%",
  scrollTrigger: {
    trigger: ".l-montagne-paysage",
    start: "bottom center",
    scrub: 1,
    start: "-=500",
    end: "-=150",
  },
});

gsap.to("#item-3", {
  opacity: 1,
  y: "-20%",
  scrollTrigger: {
    trigger: ".l-montagne-paysage",
    start: "bottom center",
    scrub: 1,
    start: "-=500",
    end: "-=150",
  },
});

gsap.to("#item-4", {
  opacity: 1,
  y: "-25%",
  scrollTrigger: {
    trigger: ".l-montagne-paysage",
    start: "bottom center",
    scrub: 1,
    start: "-=500",
    end: "-=150",
  },
});

gsap.to("#item-5", {
  opacity: 1,
  y: "-25%",
  scrollTrigger: {
    trigger: ".l-montagne-paysage",
    start: "bottom center",
    scrub: 1,
    start: "-=500",
    end: "-=150",
  },
});

gsap.to(".l-planet", {
  opacity: 1,
  y: "-20%",
  scrollTrigger: {
    trigger: ".l-grotte",
    start: "center-top center",
    scrub: 1,
  },
});

// Effet parallax
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container-footer",
      start: "center",
      scrub: 2,
      pin: true,
    },
  })
  .to("#element-3", {
    y: +100,
  })
  .to(
    "#element-1",
    {
      y: +400,
    },
    0
  )
  .to(
    "#element-2",
    {
      y: +500,
    },
    0
  );

// Draw the SVG
// Based on https://scrollmagic.io/examples/advanced/svg_drawing.html
function pathPrepare(el) {
  const lineLength = el.getTotalLength();
  el.style.strokeDasharray = lineLength;
  el.style.strokeDashoffset = lineLength;
}

const svgPath = document.querySelector("#template");

// prepare SVG
pathPrepare(svgPath);

gsap.to(svgPath, {
  strokeDashoffset: 0,
  stroke: "red",
  scrollTrigger: {
    trigger: ".draw-svg",
    start: "bottom bottom",
    scrub: 2,
    pin: true,
  },
});
