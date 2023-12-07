import { useState } from "react";
import Navbar from "../../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    setError("");
    setSuccess("");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
    setSuccess("");
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const bodyPayload = {
      username: username,
      password: password,
    };
    axios
      .post("https://api.mudoapi.tech/login", bodyPayload)
      .then((respon) => {
        console.log(respon.data);
        const token = respon.data.data.token;
        localStorage.setItem("accessToken", token);
        setSuccess(respon.data.message);
        setLoading(false);

        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <Navbar />
      <h1>Halaman login</h1>
      <div>
        <label>Username</label>
        <input onChange={onChangeUsername} />
      </div>
      <div>
        <label>Password</label>
        <input onChange={onChangePassword} />
      </div>

      <button disabled={loading ? true : false} onClick={onSubmit}>
        {loading ? "Loading..." : "Submit"}
      </button>
      {error.length ? <h1>{error}</h1> : null}
      {success.length ? <h1>{success}</h1> : null}
    </div>
  );
};

export default Login;
