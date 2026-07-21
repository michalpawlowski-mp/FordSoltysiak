import { useFadeIn } from "./hooks/useFadeIn";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Modal from "./components/Modal";

function App() {
  const ref = useFadeIn();

  return (
    <>
      <Modal />
      <section className="hero" ref={ref}>
        <div className="grid-lines"></div>
        <Nav />
        <Hero />
      </section>
      <main>
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
