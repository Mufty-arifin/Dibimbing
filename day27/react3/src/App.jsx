import { useState } from "react";
import Navbar from "./components/Navbar/index.jsx"
import Footer from "./components/Footer/index.jsx";
function App() {
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "calya",
    },
    {
      id: 2,
      name: "sigra",
    },
    {
      id: 3,
      name: "agya",
    },
    {
      id: 4,
      name: "ayla",
    },
  ]);
  
  
  let navList = ["Home", "About Us", "Contact", "FAQ"]
  const handleChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
    
  }
  
  const [filteredCars, setFilteredCars] = useState(cars);
  const handleSearch = () => {
    const filteredCars = cars.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCars(filteredCars);
    if (!search.length) {
      setFilteredCars(cars);
      
    }
  };

  return (
    <div>
      <Navbar navList={navList} title="jodoh.com"/>
      <h1>Hello Selamat pagi, sekarang tanggal {new Date().toLocaleDateString()}</h1>
      <input onChange={handleChange} placeholder="cari mobil"/>
      <button onClick= {handleSearch}>Cari</button>
      <div>
        <h1>Daftar Mobil</h1>
        {filteredCars.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
      </div>
      <Footer/>
    </div>
  );
}


export default App;
