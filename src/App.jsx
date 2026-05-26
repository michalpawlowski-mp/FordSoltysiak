import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
  useEffect(() => {
    const fades = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [
              ...entry.target.parentElement.querySelectorAll(".fade"),
            ];
            const index = siblings.indexOf(entry.target);
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

  return (
    <>
      <section className="hero">
        <div className="grid-lines"></div>
        <Nav />
        <Hero />
      </section>
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
