//Nav bar background then shows on other sections
const header = document.getElementById("siteHeader");
const heroSection = document.getElementById("home");
const body = document.body;

const navObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      header.classList.remove("scrolled");
    } else {
      header.classList.add("scrolled");
    }
  },
  { threshold: 0.2 }
);

navObserver.observe(heroSection);

//cloud transition
const cloudBg = document.getElementById("cloudBg");
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const windowHeight = window.innerHeight;
  const startFade = windowHeight * 0.7;
  const endFade = windowHeight * 1.2;

  if (scrolled < startFade) {
    cloudBg.style.opacity = 1;
  } else if (scrolled > endFade) {
    cloudBg.style.opacity = 0;
  } else {
    const fadeRange = endFade - startFade;
    const fadeProgress = scrolled - startFade;
    const opacity = 1 - fadeProgress / fadeRange;
    cloudBg.style.opacity = opacity;
  }
});

// Dark mode toggle
const themeToggle = document.getElementById("dark-mode-toggle");

// Check for saved color palette
const savedPalette = localStorage.getItem("palette") || "default";
if (savedPalette === "dark") {
  body.setAttribute("data-palette", "dark");
}

// Toggle between dark and the last light palette
themeToggle.addEventListener("click", () => {
  const currentPalette = body.getAttribute("data-palette") || "default";

  if (currentPalette === "dark") {
    const lastLightPalette =
      localStorage.getItem("lastLightPalette") || "default";
    body.setAttribute("data-palette", lastLightPalette);
    localStorage.setItem("palette", lastLightPalette);
  } else {
    localStorage.setItem("lastLightPalette", currentPalette);
    body.setAttribute("data-palette", "dark");
    localStorage.setItem("palette", "dark");
  }

  updateActivePalette();
});

const paletteToggle = document.getElementById("palette-toggle");
const paletteDropdown = document.getElementById("paletteDropdown");
const paletteOptions = document.querySelectorAll(".palette-option");

body.setAttribute("data-palette", savedPalette);

function updateActivePalette() {
  const currentPalette = body.getAttribute("data-palette");
  paletteOptions.forEach((option) => {
    if (option.dataset.palette === currentPalette) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });
}

updateActivePalette();

// Toggle dropdown
paletteToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  paletteDropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (
    !paletteToggle.contains(e.target) &&
    !paletteDropdown.contains(e.target)
  ) {
    paletteDropdown.classList.remove("show");
  }
});

// Handle palette selection
paletteOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const palette = option.dataset.palette;
    localStorage.setItem("lastLightPalette", palette);
    body.setAttribute("data-palette", palette);
    localStorage.setItem("palette", palette);
    updateActivePalette();
    paletteDropdown.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("text-scroll");

  setInterval(() => {
    const text = el.textContent;
    el.textContent = text.slice(1) + text[0];
  }, 200);
});

