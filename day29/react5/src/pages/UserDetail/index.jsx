import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
const UserDetail = () => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");

  const param = useParams();

  useEffect(() => {
    getMenuDetail();
  }, []);

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param.id}`)
      .then((respon) => {
        setMenu(respon.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.respon.data);
      });
  };
  console.log(param.id);
  return (
    <div className="menu-detail">
      <h1>Menu Detail Page</h1>
      {error.length ? <p>{error}</p> : null}
      {menu ? (
        <div>
          <h1>{menu.name}</h1>
          <img src={menu.imageUrl} alt={menu.name} />
          <p>{menu.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
