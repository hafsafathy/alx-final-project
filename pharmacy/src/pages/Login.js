import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
            <form>
              <input type="email" placeholder="Email Address" required=" " />
              <input type="password" placeholder="Password" required=" " />
               <div className="forgot">
                <a href="/">Forgot Password?</a>
              </div> 
              <input type="submit" value="Login"/>
            </form>
          </div>
          <h4 className="animated wow slideInUp" data-wow-delay=".5s">If You Don't Have Account</h4>
          <p className="animated wow slideInUp" data-wow-delay=".5s"><a href="register.html">Register Here</a></p>
        </div>
      </div>
    {/* //login */}
    </Fragment>
  )
}

export default Login;