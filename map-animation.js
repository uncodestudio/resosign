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
