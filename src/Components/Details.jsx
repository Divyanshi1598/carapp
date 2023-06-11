import React, { useState } from "react";
import "./detail.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 3 },
];

function Details() {
	// const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7]);

	const data = [
		{
			id: 1,
			img: "images/car-images/car_derail/merc-1.jpg",
		},
		{
			id: 2,
			img: "images/car-images/car_derail/merc-2.jpg",
		},
		{
			id: 3,
			img: "images/car-images/car_derail/merc-3.jpg",
		},
		{
			id: 4,
			img: "images/car-images/car_derail/merc-4.jpg",
		},

		{
			id: 5,
			img: "images/car-images/car_derail/merc-5.jpg",
		},

		{
			id: 6,
			img: "images/car-images/car_derail/merc-0.jpg",
		},

		{
			id: 7,
			img: "images/car-images/car_derail/merc-5.jpg",
		},

		{
			id: 8,
			img: "images/car-images/car_derail/merc-2.jpg",
		},

		{
			id: 9,
			img: "images/car-images/car_derail/merc-0.jpg",
		},

		{
			id: 10,
			img: "images/car-images/car_derail/merc-5.jpg",
		},
	];
	return (
		<>
			{/* <nav class='bg-black '>
				<div class='container'>
					<div class='row'>
						<div class='col-sm-2 col-xs-3'>
							<div class='b-nav__logo wow slideInLeft' data-wow-delay='0.3s'>
								<img src='images/logo/logo-1.png' />
							</div>
						</div>
						<div class='col-sm-2 visible-xs'>
							<div class='b-topBarsocial-wrapper none'>
								<div class='b-topbar-social'>
									<a href='#'>
										<span class='fa fa-facebook-square'></span>
									</a>

									<a href='#'>
										<span class='fa fa-instagram'></span>
									</a>
									<a href='#'>
										<span class='fa fa-youtube-square'></span>
									</a>
								</div>
							</div>
						</div>
						<div class='col-sm-8'>
							<div class='b-nav__list wow slideInRight' data-wow-delay='0.3s'>
								<div class='navbar-header'>
									<button
										type='button'
										class='navbar-toggle'
										data-toggle='collapse'
										data-target='#nav'>
										<span class='sr-only'>Toggle navigation</span>
										<span class='icon-bar'></span>
										<span class='icon-bar'></span>
										<span class='icon-bar'></span>
									</button>
								</div>
								<div
									class='collapse navbar-collapse navbar-main-slide'
									id='nav'>
									<ul class='navbar-nav-menu'>
										<li>
											<a href='index.html'>HOME</a>
										</li>
										<li>
											<a href='about.html'>ABOUT US</a>
										</li>
										<li>
											<a href='submit1.html'>SELL A CAR</a>
										</li>
										<li>
											<a href='listTableTwo.html'>BUY CAR</a>
										</li>
										<li>
											<a href='gallery.html'>GALLERY</a>
										</li>
										<li>
											<a href='contacts.html'>CONTACT US</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class='col-sm-2 hidden-xs'>
							<div class='b-topBarsocial-wrapper'>
								<div class='b-topbar-social'>
									<a href='https://www.facebook.com/profile.php?id=100077481055938'>
										<span class='fa fa-facebook-square'></span>
									</a>

									<a href='https://www.instagram.com/sushilcarbazzar/'>
										<span class='fa fa-instagram'></span>
									</a>
									<a href='https://www.youtube.com/@sushilcarbazzar5502'>
										<span class='fa fa-youtube-square'></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav> */}
			{/* top image half */}
			<section class='b-pageHeader'>
				<div class='container'>
					<h1 class='wow zoomInLeft' data-wow-delay='0.5s'>
						Vehicle Details Page
					</h1>
				</div>
			</section>

			<div
				style={{ backgroundColor: "black" }}
				class='b-breadCumbs s-shadow wow zoomInUp'
				data-wow-delay='0.5s'>
				<div class='container'>
					<a href='home.html' class='b-breadCumbs__page'>
						Home
					</a>
					<span class='fa fa-angle-right'></span>
					<a href='listings.html' class='b-breadCumbs__page'>
						Luxury Cars
					</a>
					<span class='fa fa-angle-right'></span>
					<a href='listingsTwo.html' class='b-breadCumbs__page'>
						Merc
					</a>
					<span class='fa fa-angle-right'></span>
					<a href='detail.html' class='b-breadCumbs__page m-active'>
						MERCEDES BENZ C CLASS C 200 PROGRESSIVE
					</a>
				</div>
			</div>

			{/* test slider */}

			<div className='carousel-wrapper'>
				<Carousel breakPoints={breakPoints}>
					{data.map((item) => (
						<Item key={item}>
							<img style={{ width: "100%" }} src={item.img} alt='slide image' />
						</Item>
					))}
				</Carousel>
			</div>

			{/* cars image slider */}

			<section class='b-detail s-shadow'>
				<div class='container'>
					<header
						class='b-detail__head s-lineDownLeft wow zoomInUp'
						data-wow-delay='0.5s'>
						<div class='row'>
							<div class='col-sm-9 col-xs-12'>
								<div class='b-detail__head-title'>
									<h1>MERCEDES BENZ C CLASS C 200 PROGRESSIVE</h1>
									<h3 style={{ color: "black" }}>Luxury Car</h3>
								</div>
							</div>
							<div class='col-sm-3 col-xs-12'>
								<div class='b-detail__head-price'>
									<div class='b-detail__head-price-num'>
										<i class='fa fa-rupee'>53,00,000</i>
									</div>
									<p style={{ color: "black" }}>Included Taxes &amp; Checkup</p>
								</div>
							</div>
						</div>
					</header>

					<div class='b-detail__main'>
						<div class=''>
							<div class='col-md-8 col-xs-12'>
								<div class='b-detail__main-info'>
									<div
										class='b-detail__main-info-images wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='row m-smallPadding'>
											<div class='col-xs-10'>
												<aside class='b-detail__main-aside'>
													<div
														class='b-detail__main-aside-desc wow zoomInUp'
														data-wow-delay='0.5s'>
														<h2 class='s-titleDet'>Description</h2>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Make
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	Mercedes Benz
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Model
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	Maxima
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Kilometres
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	39,000 km
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Body Type
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	Sedan
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Style/trim
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	SV Premium
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Engine
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	V-6 cyl
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Drivetrain
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	EWD
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Transmission
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	Dual-Clutch Automatic
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Exterior Color
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	Dark Grey
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Interior color
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	Jet Black
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Passangers/Doors
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	5 Passengers / 4 Doors
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Fuel Type
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	Gasoline Fue
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	City Fuel Economy{" "}
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	10.8L/100km
																</p>
															</div>
														</div>
														<div class=''>
															<div class='col-xs-6'>
																<h4 class='b-detail__main-aside-desc-title'>
																	Hwy Fuel Economy
																</h4>
															</div>
															<div class='col-xs-6'>
																<p class='b-detail__main-aside-desc-value'>
																	7.7L/100km
																</p>
															</div>
														</div>
													</div>
												</aside>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class=''>
								<div class='col-md-4 col-xs-12'>
									<aside class='b-detail__main-aside'>
										<div
											class='b-detail__main-aside-desc wow zoomInUp'
											data-wow-delay='0.5s'>
											<h2 class='s-titleDet'>INQUIRE ABOUT THIS VEHICLE</h2>
											<div class='b-detail__main-aside-about-call'>
												<span class='fa fa-phone'></span>
												<div>92509 22333</div>
												<p>Call the seller 24/7 and they would help you.</p>
											</div>
											<div class='b-detail__main-aside-about-seller'>
												<p>
													Seller Info: <span>Sushil Car Bazar</span>
												</p>
											</div>
											<div class='b-detail__main-aside-about-form'>
												<div class='b-detail__main-aside-about-form-links'>
													<a
														href='#'
														class='j-tab m-active s-lineDownCenter'
														data-to='#form1'>
														GENERAL INQUIRY
													</a>
													<a href='#' class='j-tab' data-to='#form2'>
														SCHEDULE TEST DRIVE
													</a>
												</div>
												<form id='form1' action='/' method='post'>
													<input
														type='text'
														placeholder='YOUR NAME'
														value=''
														name='name'
													/>
													<input
														type='email'
														placeholder='EMAIL ADDRESS'
														value=''
														name='email'
													/>
													<input
														type='tel'
														placeholder='PHONE NO.'
														value=''
														name='name'
													/>
													<textarea
														name='text'
														placeholder='message'></textarea>

													<button type='submit' class='btn m-btn'>
														RAISE ENQUIRY<span class='fa fa-angle-right'></span>
													</button>
												</form>
												<form id='form2' action='/' method='post'>
													<input
														type='text'
														placeholder='YOUR NAME'
														value=''
														name='name'
													/>
													<textarea
														name='text'
														placeholder='message'></textarea>

													<button type='submit' class='btn m-btn'>
														RAISE ENQUIRY<span class='fa fa-angle-right'></span>
													</button>
												</form>
											</div>
										</div>
									</aside>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class='b-related m-home'>
				<div class='container'>
					<h5 class='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
						FIND OUT MORE
					</h5>
					<br />
					<h2 class='s-title wow zoomInUp' data-wow-delay='0.5s'>
						RELATED VEHICLES ON SALE
					</h2>
					<div class='row'>
						<div class='col-md-3 col-xs-6'>
							<div
								class='b-auto__main-item wow zoomInLeft'
								data-wow-delay='0.5s'>
								<img
									class='img-responsive center-block'
									src='media/270x150/LandRover.jpg'
									alt='LandRover'
								/>
								<div class='b-world__item-val'>
									<span class='b-world__item-val-title'>
										REGISTERED <span>2020</span>
									</span>
								</div>
								<h2>
									<a href='detail.html'>MERCEDES BENZ E 220D</a>
								</h2>
								<div class='b-auto__main-item-info s-lineDownLeft'>
									<span class='m-price'>
										<i class='fa fa-rupee'></i>57,95,000
									</span>
									<span class='m-number'>
										<i class='fa fa-tachometer'></i>24,000 KM
									</span>
								</div>
								<div
									style={{ textAlign: "left" }}
									class='b-featured__item-links m-auto'>
									<a style={{ color: "black" }} href='#'>
										Used
									</a>
									<a style={{ color: "black" }} href='#'>
										White
									</a>
									<a style={{ color: "black" }} href='#'>
										Diesel
									</a>
								</div>
							</div>
						</div>
						<div class='col-md-3 col-xs-6'>
							<div
								class='b-auto__main-item wow zoomInLeft'
								data-wow-delay='0.5s'>
								<img
									class='img-responsive center-block'
									src='media/270x150/kia.jpg'
									alt='Kia'
								/>
								<div class='b-world__item-val'>
									<span class='b-world__item-val-title'>
										REGISTERED <span>2019</span>
									</span>
								</div>
								<h2>
									<a href='detail.html'>KIA SELTOS HTK PLUS 1.5</a>
								</h2>
								<div class='b-auto__main-item-info s-lineDownLeft'>
									<span class='m-price'>
										<i class='fa fa-rupee'></i>12,75,000
									</span>
									<span class='m-number'>
										<i class='fa fa-tachometer'></i>25,000 KM
									</span>
								</div>
								<div
									style={{ textAlign: "left" }}
									class='b-featured__item-links m-auto'>
									<a style={{ color: "black" }} href='#'>
										Used
									</a>
									<a style={{ color: "black" }} href='#'>
										Red
									</a>
									<a style={{ color: "black" }} href='#'>
										Petrol
									</a>
								</div>
							</div>
						</div>
						<div class='col-md-3 col-xs-6'>
							<div
								class='b-auto__main-item wow zoomInLeft'
								data-wow-delay='0.5s'>
								<img
									class='img-responsive center-block'
									src='media/270x150/jeep.jpg'
									alt='jeep'
								/>
								<div class='b-world__item-val'>
									<span class='b-world__item-val-title'>
										REGISTERED <span>2020</span>
									</span>
								</div>
								<h2>
									<a href='detail.html'>JEEP COMPASS PLUS AT</a>
								</h2>
								<div class='b-auto__main-item-info s-lineDownLeft'>
									<span class='m-price'>
										<i class='fa fa-rupee'></i>18,75,000
									</span>
									<span class='m-number'>
										<i class='fa fa-tachometer'></i>63,000 KM
									</span>
								</div>
								<div
									style={{ textAlign: "left" }}
									class='b-featured__item-links m-auto'>
									<a style={{ color: "black" }} href='#'>
										Used
									</a>
									<a style={{ color: "black" }} href='#'>
										White
									</a>
									<a style={{ color: "black" }} href='#'>
										Petrol
									</a>
								</div>
							</div>
						</div>
						<div class='col-md-3 col-xs-6'>
							<div
								class='b-auto__main-item wow zoomInLeft'
								data-wow-delay='0.5s'>
								<img
									class='img-responsive center-block'
									src='media/270x150/volvo.jpg'
									alt='LandRover'
								/>
								<div class='b-world__item-val'>
									<span class='b-world__item-val-title'>
										REGISTERED <span>2020</span>
									</span>
								</div>
								<h2>
									<a href='detail.html'>VOLVO XC40 T4 R-DESIGN</a>
								</h2>
								<div class='b-auto__main-item-info s-lineDownLeft'>
									<span class='m-price'>
										<i class='fa fa-rupee'></i>37,95,000
									</span>
									<span class='m-number'>
										<i class='fa fa-tachometer'></i>20,000 KM
									</span>
								</div>
								<div
									style={{ textAlign: "left" }}
									class='b-featured__item-links m-auto'>
									<a style={{ color: "black" }} href='#'>
										Used
									</a>
									<a style={{ color: "black" }} href='#'>
										Red
									</a>
									<a style={{ color: "black" }} href='#'>
										PETROL
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div class='b-features'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6'>
							<ul class='b-features__items'>
								<li
									class='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Low Prices, No Haggling
								</li>
								<li
									class='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Largest Car Dealership
								</li>
								<li
									class='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Multipoint Safety Check
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class='b-info'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-3 col-xs-6'>
							<aside class='b-info__aside wow zoomInLeft' data-wow-delay='0.3s'>
								<article class='b-info__aside-article'>
									<h3>OPENING HOURS</h3>
									<div class='b-info__aside-article-item'>
										<h6>Sales Department</h6>
										<p>
											Mon-Sat : 8:00am - 5:00pm
											<br />
											Sunday is closed
										</p>
									</div>
								</article>
								<article class='b-info__aside-article'>
									<h3>About us</h3>
									<p>
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive.
									</p>
								</article>
								<a href='about.html' class='btn m-btn'>
									Read More<span class='fa fa-angle-right'></span>
								</a>
							</aside>
						</div>
						<div class='col-md-3 col-xs-6'>
							<div class='b-info__latest'>
								<h3>LATEST AUTOS</h3>
								<div
									class='b-info__latest-article wow zoomInUp'
									data-wow-delay='0.3s'>
									<div class='b-info__latest-article-photo m-audi'></div>
									<div class='b-info__latest-article-info'>
										<h6>
											<a href='detail.html'>HYUNDAI CRETA S PLUS</a>
										</h6>
										<p>
											<span class='fa fa-tachometer'></span> 33,000 KM
										</p>
									</div>
								</div>
								<div
									class='b-info__latest-article wow zoomInUp'
									data-wow-delay='0.3s'>
									<div class='b-info__latest-article-photo m-audiSpyder'></div>
									<div class='b-info__latest-article-info'>
										<h6>
											<a href='#'>MERCEDES BENZ A-CLASS</a>
										</h6>
										<p>
											<span class='fa fa-tachometer'></span> 8,000 KM
										</p>
									</div>
								</div>
								<div
									class='b-info__latest-article wow zoomInUp'
									data-wow-delay='0.3s'>
									<div class='b-info__latest-article-photo m-aston'></div>
									<div class='b-info__latest-article-info'>
										<h6>
											<a href='#'>VOLVO XC40 T4 R-DESIGN</a>
										</h6>
										<p>
											<span class='fa fa-tachometer'></span> 20,000 KM
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class='col-md-3 col-xs-6'>
							<address
								class='b-info__contacts wow zoomInUp'
								data-wow-delay='0.3s'>
								<p>contact us</p>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<ol>
										Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing
										Road Pincode 121006
									</ol>
									<em />
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<em>
										<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
									</em>
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-phone'></span>
									<ol>
										+91 92509 22333
										<br />
										+91 98114 36332
									</ol>
								</div>

								<div class='b-info__contacts-item'>
									<span class='fa fa-envelope'></span>
									<em>
										<ol>sushilcarbazar@gmail.com</ol>
									</em>
								</div>
							</address>
							<address class='b-info__map'>
								<a href='contacts.html'>Open Location Map</a>
							</address>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Details;
