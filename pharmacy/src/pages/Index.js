import React, { Fragment } from 'react';

function Index() {
  return (
    <Fragment>
    {/* <!-- //header --> */}
    {/* <!-- banner --> */}
        <div className="banner">
            <div className="container">
                <div className="banner-info animated wow zoomIn" data-wow-delay=".5s">
                    <h3>Welcome</h3>
                    <h4>Up to <span>40 <i>Off/-</i></span></h4>
                    <div className="wmuSlider example1">
                        <div className="wmuSliderWrapper">
                            <article style={{position: "absolute", width: "100%", opacity: "0"}}> 
                                <div className="banner-wrap">
                                    <div className="banner-info1">
                                        <p>Medicines + vitamins</p>
                                    </div>
                                </div>
                            </article>
                            <article style={{position: "absolute", width: "100%", opacity: "0"}}> 
                                <div className="banner-wrap">
                                    <div className="banner-info1">
                                        <p>Mam + Baby products</p>
                                    </div>
                                </div>
                            </article>
                            <article style={{position: "absolute", width: "100%", opacity: "0"}}> 
                                <div className="banner-wrap">
                                    <div className="banner-info1">
                                        <p>Cosmetics</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/*  //banner  */}
    {/*  banner-bottom  */}
        <div className="banner-bottom">
            <div className="container"> 
                <div className="banner-bottom-grids">
                    <div className="banner-bottom-grid-left animated wow slideInLeft" data-wow-delay=".5s">
                        <div className="grid">
                            <figure className="effect-julia">
                                <img src="assets/images/pexels-emmanuel-codden-1502600-17003640.jpg" alt=" " className="img-responsive" />
                                <figcaption>
                                    <h3>ALADWAA<span>Pharmacy</span><i> in online </i></h3>
                                    <div>
                                        <p>Thousands of products at your fingertips</p>
                                    </div>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                    <div className="banner-bottom-grid-left1 animated wow slideInUp" data-wow-delay=".5s">
                        <div className="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
                            <div className="banner-bottom-grid-left-grid1">
                                <img src="assets/images/pexels-karolina-grabowska-5650037.jpg" alt=" " className="img-responsive" />
                            </div>
                            <div className="banner-bottom-grid-left1-pos">
                                <p>Discount 30%</p>
                            </div>
                        </div>
                        <div className="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
                            <div className="banner-bottom-grid-left-grid1">
                                <img src="assets/images/pexels-skitterphoto-419585.jpg" alt=" " className="img-responsive" />
                            </div>
                            <div className="banner-bottom-grid-left1-position">
                                <div className="banner-bottom-grid-left1-pos1">
                                    <p>Don't wait too long, we will get to you as soon as possible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-bottom-grid-right animated wow slideInRight" data-wow-delay=".5s">
                        <div className="banner-bottom-grid-left-grid grid-left-grid1">
                            <div className="banner-bottom-grid-left-grid1">
                                <img src="assets/images/pexels-markus-winkler-1430818-5699982.jpg" alt=" " className="img-responsive" />
                            </div>
                            <div className="grid-left-grid1-pos">
                                <p>Follow us always renewed offers <span>2024</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    {/* <!-- //banner-bottom --> */}
    {/* <!-- collections-bottom --> */}
        <div className="collections-bottom">
            <div className="container">
                <div className="collections-bottom-grids">
                    <div className="collections-bottom-grid animated wow slideInLeft" data-wow-delay=".5s">
                        <h3>36% Offer For <span> Diabetics & high blood pressure</span></h3>
                    </div>
                </div>
                <div className="newsletter animated wow slideInUp" data-wow-delay=".5s">
                    <h3>News</h3>
                    <p>Join us now to get all news and special offers.</p>
                    <form>
                        <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                        <input type="email" value="Enter your email address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter your email address';}" required=""/>
                        <input type="submit" value="Follow Us" />
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Index;