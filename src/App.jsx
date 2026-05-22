import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <section class="hero">
        <div class="grid-lines"></div>
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
