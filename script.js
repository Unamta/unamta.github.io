const cloudBg = document.getElementById("cloudBg");
const aboutSection = document.getElementById("about");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      cloudBg.classList.add("hidden");
    } else {
      cloudBg.classList.remove("hidden");
    }
  },
  { threshold: 0.4 }
);

observer.observe(aboutSection);

//Nav bar background then shows on other sections
const header = document.getElementById("siteHeader");
const heroSection = document.getElementById("home");

const navObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      header.classList.remove("scrolled"); // hero visible => transparent
    } else {
      header.classList.add("scrolled"); // hero gone => background shows
    }
  },
  { threshold: 0.2 }
);

navObserver.observe(heroSection);