import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import './Login_Signup.css'; // Import your CSS file here

const AuthComponent = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation for Sign-Up
  const validateSignUp = () => {
    let validationErrors = {};
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Validation for Sign-In
  const validateSignIn = () => {
    let validationErrors = {};
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Sign-Up Service Call
  const handleSignUp = async () => {
    if (!validateSignUp()) return;
    setLoading(true);
    try {
      const response = await axios.post('/api/signup', formData);
      console.log('Sign-Up Success:', response.data);
    } catch (error) {
      console.error('Sign-Up Error:', error.response.data);
      setErrors({ apiError: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  // Sign-In Service Call
  const handleSignIn = async () => {
    debugger
    if (!validateSignIn()) return;
    setLoading(true);
    try {
      const response = await axios.post('/api/login', {
        email: formData.email,
        password: formData.password
      });
      console.log('Sign-In Success:', response.data);
    } catch (error) {
      console.error('Sign-In Error:', error.response.data);
      setErrors({ apiError: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'signup') {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };

  return (
    <div className='auth-component'>
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container1 sign-up-container">
          <form onSubmit={(e) => handleSubmit(e, 'signup')} className="login-form">
            <h1 className="head1">Create Account</h1>
            <div className="social-container">
              <a href="www.facbook.com" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="www.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="span-text">or use your email for registration</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="login-input"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container1 sign-in-container">
          <form onSubmit={(e) => handleSubmit(e, 'signin')} className="login-form">
            <h1 className="head1">Sign in</h1>
            <div className="social-container">
              <a href="www.facebook.com" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="www.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="span-text">or use your account</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <a href="/">Forgot your password?</a>
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
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
      </div>
    </div>
  );
};

export default AuthComponent;
