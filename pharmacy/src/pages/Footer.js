import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Fragment>
        {/* <!-- footer --> */}
    <div className="footer">
        <div className="container">
            <div className="footer-grids">
                <div className="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".5s">
                    <h3 id="about">About Us</h3>
                    <p>welcome.<span>Al Dawaa Pharmacies is one of the leading pharmacies chains in Egypt<br/> with a ,
                        long and ancient history that started in 1959 AD in Cairo,<br/>
                        then moved to Giza, Alexandria, Tanta, Zagazig, and soon to other cities.</span></p>
                </div>
                <div className="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".6s">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>main pranch <span>cairo.</span></li>
                        <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">hafsafathy020@gmail.com</a></li>
                        <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>01064212665</li>
                    </ul>
                </div>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="footer-logo animated wow slideInUp" data-wow-delay=".5s">
                <h2>
                    <Link to="/">ALDAWAA <span>Pharmacy</span></Link>
                </h2>
            </div>
            <div className="copy-right animated wow slideInUp" data-wow-delay=".5s">
                <p>&copy 2024 ALADWAA. All rights reserved | Desig By Hafsa</p>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer;