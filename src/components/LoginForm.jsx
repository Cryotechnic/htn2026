import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Import the CSS file

export function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      username === import.meta.env.VITE_USERNAME &&
      password === import.meta.env.VITE_PASSWORD
    ) {
      onLogin(true);
      formRef.current.reset();
      console.log("Logged in");
      navigate("/");
    } else {
      onLogin(false);
      console.log("Invalid credentials");
    }
  };

  return (
    <form ref={formRef} className="login-form">
      <div>
        <h1 className="h3">Login to your account</h1>
      </div>

      <div>
        <div>
          <label>Username</label>
          <input
            id="email"
            type="text"
            className="form-control"
            placeholder="Username"
            required
            value={username}
            onChange={handleUsername}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={handlePassword}
          />
        </div>

        <button className="mt-3" type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </form>
  );
}
