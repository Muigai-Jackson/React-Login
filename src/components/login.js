import React from "react";
import './styles.css';
import profile from "./images/login.png";
import userimg from "./images/email.png";
import passimage from "./images/lock.png";

function LoginForm() {
    return (
        <div className="form-login">
            <div className="form-body">
                <div className="imgs">
                    <div className="container-image">
                        <img src={profile} alt="profile" className="profile" />
                    </div>
                </div>
                <h1 className="title">Sign In</h1>
                <div className="input-container">
                    <img src={userimg} alt="email" className='user-img' />
                    <input className="email" placeholder="Email Address" type="text" name="uname" id="email" required />
                </div>
                <div className="input-container">
                    <img src={passimage} alt="pass" className='pass-img' />
                    <input className="emails" placeholder="Password" type="password" name="uname" id="email" required />
                </div>
            </div>
            <div class="footer">
                <button className='btn-login' type="submit">Login</button>
                <button type="submit" className='button'>Register</button>
            </div>
        </div>
    )
};

export default LoginForm;