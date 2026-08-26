const IFOOD_URL =
  "https://www.ifood.com.br/delivery/sao-luis-ma/hopsbeer-ponta-d39areia/a392be65-cfb9-44f9-9cec-238520068c2e?utm_medium=share";
const WHATSAPP_URL = "https://wa.me/5598984787249";

const actions = [
  {
    href: IFOOD_URL,
    kicker: "Delivery",
    title: "iFood",
    cta: "Peça agora!",
    icon: "/logo_ifood_amarelo_transparente-removebg-preview.png",
    iconWide: true,
  },
  {
    href: WHATSAPP_URL,
    kicker: "Fale conosco",
    title: "WhatsApp",
    cta: "Chame no zap!",
    icon: "/wpp-icon.png",
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
            className={`banner${action.icon ? " banner--icon-only" : ""}`}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="banner-glow" aria-hidden="true"></div>
            <div className="banner-text">
              {action.icon && (
                <img
                  src={action.icon}
                  alt={action.title}
                  className={`banner-icon${action.iconWide ? " banner-icon--wide" : ""}`}
                />
              )}
              {!action.icon && <p className="banner-kicker">{action.kicker}</p>}
              {!action.icon && <p className="banner-title">{action.title}</p>}
              {!action.icon && <span className="banner-cta">{action.cta}</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
