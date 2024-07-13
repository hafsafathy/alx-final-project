import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <Fragment>
      
      <div className="breadcrumbs">
		<div className="container" >
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s" style={{backgroundColor: "white"}}>
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
				<h5 className="animated wow slideInUp" data-wow-delay=".5s">prsonal information</h5>
				<form className="animated wow slideInUp" data-wow-delay=".5s">
					<input type="text" placeholder="First Name" required=" " />
					<input type="text" placeholder="Last Name." required=" " />
					<label for="date">BirthDate</label>
					<input type="date"/>
				</form>
				<div className="register-check-box animated wow slideInUp" data-wow-delay=".5s">
					<div className="check">
						<label className="checkbox"><input type="checkbox" name="checkbox"/><i> </i>Subscribe to News</label>
					</div>
				</div>
				<h6 className="animated wow slideInUp" data-wow-delay=".5s">Login information</h6>
				<form className="animated wow slideInUp" data-wow-delay=".5s">
					<input type="email" placeholder="Email Address" required=" " />
					<input type="password" placeholder="Password" required=" " />
					<input type="password" placeholder="Password Confirmation" required=" "/>
					<div className="register-check-box">
						<div className="check">
							<label className="checkbox"><input type="checkbox" name="checkbox"/><i> </i>I accept the terms and conditions</label>
						</div>
					</div>
					<input type="submit" value="Register"/>
				</form>
			</div>
			<div className="register-home animated wow slideInUp" data-wow-delay=".5s">
        <Link to='/'>Home</Link>
			</div>
		</div>
	</div>
    </Fragment>
  )
}

export default Register;