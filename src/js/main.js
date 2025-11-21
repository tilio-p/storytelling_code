import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#oiseau-1", {
  opacity: 1,
  x: "150%",
  scrollTrigger: {
    trigger: "#oiseau-1",
    start: "top bottom",
    scrub: 1,
  },
});

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

function pathPrepare(el) {
  const lineLength = el.getTotalLength();
  el.style.strokeDasharray = lineLength;
  el.style.strokeDashoffset = lineLength;
}

const svgPath = document.querySelector("#template");

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

document.addEventListener("DOMContentLoaded", function () {
  const globalDocument = document.querySelector("html");
  const popup = document.getElementById("js-popup");
  const popup2 = document.getElementById("js-popup2");
  const popup3 = document.getElementById("js-popup3");
  const bison = document.querySelector("#item-2 img");
  const bisonover = document.querySelector(".popup-overlay");
  const tigre = document.querySelector("#item-4 img");
  const tigreover = document.querySelector(".popup-overlay2");
  const singe = document.querySelector("#item-6 img");
  const singeover = document.querySelector(".popup-overlay3");

  bison.addEventListener("click", function (e) {
    // Ouvrir popup si clic sur l'image
    popup.classList.add("active");
    globalDocument.classList.add("no-scroll"); // bloque scroll

    // Fermer popup si clic sur le fond (overlay)
    bisonover.addEventListener("click", function (e) {
      // Ouvrir popup si clic sur l'image
      popup.classList.remove("active");
      globalDocument.classList.remove("no-scroll"); // bloque scroll
    });
  });

  tigre.addEventListener("click", function (e) {
    popup2.classList.add("active");
    globalDocument.classList.add("no-scroll"); // bloque scroll

    tigreover.addEventListener("click", function (e) {
      popup2.classList.remove("active");
      globalDocument.classList.remove("no-scroll"); // bloque scroll
    });
  });

  singe.addEventListener("click", function (e) {
    popup3.classList.add("active");
    globalDocument.classList.add("no-scroll"); // bloque scroll

    singeover.addEventListener("click", function (e) {
      popup3.classList.remove("active");
      globalDocument.classList.remove("no-scroll"); // bloque scroll
    });
  });

  document.addEventListener("keydown", function (e) {
    if (
      (e.key === "Escape" || e.key === "Esc") &&
      popup.classList.contains("active")
    ) {
      popup.classList.remove("active");
      document.documentElement.style.overflow = "";
    }
  });
});
