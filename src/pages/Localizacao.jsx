import { Link } from "react-router-dom";
import "../styles/hops-beer.css";
import "../styles/cardapio.css";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Hops+Beer+Ponta+D%27Areia+S%C3%A3o+Luis";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Hops+Beer+Ponta+D%27Areia+S%C3%A3o+Luis&output=embed";

function BackArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function Localizacao() {
  return (
    <div className="hops-beer-root cardapio-root">
      <div className="grain" aria-hidden="true"></div>
      <div className="glow" aria-hidden="true"></div>

      <div className="page cardapio-page">
        <div className="cardapio-top">
          <Link to="/" className="cardapio-back">
            <BackArrow />
            Voltar
          </Link>
        </div>

        <div className="section">
          <p className="section-label">Localização</p>
          <p className="bio cardapio-subtitle">
            R. Quarenta, Ponta D'Areia — São Luís, MA
          </p>
        </div>

        <div className="cardapio-viewer localizacao-map">
          <iframe
            title="Mapa Hops Beer"
            src={MAPS_EMBED_URL}
            className="cardapio-pdf"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          className="row cardapio-download"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PinIcon />
          <span>Abrir no Google Maps</span>
        </a>
      </div>
    </div>
  );
}
