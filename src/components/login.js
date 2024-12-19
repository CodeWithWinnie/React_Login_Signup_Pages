import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="form-section">
                <h1>Welcome Back!</h1>
                <p>Log in to your account</p>

                <form>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email address" /> 

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <button type="submit"> Sign In</button>
                </form>
                <p><a href="">Forgot password?</a></p>
                <p>Don't have an account? <a href="./signuo.js">Sign up</a></p>
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