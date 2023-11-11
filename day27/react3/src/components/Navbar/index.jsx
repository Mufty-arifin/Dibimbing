import "./style.css";

const Navbar = ({navList, title})  => {
 
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="nav-links">
          {navList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
