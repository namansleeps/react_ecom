import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    // State variables for each input field
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    // Handle input field changes
    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password
        };
        console.log('User Data:', userData);
        window.contloWebSDK.sendUserData(email, phoneNumber, firstName, lastName, { "subscribed_channels_hardcoded" : "[ 'EMAIL', 'SMS', 'WHATSAPP' ]" }, false)
        // Here you can also send userData to a backend server or perform other actions
    }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="FirstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FirstName"
                                    placeholder="Enter Your First Name"
                                    value={firstName}
                                    onChange={(e) => handleInputChange(e, setFirstName)}
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="LastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="LastName"
                                    placeholder="Enter Your Last Name"
                                    value={lastName}
                                    onChange={(e) => handleInputChange(e, setLastName)}
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => handleInputChange(e, setEmail)}
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="PhoneNumber">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="PhoneNumber"
                                    placeholder="7080834027"
                                    value={phoneNumber}
                                    onChange={(e) => handleInputChange(e, setPhoneNumber)}
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => handleInputChange(e, setPassword)}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;
