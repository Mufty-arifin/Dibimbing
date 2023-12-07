import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
const Home = () => {
  const [menus, setMenus] = useState([]);
  const [page, setPage] = useState({
    currentPage: 1,
    previousPage: 0,
    nextPage: 2,
  });
  useEffect(() => {
    getMenu();
  }, [page.currentPage]);
  const getMenu = () => {
    axios
      .get(
        `https://api.mudoapi.tech/menus?name=&type=&perPage=10&page=${page.currentPage}`
      )
      .then((respon) => {
        setMenus(respon.data.data.Data);
        setPage({
          currentPage: respon.data.data.currentPage,
          previousPage: respon.data.data.previousPage,
          nextPage: respon.data.data.nextPage,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(`https://api.mudoapi.tech/menu/${id}`, config)
      .then((res) => {
        console.log(res);
        getMenu();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleBack = () => {
    setPage({
      ...page,
      currentPage: page.currentPage - 1,
    });
  };
  const handleNext = () => {
    setPage({
      ...page,
      currentPage: page.currentPage + 1,
    });
  };
  return (
    <div className="menu-wrapper">
      <Navbar />
      <h1>Homepage</h1>
      <Link to={"/new-menu"}>
        <p>creat new menu</p>
      </Link>
      <h1>Page {page.currentPage}</h1>
      <div>
        <button onClick={handleBack} disabled={!page.previousPage}>
          Back
        </button>
        <button onClick={handleNext} disabled={!page.nextPage}>
          Next
        </button>
      </div>
      <div className="menu">
        {menus.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.description}</p>
            <Link to={`/user/${item.id}`}>
              <button>Detail</button>
            </Link>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
