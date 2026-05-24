import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
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
