import React, { useState } from "react";
import "../login/login.css";
import envelope from "../../assets/Envelope.jpg";
import apple from "../../assets/apple.jpg";
import google from "../../assets/google.jpg";
import facebook from "../../assets/facebook.jpg";
import { Link } from "react-router-dom";
function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== "correct") {
      setError("Incorrect password. Please try again.");
    } else {
      setError("");
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login">
      <div className="login_top">
        <div className="login_right">
          <div className="login_img"></div>
          <div className="login_content">
            <h2>
              Hello, great to <br /> see you again!
            </h2>
          </div>
        </div>
        <div className="login_left">
          <h1>Log in to Life</h1>
        </div>
      </div>
      <div className="login_middle">
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="email">E-mail</label>
            <div className="input_container">
              <input type="email" id="email" placeholder="catays@gmail.com" />
              <span className="icon">
                <img src={envelope} alt="envelope" />
              </span>
            </div>
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <div className="input_container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </span>
            </div>
            {/* For redirecting to Register */}
            {error && <div className="error_message">{error}</div>}
          </div>
          <button type="submit" className="login_button">
            Log in
          </button>
          <p className="signup-label">or <Link to="/signup" className="link">Sign up</Link></p>
        </form>
      </div>
      <div className="login_bottom">
        <div className="line">
          <h4>or</h4>
        </div>
        <div className="social_icons">
          <div className="social_icon">
            <img src={google} alt="" />
            <h4>Google</h4>
          </div>
          <div className="social_icon">
            <img src={facebook} alt="" />
            <h4>Facebook</h4>
          </div>
          <div className="social_icon">
            <img src={apple} alt="" />
            <h4>Apple</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
