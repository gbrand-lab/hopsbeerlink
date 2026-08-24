const SITE_URL = "https://hops-beer-welcome.lovable.app";
const REVIEW_URL = "https://g.page/r/CZQkCJo68ZzJEBM/review";

function Arrow() {
  return (
    <svg
      className="card-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function MoreLinks() {
  return (
    <div className="section">
      <p className="section-label">Mais</p>
      <a className="row" href={SITE_URL} target="_blank" rel="noopener noreferrer">
        <div className="card-icon row-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
          </svg>
        </div>
        <span>Nosso Site</span>
        <Arrow />
      </a>
      <a className="row" href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
        <div className="card-icon row-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.6z" />
          </svg>
        </div>
        <span>Avaliar no Google</span>
        <Arrow />
      </a>
    </div>
  );
}
