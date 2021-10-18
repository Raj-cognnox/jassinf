import React from 'react';
import SliderFist from './images/main-slider/SliderFist.jpg';
import Sliderscend from './images/main-slider/2.jpg';


const Main = () => {
    return (
        <div>
               <section className="banner-section banner-one">
             <div className="banner-carousel owl-theme owl-carousel">
              
                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: `url(${SliderFist})` }}></div>
                    <div className="left-top-line"></div>
                    <div className="right-bottom-curve"></div>
                    <div className="right-top-curve"></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="content">
                                <div className="inner">
                                    <div className="sub-title">welcome to JassInfoTech</div>
                                    <h1>Smart Web <br/>Design Agency</h1>
                                    <div className="link-box">
                                        <a className="theme-btn btn-style-one" href="#">
                                            <i className="btn-curve"></i>
                                            <span className="btn-title">Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: `url(${Sliderscend})` }}></div>
                    <div className="left-top-line"></div>
                    <div className="right-bottom-curve"></div>
                    <div className="right-top-curve"></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="content">
                                <div className="inner">
                                    <div className="sub-title">welcome to Jass Info Tech</div>
                                    <h1>Smart Web <br/>Design Agency</h1>
                                    <div className="link-box">
                                        <a className="theme-btn btn-style-one" href="#">
                                            <i className="btn-curve"></i>
                                            <span className="btn-title">Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    
        <section className="services-section">
            <div className="auto-container">
                <div className="row clearfix">
              
                    <div className="title-block col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="sec-title">
                                <h2>We Shape the Perfect <br/>Solutions<span className="dot">.</span></h2>
                                <div className="lower-text">We are committed to providing our customers with exceptional
                                    service while offering our employees the best training.</div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="bottom-curve"></div>
                            <div className="icon-box"><span className="flaticon-responsive"></span></div>
                            <h6><a href="#">Website <br/>Development</a></h6>
                        </div>
                    </div>
                  
                    <div className="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
                        data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="bottom-curve"></div>
                            <div className="icon-box"><span className="flaticon-computer"></span></div>
                            <h6><a href="graphic-designing.html">graphic <br/>designing</a></h6>
                        </div>
                    </div>
               
                    <div className="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="bottom-curve"></div>
                            <div className="icon-box"><span className="flaticon-digital-marketing"></span></div>
                            <h6><a href="digital-marketing.html">digital <br/>marketing</a></h6>
                        </div>
                    </div>
                
                    <div className="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
                        data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="bottom-curve"></div>
                            <div className="icon-box"><span className="flaticon-development"></span></div>
                            <h6><a href="seo.html">seo  content <br/>writing</a></h6>
                        </div>
                    </div>
                   
                    <div className="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
                        data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="bottom-curve"></div>
                            <div className="icon-box"><span className="flaticon-app-development"></span></div>
                            <h6><a href="app-development.html">App <br/>Development</a></h6>
                        </div>
                    </div>
              
                    <div className="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
                        data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="bottom-curve"></div>
                            <div className="icon-box"><span className="flaticon-ui"></span></div>
                            <h6><a href="ui-designing.html">Ui/UX <br/>designing</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-section">
            <div className="auto-container">
                <div className="row clearfix">
                
                    <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="image-block wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img
                                    src="images/resource/featured-image-1.jpg" alt=""></img></div>
                            <div className="image-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms"><img
                                    src="images/resource/featured-image-2.jpg" alt=""></img></div>
                        </div>
                    </div>
                  
                    <div className="text-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="sec-title">
                                <h2>We’re the best agency <br/>in downtown<span className="dot">.</span></h2>
                                <div className="lower-text">We are committed to providing our customers with exceptional
                                    service while offering our employees the best training.</div>
                            </div>
                            <div className="text">
                                <p>Lorem Ipsum is simply dummy text of free available in market the printing and
                                    typesetting industry has been the industry's standard dummy text ever.</p>
                            </div>
                            <div className="text clearfix">
                                <ul>
                                    <li>Suspe ndisse suscipit sagittis leo.</li>
                                    <li>Entum estibulum dignissim posuere.</li>
                                    <li>If you are going to use a passage.</li>
                                </ul>
                                <div className="since"><span className="txt">Since <br/>2020</span></div>
                            </div>
                            <div className="link-box">
                                <a className="theme-btn btn-style-one" href="about.html">
                                    <i className="btn-curve"></i>
                                    <span className="btn-title">Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="live-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Experience us live<span className="dot">.</span></h2>
                </div>
                <div className="main-image-box">
                    {/* <div className="image-layer" style="background-image: url(images/resource/featured-image-3.jpg);"></div> */}
                    <div className="inner clearfix">
                        <div className="round-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="round-inner">
                                <div className="vid-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="lightbox-image">
                                        <div className="icon"><span className="flaticon-play-button-1"></span><i
                                                className="ripple"></i></div>
                                    </a>
                                </div>
                                <div className="title">
                                    <h3>agency that gets <br/>excited about</h3>
                                </div>
                                <div className="more-link"><a href="about.html">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="we-do-section">
            <div className="auto-container">
                <div className="row clearfix">
                 
                    <div className="left-col col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="sec-title">
                                <h2>We do more then ever <br/>platforms<span className="dot">.</span></h2>
                            </div>
                            <div className="featured-block clearfix">
                                <div className="image"><img src="images/resource/featured-image-4.jpg" alt=""></img></div>
                                <div className="text">There are many variatns of passages the majority have suffered
                                    alteration in some foor randomised words believable.</div>
                            </div>
                            <div className="progress-box">
                                <div className="bar-title">Digital marketing</div>
                                <div className="bar">
                                    <div className="bar-inner count-bar" data-percent="70%">
                                        <div className="count-box">
                                            <span className="count-text" data-stop="70" data-speed="1500">0</span>%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="right-col col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="faq-box">
                                <ul className="accordion-box clearfix">
                                
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active"><span className="count">1.</span> We help to create
                                            visual strategies</div>
                                        <div className="acc-content current">
                                            <div className="content">
                                                <div className="text">There are many variations of passages the majority
                                                    have suffered alteration in some fo injected humour, or randomised
                                                    words believable.</div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">2.</span> Motion Graphics & Animations
                                        </div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">There are many variations of passages the majority
                                                    have suffered alteration in some fo injected humour, or randomised
                                                    words believable.</div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">3.</span> We help to achieve mutual
                                            goals</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">There are many variations of passages the majority
                                                    have suffered alteration in some fo injected humour, or randomised
                                                    words believable.</div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="gallery-section">
            <div className="auto-container">
               
                <div className="mixitup-gallery">
                    <div className="upper-row clearfix">
                        <div className="sec-title float-lg-none text-center">
                            <h2>work showcase<span className="dot">.</span></h2>
                            <p>Coming soon...</p>
                        </div>
                     
                    </div>
                   <div className="filter-list row">
                         Gallery Item 
                        <div className="gallery-item mix all web-design col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image"><img src="images/gallery/1.jpg" alt=""></img></figure>
                                <a href="images/gallery/1.jpg" className="lightbox-image overlay-box"
                                    data-fancybox="gallery"></a>
                                <div className="cap-box">
                                    <div className="cap-inner">
                                        <div className="cat"><span>Graphic</span></div>
                                        <div className="title">
                                            <h5><a href="portfolio-single.html">Fimlor Experience</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         Gallery Item 
                        <div className="gallery-item mix all photography web-design col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image"><img src="images/gallery/2.jpg" alt=""></img></figure>
                                <a href="images/gallery/2.jpg" className="lightbox-image overlay-box"
                                    data-fancybox="gallery"></a>
                                <div className="cap-box">
                                    <div className="cap-inner">
                                        <div className="cat"><span>Graphic</span></div>
                                        <div className="title">
                                            <h5><a href="portfolio-single.html">Fimlor Experience</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         Gallery Item 
                        <div className="gallery-item mix all branding web-design col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image"><img src="images/gallery/3.jpg" alt=""></img></figure>
                                <a href="images/gallery/3.jpg" className="lightbox-image overlay-box"
                                    data-fancybox="gallery"></a>
                                <div className="cap-box">
                                    <div className="cap-inner">
                                        <div className="cat"><span>Graphic</span></div>
                                        <div className="title">
                                            <h5><a href="portfolio-single.html">Fimlor Experience</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         Gallery Item 
                        <div className="gallery-item mix all branding illustration col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image"><img src="images/gallery/4.jpg" alt=""></img></figure>
                                <a href="images/gallery/4.jpg" className="lightbox-image overlay-box"
                                    data-fancybox="gallery"></a>
                                <div className="cap-box">
                                    <div className="cap-inner">
                                        <div className="cat"><span>Graphic</span></div>
                                        <div className="title">
                                            <h5><a href="portfolio-single.html">Fimlor Experience</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         Gallery Item 
                        <div
                            className="gallery-item mix all branding illustration photography web-design col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image"><img src="images/gallery/5.jpg" alt=""></img></figure>
                                <a href="images/gallery/5.jpg" className="lightbox-image overlay-box"
                                    data-fancybox="gallery"></a>
                                <div className="cap-box">
                                    <div className="cap-inner">
                                        <div className="cat"><span>Graphic</span></div>
                                        <div className="title">
                                            <h5><a href="portfolio-single.html">Fimlor Experience</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         Gallery Item 
                        <div className="gallery-item mix all illustration photography col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image"><img src="images/gallery/6.jpg" alt=""></img></figure>
                                <a href="images/gallery/6.jpg" className="lightbox-image overlay-box"
                                    data-fancybox="gallery"></a>
                                <div className="cap-box">
                                    <div className="cap-inner">
                                        <div className="cat"><span>Graphic</span></div>
                                        <div className="title">
                                            <h5><a href="portfolio-single.html">Fimlor Experience</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

      
        <section className="facts-section jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% 80%">
           
            <img src="images/background/image-1.jpg" alt="" className="jarallax-img"></img>
            <div className="auto-container">
                <div className="inner-container">

                    <div className="fact-counter">
                        <div className="row clearfix">

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner">
                                    <div className="content">
                                        <div className="count-outer count-box">
                                            <span className="count-text" data-speed="4000" data-stop="8705">0</span>
                                        </div>
                                        <div className="counter-title">Projects Completed</div>
                                    </div>
                                </div>
                            </div>

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner">
                                    <div className="content">
                                        <div className="count-outer count-box alternate">
                                            <span className="count-text" data-speed="3000" data-stop="480">0</span>
                                        </div>
                                        <div className="counter-title">Active clients</div>
                                    </div>
                                </div>
                            </div>

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner">
                                    <div className="content">
                                        <div className="count-outer count-box">
                                            <span className="count-text" data-speed="3000" data-stop="626">0</span>
                                        </div>
                                        <div className="counter-title">cups of coffee</div>
                                    </div>
                                </div>
                            </div>

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner">
                                    <div className="content">
                                        <div className="count-outer count-box">
                                            <span className="count-text" data-speed="4000" data-stop="9704">0</span>
                                        </div>
                                        <div className="counter-title">happy clients</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="trusted-section">
            <div className="auto-container">
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="left-col col-xl-5 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="col-header">
                                    <div className="header-inner">
                                        <span>We’re Committed To Deliver High Quality Projects .</span>
                                    </div>
                                </div>
                                <div className="features">
                                    <div className="feature">
                                        <div className="count"><span>01</span></div>
                                        <h5>TOTAL DESIGN FREEDOM FOR EVERYONE</h5>
                                        <div className="sub-text">core features</div>
                                    </div>
                                    <div className="feature">
                                        <div className="count"><span>02</span></div>
                                        <h5>BASIC RULES OF RUNNING WEB AGENCY</h5>
                                        <div className="sub-text">core features</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-col col-xl-7 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <h2>We’re trusted by more <br/>than 6260 clients<span className="dot">.</span></h2>
                                    <div className="lower-text">There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some form, simply free
                                        text by injected humour, or randomised.</div>
                                </div>
                                <div className="featured-block-two clearfix">
                                    <div className="image"><img src="images/resource/featured-image-5.jpg" alt=""></img></div>
                                    <div className="text">
                                        <ul>
                                            <li> Suspe ndisse sagittis leo.</li>
                                            <li>Entum estibulum is posuere.</li>
                                            <li>If you are going to use passage.</li>
                                            <li>Lorem Ipsum on the tend to repeat.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="parallax-section jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% 80%">
            <img src="images/background/image-2.jpg" alt="" className="jarallax-img"></img>
            <div className="auto-container">
                <div className="content-box">
                    <div className="icon-box"><span className="flaticon-app-development"></span></div>
                    <h2>Great things in business are never done by one person. <span>They’re done by a team of
                            people.</span></h2>
                </div>
            </div>
        </section>
     
        <section className="agency-section">
            <div className="auto-container">
                <div className="row clearfix">
               
                    <div className="left-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="sec-title">
                                <h2>Best design Agency <br/>solutions<span className="dot">.</span></h2>
                            </div>

                            <div className="default-tabs tabs-box">

                                <ul className="tab-btns tab-buttons clearfix">
                                    <li data-tab="#tab-1" className="tab-btn active-btn"><span>Our Mission</span></li>
                                    <li data-tab="#tab-2" className="tab-btn"><span>Our Vision</span></li>
                                    <li data-tab="#tab-3" className="tab-btn"><span>Our History</span></li>
                                </ul>

                                <div className="tabs-content">

                                    <div className="tab active-tab" id="tab-1">
                                        <div className="content">
                                            <div className="text">There are many variations of passages of avaialable but
                                                the majority have in some form, by injected humou or words which don't
                                                look even slightly believable. There are many variations of but the
                                                majority have suffered.</div>
                                        </div>
                                    </div>

                                    <div className="tab" id="tab-2">
                                        <div className="content">
                                            <div className="text">There are many variations of passages of avaialable but
                                                the majority have in some form, by injected humou or words which don't
                                                look even slightly believable. There are many variations of but the
                                                majority have suffered.</div>
                                        </div>
                                    </div>

                                    <div className="tab" id="tab-3">
                                        <div className="content">
                                            <div className="text">There are many variations of passages of avaialable but
                                                the majority have in some form, by injected humou or words which don't
                                                look even slightly believable. There are many variations of but the
                                                majority have suffered.</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div className="right-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="text">There are many variations of passages of available but the majority have
                                suffered alteration in some form, by injected humou or randomised words which don't look
                                even slightly believable.</div>
                            <div className="featured-block-two clearfix">
                                <div className="image"><img src="images/resource/featured-image-6.jpg" alt=""></img></div>
                                <div className="text">
                                    <ul>
                                        <li>Nsectetur cing elit.</li>
                                        <li>Suspe ndisse suscipit sagittis leo.</li>
                                        <li>Entum estibulum dignissim posuere.</li>
                                        <li>If you are going to use a passage.</li>
                                        <li>Lorem Ipsum on the tend to repeat.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="news-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Latest news & articles<span className="dot">.</span></h2>
                </div>

                <div className="row clearfix">
                   
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <a href="blog-single.html"><img src="images/resource/news-1.jpg" alt=""></img></a>
                            </div>
                            <div className="lower-box">
                                <div className="post-meta">
                                    <ul className="clearfix">
                                        <li><span className="far fa-clock"></span> 20 Mar</li>
                                        <li><span className="far fa-user-circle"></span> Admin</li>
                                        <li><span className="far fa-comments"></span> 2 Comments</li>
                                    </ul>
                                </div>
                                <h5><a href="blog-single.html">basic rules of running web agency business</a></h5>
                                <div className="text">Lorem ipsum is simply free text used by copytyping refreshing.</div>
                                <div className="link-box"><a className="theme-btn" href="blog-single.html"><span
                                            className="flaticon-next-1"></span></a></div>
                            </div>
                        </div>
                    </div>
                
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <a href="blog-single.html"><img src="images/resource/news-2.jpg" alt=""></img></a>
                            </div>
                            <div className="lower-box">
                                <div className="post-meta">
                                    <ul className="clearfix">
                                        <li><span className="far fa-clock"></span> 20 Mar</li>
                                        <li><span className="far fa-user-circle"></span> Admin</li>
                                        <li><span className="far fa-comments"></span> 2 Comments</li>
                                    </ul>
                                </div>
                                <h5><a href="blog-single.html">Delivering the best digital marketing</a></h5>
                                <div className="text">Lorem ipsum is simply free text used by copytyping refreshing.</div>
                                <div className="link-box"><a className="theme-btn" href="blog-single.html"><span
                                            className="flaticon-next-1"></span></a></div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <a href="blog-single.html"><img src="images/resource/news-3.jpg" alt=""></img></a>
                            </div>
                            <div className="lower-box">
                                <div className="post-meta">
                                    <ul className="clearfix">
                                        <li><span className="far fa-clock"></span> 20 Mar</li>
                                        <li><span className="far fa-user-circle"></span> Admin</li>
                                        <li><span className="far fa-comments"></span> 2 Comments</li>
                                    </ul>
                                </div>
                                <h5><a href="blog-single.html">Introducing the latest linoor features</a></h5>
                                <div className="text">Lorem ipsum is simply free text used by copytyping refreshing.</div>
                                <div className="link-box"><a className="theme-btn" href="blog-single.html"><span
                                            className="flaticon-next-1"></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="call-to-section">
            <div className="auto-container">
                <div className="inner clearfix">
                    <div className="shape-1 wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
                    <div className="shape-2 wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
                    <h2>Let's Get Your Project <br/>Started!</h2>
                    <div className="link-box">
                        <a className="theme-btn btn-style-two" href="about.html">
                            <i className="btn-curve"></i>
                            <span className="btn-title">Contact with us</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Main;
