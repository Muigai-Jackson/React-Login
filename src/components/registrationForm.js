import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Header from './header';
import './styles.css';
import { database } from '../firebase';
import { ref, push, child, update } from "firebase/database";
import profile from "./images/login.png";
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        let obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates)

    }
    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/login")
    }
    return (
        <div>
            <Header />
            <div className="form">
                <div className="form-body">
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />
                        </div>
                    </div>
                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input type="text" name="" id="lastName" value={lastName} onChange={(e) => handleInputChange(e)} placeholder="LastName" />
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                    </div>
                </div>

                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" className='button'>Register</button>
                    <button onClick={loginPage} type="submit" className='button'>Login</button>
                </div>
            </div>

        </div>
    )
}

export default RegistrationForm;