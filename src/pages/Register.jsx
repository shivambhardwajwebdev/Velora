import { useState } from "react";
import { registerUser, googleLogin } from "../services/authService";
import { createUserProfile } from "../services/userService";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Auth.css";
import Navbar from "../components/Navbar";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const APP_NAME = "Velora";

  // Redirect back to cart if they were redirected here from 'Add to Cart'
  const from = location.state?.from || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await registerUser(email, password);
      await createUserProfile(user, APP_NAME,username);
      alert("Verification email sent. Please verify before login.");
      <h1>Please check the junk folder</h1>
      navigate("/verify");
    } catch (err) {
      alert("Registration Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

const handleGoogleSignUp = async () => {
  try {
    const result = await googleLogin();

    await createUserProfile(
      result.user,
      APP_NAME,
      result.user.displayName || "User"
    );

    navigate(from, { replace: true });
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
    <Navbar/>
    <div className="authContainer">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Happy to have you in VELORA family</p>
        
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Username" 
            required 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password (min 6 chars)" 
            required 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <button type="submit" className="auth-btn main" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="divider"><span>OR</span></div>

        <button className="auth-btn google" onClick={handleGoogleSignUp}><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google" className="google_icon"  width={"30px"}/>
          Sign up with Google
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Register;