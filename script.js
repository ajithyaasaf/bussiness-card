// Optimized Particle System
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 8 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.setProperty("--direction", Math.random() < 0.5 ? -1 : 1);
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
  }
}

// Initialize particles on load
window.addEventListener("load", () => {
  createParticles();
});

// Responsive particle adjustment
window.addEventListener("resize", () => {
  const particles = document.querySelectorAll(".particle");
  particles.forEach((particle) => particle.remove());
  createParticles();
});
