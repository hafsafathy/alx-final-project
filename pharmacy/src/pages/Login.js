import React, { Fragment, useState  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Login() {
  
  const [email, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', { email, password })
      .then(response => {
        setMessage('Login successful');
        // Handle successful login, e.g., redirect to dashboard
      })
      .catch(error => {
        setMessage('Login failed');
        console.error('Login error:', error); // Logging error for debugging
      });
  };
  return (
    <Fragment>
      <div className="breadcrumbs">
		<div className="container" >
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s" style={{backgroundColor: "white"}}>
				<li>
          <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        </li>
				<li className="active">Login</li>
			</ol>
		</div>
	</div>
        <div className="login">
        <div className="container">
          <h3 className="animated wow zoomIn" data-wow-delay=".5s">Login Form</h3>
          <p className="est animated wow zoomIn" data-wow-delay=".5s">welcome ^_^</p>
          <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email Address" required=" " value={email} onChange={(e) => setUseremail(e.target.value)} />
              <input type="password" placeholder="Password" required=" " value={password} onChange={(e) => setPassword(e.target.value)}/>
               <div className="forgot">
                <a href="/">Forgot Password?</a>
              </div> 
              <input type="submit" value="Login"/>
            </form>
             <p>{message}</p>
          </div>
          <h4 className="animated wow slideInUp" data-wow-delay=".5s">If You Don't Have Account</h4>
          <p className="animated wow slideInUp" data-wow-delay=".5s"><a href="/Register">Register Here</a></p>
        </div>
      </div>
    {/* //login */}
    </Fragment>
  )
}

export default Login;