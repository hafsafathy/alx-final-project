import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordConfirmation, setPasswordConfirmation] = useState('');
  const [Subscribe, setSubscribe] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (Password !== PasswordConfirmation) {
      setMessage('Passwords do not match');
      return;
    }

    // Prepare data
    const data = {
      FirstName,
      LastName,
      BirthDate,
      Email,
      Password,
      Subscribe
    };

    // Send data to the backend
    axios.post('http://localhost:5000/register', data)
      .then(response => {
        setMessage('Registration successful');
        // Redirect or handle successful registration
      })
      .catch(error => {
        setMessage('Registration failed');
        console.error('Registration error:', error); // Logging error for debugging
      });
  };

  return (
    <Fragment>
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s" style={{ backgroundColor: "white" }}>
            <li>
              <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
            </li>
            <li className="active">Register</li>
          </ol>
        </div>
      </div>
      <div className="register">
        <div className="container">
          <h3 className="animated wow zoomIn" data-wow-delay=".5s">Register Here</h3>
          <p className="est animated wow zoomIn" data-wow-delay=".5s">We are happy to have you join us.</p>
          <div className="login-form-grids">
            <h5 className="animated wow slideInUp" data-wow-delay=".5s">Personal Information</h5>
            <form className="animated wow slideInUp" data-wow-delay=".5s" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                required
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="date">Birth Date</label>
              <input
                type="date"
                value={BirthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <h6 className="animated wow slideInUp" data-wow-delay=".5s">Login Information</h6>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password Confirmation"
                required
                value={PasswordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={Subscribe}
                      onChange={() => setSubscribe(!Subscribe)}
                    />
                    <i> </i>Subscribe to News
                  </label>
                </div>
              </div>
              <input type="submit" value="Register" />
            </form>
            <p>{message}</p>
          </div>
          <div className="register-home animated wow slideInUp" data-wow-delay=".5s">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
