import { contactItems } from "../../data/contact.data";

function ContactInfo() {
  return (
    <div className="contact-info">
      {contactItems.map((item) => (
        <div key={item.id} className="contact-item fade">
          <div className="contact-item-icon">{item.icon}</div>
          <div className="contact-item-text">
            <strong>{item.label}</strong>
            {item.lines.map((line, i) =>
              line.href ? (
                <a key={i} href={line.href}>
                  {line.text}
                </a>
              ) : (
                <span key={i}>{line.text}</span>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
