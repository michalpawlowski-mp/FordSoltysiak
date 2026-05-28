import { reasons } from "../data/reasons.data";
import { useFadeIn } from "../hooks/useFadeIn";

function WhyUs() {
  const ref = useFadeIn();

  return (
    <section className="why-section" id="whyUs" ref={ref}>
      <p className="section-label fade">Dlaczego warto</p>
      <h2 className="fade">NASZE ATUTY</h2>
      <div className="why-grid">
        {reasons.map((reason) => (
          <div key={reason.num} className="why-card fade">
            <div className="why-num">{reason.num}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
