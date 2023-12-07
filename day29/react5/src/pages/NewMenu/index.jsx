import Navbar from "../../Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewMenu = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "beverage",
    imageUrl: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log("form", form);

  const handleSubmit = () => {
    form.price = Number(form.price);
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("https://api.mudoapi.tech/menu", form, config)
      .then((respon) => {
        console.log(respon.data);

        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <Navbar />
      <h1>Creat Menu</h1>
      <input
        type="text"
        onChange={handleChange}
        id="name"
        name="name"
        placeholder="name"
        required
      />
      <br />
      <input
        onChange={handleChange}
        type="text"
        id="description"
        name="description"
        placeholder="description"
        required
      />
      <br />
      <select onChange={handleChange} id="type" name="type">
        <option value="beverage">Beverage</option>
        <option value="main-dish">main dish</option>
      </select>
      <br />
      <input
        onChange={handleChange}
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="imageUrl"
        required
      />
      <br />
      <input
        onChange={handleChange}
        type="text"
        id="price"
        name="price"
        placeholder="price"
        required
      />
      <br />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};
export default NewMenu;
