import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/ca-capka-logo.png"

const Header = () => {
  return (
    <header className="responsive-header">
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={Logo} alt="" srcset=""  width={82}/>
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
