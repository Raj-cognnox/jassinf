import React from 'react'
import logo from './logo.png';

export const Header = () => {
    return (
        <div>
            <header className="main-header header-style-one">
                <div className="header-upper">
                    <div className="inner-container clearfix">
                        <div className="logo-box">
                            <div className="logo">
                                <a href="/" title="Linoor - DIgital Agency HTML Template">
                                    <img src={logo} id="thm-logo" alt="Linoor - DIgital Agency HTML Template"
                                        title="Linoor - DIgital Agency HTML Template"></img></a></div>
                        </div>
                        <div className="nav-outer clearfix">

                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu-2"></span><span
                                className="txt">Menu</span></div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li><a href="/">Home</a>

                                        </li>
                                        <li>
                                            <a href="#">About Us</a>

                                        </li>

                                        <li className="dropdown"><a href="#">Services</a>
                                            <ul>
                                                <li><a href="#">All Services</a></li>
                                                <li><a href="#">Website Development</a></li>
                                                <li><a href="#">Graphic Designing</a></li>
                                                <li><a href="#">Digital Marketing</a></li>
                                                <li><a href="#">SEO & Content Writting</a></li>
                                                <li><a href="#">App Development</a></li>
                                                <li><a href="#">UI/UX Designing</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Portfolio</a>

                                        </li>

                                        <li><a href="#">Blog</a>

                                        </li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="other-links clearfix">


                            <div className="link-box">
                                <div className="call-us">
                                    <a className="link" href="tel:9780080903">
                                        <span className="icon"></span>
                                        <span className="sub-text">Call Anytime</span>
                                        <span className="number">9780080903</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </header>

            <div className="side-menu__block">


                <div className="side-menu__block-overlay custom-cursor__overlay">
                    <div className="cursor"></div>
                    <div className="cursor-follower"></div>
                </div>
                <div className="side-menu__block-inner ">
                    <div className="side-menu__top justify-content-end">

                        <a href="#" className="side-menu__toggler side-menu__close-btn"><img src={logo}
                            alt=""></img></a>
                    </div>


                    <nav className="mobile-nav__container">

                    </nav>
                    <div className="side-menu__sep"></div>

                </div>
            </div>

        </div>
    )
}
