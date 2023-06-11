import React from "react";
import { Link } from "react-router-dom";
import Gellery from "./Gellery";

const Navbar = () => {
	return (
		<div>
			<nav className='nav_b  bg-black navbar-inverse '>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-2 col-xs-3'>
							<div
								className='b-nav__logo wow slideInLeft'
								data-wow-delay='0.3s'
								// style={{ marginLeft: "-220px" }}
							>
								<img src='images/logo/logo-1.png' />
							</div>
						</div>
						<div className='col-sm-2 visible-xs'>
							<div className='b-topBarsocial-wrapper none'>
								<div className='b-topbar-social'>
									<a href='#'>
										<span className='fa fa-facebook-square'></span>
									</a>

									<a href='#'>
										<span className='fa fa-instagram'></span>
									</a>
									<a href='#'>
										<span className='fa fa-youtube-square'></span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-8'>
							<div
								className='b-nav__list wow slideInRight'
								data-wow-delay='0.3s'>
								<div className='navbar-header'>
									<button
										type='button'
										className='navbar-toggle'
										style={{ marginLeft: "220px" }}
										data-toggle='collapse'
										data-target='#nav'>
										<span className='sr-only'>Toggle navigation</span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
									</button>
								</div>
								<div
									className='collapse navbar-collapse navbar-main-slide'
									id='nav'>
									<ul className='navbar-nav-menu'>
										<li>
											<Link to='/' variant='body2'>
												Home
											</Link>
										</li>
										<li>
											<Link to='/about'>ABOUT US</Link>
										</li>
										<li>
											<Link to='/salecar'>SELL A CAR</Link>
										</li>
										<li>
											<Link to='/buycar'>BUY CAR</Link>
										</li>
										<li>
											<Link to='/detailsdata'>Gellery</Link>
										</li>

										<li>
											<Link to='/contact'>CONTACT US</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-sm-2 hidden-xs'>
							<div className='b-topBarsocial-wrapper'>
								<div className='b-topbar-social'>
									<a href='https://www.facebook.com/profile.php?id=100077481055938'>
										<span className='fa fa-facebook-square'></span>
									</a>

									<a href='https://www.instagram.com/sushilcarbazzar/'>
										<span className='fa fa-instagram'></span>
									</a>
									<a href='https://www.youtube.com/@sushilcarbazzar5502'>
										<span className='fa fa-youtube-square'></span>
									</a>

									<Link
										to='/notification'
										style={{ marginTop: "15px" }}
										href='Notification.html'
										class=' fa fa-bell'>
										<span
											style={{ backgroundColor: "brown" }}
											class=' bg-danger position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger '>
											99+
										</span>
									</Link>

									{/* <IconButton>
                            <Badge badgeContent={100} color='secondary'>
                                <MailIcon />
                            </Badge>
                        </IconButton> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
