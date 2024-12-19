import React from "react";
import "./signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="form-section">
                <h1>Create a free account</h1>
                    <form>
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your email address" />

                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />

                        <label>Repeat Password</label>
                        <input type="password" placeholder="Enter your password again" />

                        <button type="submit">Sign up</button>
                    </form>

                    <p>Already have an account? <a href="./login.js">Sign In</a></p>
            </div>

            <div className="info-section">
                <div className="logo-circle"></div>
                <h2>LOGO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    );
};

export default Signup;