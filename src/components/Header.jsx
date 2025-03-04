import { Link } from "react-router-dom";
import { FaCouch } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
        <FaCouch size="24px" />
        <h1>Inboedel te koop</h1>
      </Link>

      <nav>
        <Link to={"/contact"} className="link-btn">
          Neem contact op
        </Link>
      </nav>
    </header>
  );
};
export default Header;
