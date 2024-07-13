import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <Fragment>
        <div className="breadcrumbs">
		<div className="container" >
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s" style={{backgroundColor: "white"}}>
				<li>
          <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        </li>
				<li className="active">Contact Us</li>
			</ol>
		</div>
	</div>
  <div className="mail animated wow zoomIn" data-wow-delay=".5s">
        <div className="container">
          <h3>Contact Us</h3>
          <p className="est">We Happy And Interest</p>
          <div className="mail-grids">
            <div className="col-md-8 mail-grid-left animated wow slideInLeft" data-wow-delay=".5s">
              <form>
                <input type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required=""/>
                <input type="email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
                <input type="text" value="Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}" required=""/>
                <textarea type="text"  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
                <input type="submit" value="Submit Now" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221162.3958679904!2d31.519938905468752!3d29.98912979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846f9199c3ed3%3A0xd01e176f9ac6259c!2z2LXZitiv2YTZitin2Kog2K_ZiNin2KE!5e0!3m2!1sar!2ssa!4v1720367637878!5m2!1sar!2ssa">
          </iframe>

        </div>
      </div>
    </Fragment>
  )
}

export default ContactUs;