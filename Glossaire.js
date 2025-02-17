// Animation d'apparition header 
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

// Script pour créer le glossaire
let lastLetter = "";
let lastItem = null; // Pour stocker le dernier élément de chaque lettre

$(".glossaire_item").each(function () {
  let currentWord = $(this).find(".glossaire_term").text().trim();
  let firstLetter = currentWord.charAt(0).toUpperCase();

  // Si la lettre change
  if (firstLetter !== lastLetter) {
    // Ajouter un séparateur après le dernier élément de la section précédente
    if (lastItem !== null) {
      $("<div class='glossaire_divider'></div>").insertAfter(lastItem);
    }

    // Ajouter la lettre de section avant le premier élément
    $("<div class='glossaire_letter'>" + firstLetter + "</div>").insertBefore($(this));

    lastLetter = firstLetter;
  }

  lastItem = $(this); // Mettre à jour le dernier élément de la lettre en cours
});

// Ajouter un dernier séparateur après le dernier élément de la liste
if (lastItem !== null) {
  $("<div class='glossaire_divider'></div>").insertAfter(lastItem);
}
