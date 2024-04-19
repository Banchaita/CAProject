import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Navbar from "../DemoMenu/Navbar";
import Logo from "../../assets/images/ca-capka-logo.png";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" width={82} />
        </Link>
        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
