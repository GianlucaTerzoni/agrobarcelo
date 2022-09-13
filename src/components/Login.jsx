import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Login.css";

export const Login = () => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "useradmin",
            password: "1234"
        },
    ];

    const errors = {
        uname: "Usuario Incorrecto",
        pass: "Contraseña Incorrecta"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Usuario </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Contraseña </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                <button onClick={handleSubmit}>Ingresar</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="login-form">
                <div className="title">Ingresar</div>
                {isSubmitted ? <div>Usuario ingresado correctamente</div> : renderForm}
            </div>
        </div>
    );
}
