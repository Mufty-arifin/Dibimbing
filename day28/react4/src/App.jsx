import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getUsers();
    getMenu();
  }, []);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((respon) => {
        setUsers(respon.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  console.log(menus);
  console.log(users);
  return (
    <div>
      <h1>App</h1>
      {users.map((item) => (
        <div key={item.id}>
          <img src={item.avatar} />
          <h1>{item.first_name} </h1>
        </div>
      ))}
      {menus.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
