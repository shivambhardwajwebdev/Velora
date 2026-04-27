// VerifyNotice.jsx
import Navbar from "../components/Navbar";
const VerifyNotice = () => {
  return (
    <>
    <Navbar/>
    <div className="authContainer">
      <div className="auth-card">
        <h2>Verify Your Email</h2>
        <p>
          We’ve sent a verification link to your email.
        </p>
        <p>
          👉 Check your Inbox or Spam/Junk folder
        </p>

      </div>
    </div>
    </>
  );
};

export default VerifyNotice;