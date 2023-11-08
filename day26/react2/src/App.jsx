
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Jumbotron from "./components/Jumbotron";

const App = () => {
  const [isSingle, setisSingle] = useState(true);
  const [isEating, setisEating] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data] = useState([
    {
      title: "title 1",
      description: "lorem ipsum",
    },
    {
      title: "title 2",
      description: "lorem ipsum",
    },
    {
      title: "title 3",
      description: "lorem ipsum",
    },
  ]);
  const handleStatus = () => {
    setisSingle(!isSingle);
  };
  const handleEating = () => {
    setisEating(!isEating);
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Jumbotron />
      <h1>App</h1>
      {isSingle ? <p>Status : Saya Single</p> : <p>Status : Sudah Menikah</p>}
      <button onClick={handleStatus}>change status</button>
      {isEating ? <p>Eating : Iya</p> : <p>Eating : Tidak</p>}
      <button onClick={handleEating}>change eating</button>
      <button onClick={handleSidebar}> {showSidebar ? "✕" : "|||"}</button>
      {showSidebar && <Sidebar />}
      {data.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export default App;
