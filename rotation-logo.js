// Animation de rotation infinie et lente pour desktop
ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {
    gsap.to(".services-header_logo-arrow", {
      rotation: 360, // Rotation complète sur l'axe Z
      duration: 30, // Durée totale pour une rotation complète
      ease: "none", // Mouvement fluide sans accélération
      repeat: -1, // Répète à l'infini
    });
  },
});
