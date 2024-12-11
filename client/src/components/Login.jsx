import { useState } from "react";
import axios from "axios";

function Login() {

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      alert(`Token: ${res.data.token}`);
      console.log('Login Success')
    } catch (err) {
      alert(err.response.data.error);
      console.log('Login failed')
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
 
  );
}

export default Login;