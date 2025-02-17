// Sélectionner les éléments
const HeaderComponent = document.querySelector('.gsap-header');
const NavComponent = document.querySelector('.navbar_component');

// Initialiser les styles avec GSAP
gsap.set([HeaderComponent], { visibility: "visible", opacity: 0, y: 100 });
gsap.set([NavComponent], { visibility: "visible", opacity: 0, y: -100 });

// Animation pour HeaderComponent
gsap.to(HeaderComponent, {
  opacity: 1, // Rendre visible
  y: 0, // Position finale
  duration: 0.8, // Durée de l'animation
  ease: "power2.out",
  delay: 0.5, // Délai avant le démarrage
});

// Animation pour BadgeComponent
gsap.to(NavComponent, {
  opacity: 1, // Rendre visible
  y: 0, // Position finale
  duration: 0.8, // Durée de l'animation
  ease: "power2.out",
  delay: 0.3, // Délai avant le démarrage
});

$(".region").hover(function () {
  let regionSlug = $(this).data("region");
  let popup = $(".region_popup[data-region='" + regionSlug + "']");

  if (popup.length > 0) {
    popup.css("display", "block");

    // Animation de slide-in
    gsap.fromTo(popup, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  }
}, function () {
  let regionSlug = $(this).data("region");
  let popup = $(".region_popup[data-region='" + regionSlug + "']");

  // Animation de slide-out
  gsap.to(popup, {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.in",
    onComplete: function () {
      popup.css("display", "none");
    }
  });
});
