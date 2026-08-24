const IFOOD_URL =
  "https://www.ifood.com.br/delivery/sao-luis-ma/hopsbeer-ponta-d39areia/a392be65-cfb9-44f9-9cec-238520068c2e?utm_medium=share";
const WHATSAPP_URL = "https://wa.me/5598984787249";

const actions = [
  {
    href: IFOOD_URL,
    kicker: "Delivery",
    title: "iFood",
    cta: "Peça agora!",
  },
  {
    href: WHATSAPP_URL,
    kicker: "Fale conosco",
    title: "WhatsApp",
    cta: "Chame no zap!",
  },
];

export default function PrimaryActions() {
  return (
    <div className="section">
      <p className="section-label">Peça agora</p>
      <div className="banner-grid">
        {actions.map((action) => (
          <a
            key={action.title}
            className="banner"
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="banner-glow" aria-hidden="true"></div>
            <div className="banner-text">
              <p className="banner-kicker">{action.kicker}</p>
              <p className="banner-title">{action.title}</p>
              <span className="banner-cta">{action.cta}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
