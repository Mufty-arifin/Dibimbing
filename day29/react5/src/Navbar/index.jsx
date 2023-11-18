import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
     <div className="navbar">
     <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
     </div>
    </div>
  );
};

export default Navbar;
