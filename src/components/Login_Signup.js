import React, { useState } from 'react';
import './Login_Signup.css'; // Import your CSS file here

const AuthComponent = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };
  
  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };
  

  return (
    <div className='auth-component'>
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container1 sign-up-container">
        <form action="#" className="login-form">
          <h1 className="head1">Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="span-text">or use your email for registration</span>
          <input type="text" placeholder="Name" className="login-input" />
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-btn">Sign Up</button>
        </form>
      </div>

      <div className="form-container1 sign-in-container">
        <form action="#" className="login-form">
          <h1 className="head1">Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="span-text">or use your account</span>
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <a href="#">Forgot your password?</a>
          <button className="login-btn">Sign In</button>
        </form>
      </div>

      <div className="overlay-container1">
        <div className="overlay1">
          <div className="overlay-panel1 overlay-left">
            <h1 className="head1">Welcome Back!</h1>
            <p className="para">To keep connected with us please login with your personal info</p>
            <button className="ghost login-btn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel1 overlay-right">
            <h1 className="head1">Hello, Friend!</h1>
            <p className="para">Enter your personal details and start journey with us</p>
            <button className="ghost login-btn" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default AuthComponent;
