import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="form-section">
                <h1>Welcome Back!</h1>
                <h2>Log In to your account</h2>

                <form>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email address"/>

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"/>

                    <button type="submit">Sign In</button>
                </form>
                <p><a href="">Forgot Password?</a></p>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
            <div className="info-section">
                <div className="logo-circle"></div>
                <h2>LOGO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    );
};

export default Login;