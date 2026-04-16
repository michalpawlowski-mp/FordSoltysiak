const fades = document.querySelectorAll(".fade");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        const siblings = [...e.target.parentElement.querySelectorAll(".fade")];
        const idx = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add("visible"), idx * 60);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
fades.forEach((el) => io.observe(el));
