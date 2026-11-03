document.querySelectorAll(".map-accept").forEach((button) => {
  button.addEventListener("click", () => {
    const consent = button.closest(".map-consent");
    const map = document.createElement("iframe");
    map.className = "map-frame";
    map.title = "Mapa";
    map.loading = "lazy";
    map.referrerPolicy = "no-referrer-when-downgrade";
    map.src = `https://maps.google.com/maps?q=${consent.dataset.map}&output=embed`;
    consent.replaceWith(map);
  });
});
