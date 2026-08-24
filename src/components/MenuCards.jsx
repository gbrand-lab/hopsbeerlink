const MENU_HOPS_URL =
  "https://drive.google.com/file/d/15Z3Vn56305Qoo8prn1SlN_mzHwrytj3t/view?usp=share_link";
const MENU_HAPPY_URL =
  "https://drive.google.com/file/d/1u5P9QMXVvO23otJFHZjAXvHd-DwnPv1e/view?usp=share_link";

const menus = [
  {
    href: MENU_HOPS_URL,
    title: "Menu Hops Beer",
    subtitle: "Chopes das 10 torneiras, fixos e sazonais",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6M9 9h2" />
      </svg>
    ),
  },
  {
    href: MENU_HAPPY_URL,
    title: "Menu Happy Hour",
    subtitle: "Promoções e petiscos do dia",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];

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

export default function MenuCards() {
  return (
    <div className="section">
      <p className="section-label">Cardápios</p>
      <div className="card-list">
        {menus.map((menu) => (
          <a
            key={menu.title}
            className="card"
            href={menu.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-icon">{menu.icon}</div>
            <div className="card-text">
              <p className="card-title">{menu.title}</p>
              <p className="card-sub">{menu.subtitle}</p>
            </div>
            <Arrow />
          </a>
        ))}
      </div>
    </div>
  );
}
