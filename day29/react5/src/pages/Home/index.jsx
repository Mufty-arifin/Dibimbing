import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
const Home = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getMenu();
  });
  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menus`)
      .then((respon) => {
        setMenus(respon.data.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="menu-wrapper">
         <Navbar />
      <h1>Homepage</h1>

      <div className="menu">
        {menus.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.description}</p>
            <Link to={`/user/${item.id}`}>
              <button>Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
