const IFOOD_URL =
  "https://www.ifood.com.br/delivery/sao-luis-ma/hopsbeer-ponta-d39areia/a392be65-cfb9-44f9-9cec-238520068c2e?utm_medium=share";
const WHATSAPP_URL = "https://wa.me/5598984787249";

export default function PrimaryActions() {
  return (
    <div className="section">
      <p className="section-label">Peça agora</p>
      <div className="cta-row">
        <a
          className="cta primary"
          href={IFOOD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l1.5-4h15L21 9" />
            <path d="M4 9h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z" />
            <path d="M9 13a3 3 0 0 0 6 0" />
          </svg>
          iFood
        </a>
        <a
          className="cta secondary"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.53a9.87 9.87 0 0 0 4.9 1.3h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.4 17.5 2 12.04 2zm5.8 14.16c-.25.7-1.24 1.29-2 1.45-.53.11-1.22.2-3.56-.76-2.99-1.24-4.9-4.28-5.05-4.48-.15-.2-1.2-1.6-1.2-3.05 0-1.45.75-2.16 1.02-2.45.25-.28.55-.34.73-.34h.53c.17 0 .4-.02.62.48.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.5.3.15.47.12.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.13.07.75-.18 1.46z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
