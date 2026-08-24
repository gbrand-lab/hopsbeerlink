import { useParams, Link, Navigate } from "react-router-dom";
import "../styles/hops-beer.css";
import "../styles/cardapio.css";

const MENUS = {
  hops: {
    title: "Menu Hops Beer",
    subtitle: "Chopes das 10 torneiras, fixos e sazonais",
    file: "/menus/cardapio-hops.pdf",
  },
  "happy-hour": {
    title: "Menu Happy Hour",
    subtitle: "Promoções e petiscos do dia",
    file: "/menus/cardapio-happy-hour.pdf",
  },
};

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

export default function Cardapio() {
  const { slug } = useParams();
  const menu = MENUS[slug];

  if (!menu) {
    return <Navigate to="/cardapio/hops" replace />;
  }

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
          <p className="section-label">{menu.title}</p>
          <p className="bio cardapio-subtitle">{menu.subtitle}</p>
        </div>

        <div className="cardapio-viewer">
          <object
            data={`${menu.file}#toolbar=0&navpanes=0`}
            type="application/pdf"
            className="cardapio-pdf"
          >
            <p className="cardapio-fallback">
              Não foi possível exibir o PDF aqui.{" "}
              <a href={menu.file} target="_blank" rel="noopener noreferrer">
                Abrir em nova aba
              </a>
              .
            </p>
          </object>
        </div>

        <a
          className="row cardapio-download"
          href={menu.file}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
            <path d="M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
          </svg>
          <span>Abrir em nova aba / baixar PDF</span>
        </a>
      </div>
    </div>
  );
}
