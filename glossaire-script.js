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

HJHH
