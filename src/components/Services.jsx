import { services } from "../data/services.data";

function Services() {
  return (
    <section id="services">
      <p className="section-label fade">Co robimy</p>
      <h2 className="fade">ZAKRES USŁUG</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card fade">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
