import { Link } from "react-router-dom";
import logo from "../assets/hops-logo.png";

export default function Header() {
  return (
    <header>
      <div className="mark">
        <img src={logo} alt="Logo Hops Beer" />
      </div>
      <p className="kicker">Brew Pub &middot; Ponta D'Areia</p>
      <h1>
        Hops
        <span>Beer</span>
      </h1>
      <p className="bio">
        Seu bar da fábrica. Chope vivo e fresco, sempre — 10 torneiras com
        rótulos fixos e sazonais.
      </p>
      <Link className="addr" to="/localizacao">
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
        R. Quarenta, Ponta D'Areia
      </Link>
    </header>
  );
}
