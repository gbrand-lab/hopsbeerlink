import { Link } from "react-router-dom";

const MENU_HOPS_URL = "/cardapio/hops";
const MENU_HAPPY_URL = "/cardapio/happy-hour";

const menus = [
  {
    href: MENU_HOPS_URL,
    title: "Cardápio Hops",
    kicker: "Chopes & rótulos",
    cta: "Clique aqui e veja o cardápio!",
  },
  {
    href: MENU_HAPPY_URL,
    title: "Cardápio Happy",
    kicker: "Promoções do dia",
    cta: "Clique aqui e veja as promoções!",
  },
];

export default function MenuCards() {
  return (
    <div className="section">
      <p className="section-label">Cardápios</p>
      <div className="banner-list">
        {menus.map((menu) => (
          <Link key={menu.title} className="banner" to={menu.href}>
            <div className="banner-glow" aria-hidden="true"></div>
            <div className="banner-text">
              <p className="banner-kicker">{menu.kicker}</p>
              <p className="banner-title">{menu.title}</p>
              <span className="banner-cta">{menu.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
