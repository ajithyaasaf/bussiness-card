// Optional: Add interactivity (e.g., animations or hover effects)
document.querySelectorAll(".service-card, .contact-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 8px 20px rgba(8, 116, 204, 0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});
