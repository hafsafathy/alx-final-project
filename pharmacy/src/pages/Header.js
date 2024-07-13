import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';


function Header({ itemList = [], setItemList }) { 
    const [cartActive, setCartActive] = React.useState(false);  // Default itemList to an empty array
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="header-grid">
            <div className="header-grid-left animated wow slideInLeft" data-wow-delay=".5s">
              <ul>
                <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">hafsafathy020@gmail.com</a></li>
                <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>01064212665</li>
                <li><i className="glyphicon glyphicon-log-in" aria-hidden="true"></i><Link to="/Login">Login</Link></li>
                <li><i className="glyphicon glyphicon-book" aria-hidden="true"></i><Link to="/Register">Register</Link></li>
              </ul>
            </div>
            <div className="header-grid-right animated wow slideInRight" data-wow-delay=".5s">
              <ul className="social-icons">
                <li><Link className='facebook'/></li>
                <li><Link className='twitter'/></li>
                <li><Link className='g'/></li>
                <li><Link className='instagram'/></li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="logo-nav">
            <div className="logo-nav-left animated wow zoomIn" data-wow-delay=".5s">
              <h1>
                <Link to="/">
                  ALDAWAA<span>Pharmacy</span>
                </Link>
              </h1>
            </div>
            <div className="logo-nav-left1">
              <nav className="navbar navbar-default">
                <div className="navbar-header nav_2">
                  <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div> 
                <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                  <ul className="nav ">
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>  
                    <li className="dropdown">
                      <a href="Products"  data-toggle="dropdown">Products <b className="caret"></b></a>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="row">
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Medicine</h6>
                              <li>
                                <Link to="/Products#ME">Medicine</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Vitamins</h6>
                              <li>
                                <Link to="/Products">Vitamins</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Mam&Baby</h6>
                              <li><Link to="/Products">Mam&Baby</Link></li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Beauty</h6>
                              <li><Link to="/Products">Beauty</Link></li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/Footer#about">About Us</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="logo-nav-right">
              <div id="cart-icon" onClick={() => setCartActive(true)}>
                <ion-icon name="cart" size='large'></ion-icon> ({itemList.length})
              </div>
              <ShoppingCart
                cartActive={cartActive}
                setCartActive={setCartActive}
                itemList={itemList}
                setItemList={setItemList}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;

