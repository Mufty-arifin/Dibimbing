import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        {accessToken ? (
          <p onClick={handleLogout}>Logout</p>
        ) : (
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
