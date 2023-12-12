import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const Login = () => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  // Handle form input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      email,
      password
    };
    window.contloWebSDK.userLogin(email, phoneNumber, { "Name" : "I dont know"})

    console.log('Login Data:', loginData);
    // Here you can also send loginData to a backend server or perform other actions
  }

  return (
      <>
        <Navbar />
        <div className="container my-3 py-3">
          <h1 className="text-center">Login</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="Email">Email address</label>
                  <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={handleEmailChange}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="Password">Phone</label>
                  <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                  />
                </div>
                <div className="my-3">
                  <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Login;
