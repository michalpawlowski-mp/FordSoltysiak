import { useEffect, useRef } from "react";

export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const fades = container.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = [...fades].indexOf(entry.target);
            setTimeout(() => entry.target.classList.add("visible"), index * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    fades.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
