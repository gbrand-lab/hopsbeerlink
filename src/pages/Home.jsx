import Header from "../components/Header";
import PrimaryActions from "../components/PrimaryActions";
import MenuCards from "../components/MenuCards";
import MoreLinks from "../components/MoreLinks";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import "../styles/hops-beer.css";

export default function Home() {
  return (
    <div className="hops-beer-root">
      <div className="grain" aria-hidden="true"></div>
      <div className="glow" aria-hidden="true"></div>

      <div className="page">
        <Header />
        <PrimaryActions />
        <MenuCards />
        <MoreLinks />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
}
