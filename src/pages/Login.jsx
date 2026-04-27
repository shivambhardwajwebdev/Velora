import { useState } from "react";
import { loginUser, googleLogin } from "../services/authService";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Auth.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleAuthAction = async (actionFn) => {
    try {
      await actionFn();
      navigate(from, { replace: true });
    } catch (err) {
      alert(err.message);
    }
  };
  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);

      if (!res.user.emailVerified) {
        alert("Please verify your email first.");
        return;
      }

      navigate(from, { replace: true });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="authContainer">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button className="auth-btn main" onClick={handleLogin}>Login
        </button>

        <div className="divider"><span>OR</span></div>

        <button className="auth-btn google" onClick={() => handleAuthAction(googleLogin)}><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google" className="google_icon" width={"30px"} />
          Continue with Google
        </button>

        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;