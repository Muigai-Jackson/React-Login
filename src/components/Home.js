import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Home Page</h1>
            <p>Go to the Loginpage by using one of the following:</p>
            <hr />

            {/* Button */}
            <p>
                <button onClick={() => navigate("./login")}>Go to Login</button>
            </p>

            {/* Checkbox */}
            <p>
                <input
                    type="checkbox"
                    onChange={() => navigate("./login")}
                ></input>
                <span>Check this checkbox to go to the Login page</span>
            </p>

            {/* Text field */}
            <p>
                <input
                    type="text"
                    onChange={(e) => {
                        if (e.target.value === "Login") {
                            navigate("./login");
                        }
                    }}
                    placeholder="Enter 'Login' to navigate"
                ></input>
            </p>
        </>
    );
};

export default Home;