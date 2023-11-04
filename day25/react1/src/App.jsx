// function App() {
//   return(
//     <div>
//       <h1>test</h1>
//     </div>
//   )
// }

// export default App
import Navbar from "./components/Navbar/index.jsx"
import Footer from "./components/Footer/index.jsx";
const App = () => {
  // let name = "Mufty"
  // let isSingle = true;
  // const renderStatus = (param) => {
  //   // if (param) {
  //   //   return <p>Status : Saya Single</p>
  //   // } else {
  //   //   return <p>Status : Sudah Menikah</p>
  //   // }

  //    return param ?  <p>Status : Saya Single</p> : <p>Status : Sudah Menikah</p>;
  // }
  return (
    <div>
      {/* <h1>Hai {name}</h1> */}
      {/* <p>Status: {status ? "Sudah Menikah" : "Belum Menikah"}</p> */}
      {/* {isSingle ? <p>Status : Saya Single</p> : <p>Status : Sudah Menikah</p>}
     {renderStatus(true)} */}
     <Navbar/>
     <Footer/>
    </div>
    
  )
}
export default App;