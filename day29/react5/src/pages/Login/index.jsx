import Navbar from "../../Navbar";
const Login = () => {
  return (
    <div>
      <Navbar />
      <h1>Halaman login</h1>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
      <button>Submit</button>
    </div>
  );
};

export default Login;
