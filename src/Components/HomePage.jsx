import React, { useState, useEffect } from "react";
import CarLoan from "./CarLoan";
import Gellery from "./Gellery";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 4 },
];

const breakPoints2 = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

const HomePage = () => {
	const [stock, setStock] = useState("");
	const data = [
		{
			id: 1,
			img: "images/car-images/car_derail/merc-1.jpg",
			rs: "16,75,000",
			titlecar: "TOYOTA INNOVA CRYSTA 2.4 GX AT 7 STR",
			range: "28700KM",
			quality: "Used",
			year: "2022",
			resion: "Manual",
			color: "white",
			dl: "Diesel",
		},
		{
			id: 2,
			img: "media/186x113/mg.jpeg",

			rs: "16,75,000",
			titlecar: "MORRIS GARAGE HECTOR SHARP 1.5 PETROL CVT",
			range: "33000KM",
			quality: "Used",
			year: "2021",
			resion: "Manual",
			color: "Red",
			dl: "Petrol",
		},
		{
			id: 3,
			img: "media/186x113/hondaamaze.jpg",
			rs: "5,50,000",
			titlecar: "HONDA AMAZE 1.2 S MT PETROL",
			range: "27000KM",
			quality: "Used",
			year: "2018",
			resion: "Manual",
			color: "Grey",
			dl: "Petrol",
		},
		{
			id: 4,
			img: "media/186x113/wagonr.jpg",
			rs: "5,65,000",
			titlecar: "TOYOTA INNOVA CRYSTA 2.4 GX AT 7 STR",
			range: "15000KM",
			quality: "Used",
			year: "2021",
			resion: "Manual",
			color: "white",
			dl: "Petrol",
		},

		{
			id: 5,
			img: "media/186x113/innova.jpg",
			rs: "28,75,000",
			titlecar: "TOYOTA INNOVA CRYSTA 2.4 GX AT 7 STR",
			range: "28700KM",
			quality: "Used",
			year: "2022",
			resion: "Manual",
			color: "white",
			dl: "Diesel",
		},

		{
			id: 6,
			img: "media/186x113/mg.jpeg",
			rs: "16,75,000",
			titlecar: "MORRIS GARAGE HECTOR SHARP 1.5 PETROL CVT",
			range: "33000KM",
			quality: "Used",
			year: "2021",
			resion: "Manual",
			color: "Red",
			dl: "Petrol",
		},

		{
			id: 7,
			img: "media/186x113/hondaamaze.jpg",
			rs: "5,50,000",
			titlecar: "ONDA AMAZE 1.2 S MT PETRO",
			range: "27000KM",
			quality: "Used",
			year: "2022",
			resion: "Manual",
			color: "Grey",
			dl: "Petrol",
		},

		{
			id: 8,
			img: "media/186x113/wagonr.jpg",
			rs: "5,65,000",
			titlecar: "MARUTI SUZUKI WAGON R VXI 1.0",
			range: "28700KM",
			quality: "Used",
			year: "2021",
			resion: "Manual",
			color: "white",
			dl: "Petrol",
		},

		{
			id: 9,
			img: "images/car-images/car_derail/merc-0.jpg",
			rs: "16,75,000",
			titlecar: "TOYOTA INNOVA CRYSTA 2.4 GX AT 7 STR",
			range: "28700KM",
			quality: "Used",
			year: "2022",
			resion: "Manual",
			color: "white",
			dl: "Diesel",
		},
	];
	const CustomerDetails = [
		{
			id: 1,
			detail:
				"My buying experience was very good. The car is very fun to drive on corner also. This is the best car with the latest technology and this is car is very safe ...",
			custname: "Sanjay Sharma",
			carimg: "media/reviews-bg/jeep-review.jpg",
			custimg: "media/persons/person2.jpg",
			feedback: "Customer, JEEP COMPASS LIMITED PLUS PETROL AT",
		},
		{
			id: 2,
			detail:
				"Totaly Fantastic And Fabulous. It's very good for driving and safety also is the very excellent price is a little expensive, comport seated and stylish look ...",
			custname: "Manish",
			carimg: "media/reviews-bg/audi-review.jpg",
			custimg: "media/persons/person3.jpg",
			feedback: "AUDI Q2 PREMIUM 40 TFSI QUATTRO",
		},

		{
			id: 3,
			detail:
				"My buying experience was very good. The car is very fun to drive on corner also. This is the best car with the latest technology and this is car is very safe ...",
			custname: "Riya dutta",
			carimg: "media/reviews-bg/mercRev-1.jpg",
			custimg: "media/persons/person.jpg",
			feedback: "MERCEDES BENZ A-CLASS LIMOUSINE 200D",
		},
	];

	const CarsDetails = [
		{
			id: 1,
			imgcars: "images/car-images/merc.jpg",
			titlecars: "MERCEDES BENZ C CLASS",
			range: "53,00000",
			yerReg: "Reg. Year :",
			year: "2021",
			locat: "Kms :",
			rangekms: "17000",
			fulet: "Fuel Type :",
			miles: "Petrol",
		},

		{
			id: 2,
			imgcars: "images/car-images/tata.jpg",
			titlecars: "TATA TIGOR REVOTRON XZA",
			range: "7,00000",
			yerReg: "Reg. Year :",
			year: "2019",
			locat: "Kms :",
			rangekms: "19000",
			fulet: "Fuel Type :",
			miles: "Petrol",
		},

		{
			id: 3,
			imgcars: "images/car-images/scorpio.jpg",
			titlecars: "Mahindra Scorpio-N Z8 AT",
			range: "54,75,000",
			yerReg: "Reg. Year :",
			year: "2022",
			locat: "Kms :",
			rangekms: "2300",
			fulet: "Fuel Type :",
			miles: "Diesel",
		},

		{
			id: 4,
			imgcars: "images/car-images/merc.jpg",
			titlecars: "MERCEDES BENZ C CLASS",
			range: "53,00000",
			yerReg: "Reg. Year :",
			year: "2021",
			locat: "Kms :",
			rangekms: "17000",
			fulet: "Fuel Type :",
			miles: "Petrol",
		},
		{
			id: 5,
			imgcars: "images/car-images/safari.jpg",
			titlecars: "TATA SAFARI XTA PLUS",
			range: "19,45,000",
			yerReg: "Reg. Year :",
			year: "2022",
			locat: "Kms :",
			rangekms: "10000",
			fulet: "Fuel Type :",
			miles: "Diesel",
		},
		{
			id: 6,
			imgcars: "images/car-images/kia.jpeg",
			titlecars: "KIA SELTOS HTK PLUS 1.5",
			range: "12,75,000",
			yerReg: "Reg. Year :",
			year: "2019",
			locat: "Kms :",
			rangekms: "25000",
			fulet: "Fuel Type :",
			miles: "Petrol",
		},
		{
			id: 7,
			imgcars: "images/car-images/jeep.jpeg",
			titlecars: "JEEP COMPASS LIMITED PLUS AT",
			range: "18,75,000",
			yerReg: "Reg. Year :",
			year: "2020",
			locat: "Kms :",
			rangekms: "63000",
			fulet: "Fuel Type :",
			miles: "Petrol",
		},
		{
			id: 8,
			imgcars: "images/car-images/volvo.jpg",
			titlecars: "VOLVO XC40 T4 R-DESIGN",
			range: "37,95,000",
			yerReg: "Reg. Year :",
			year: "2020",
			locat: "Kms :",
			rangekms: "20000",
			fulet: "Fuel Type :",
			miles: "Petrol",
		},
	];

	return (
		<div>
			<div
				className='m-home'
				data-scrolling-animations='true'
				data-equal-height='.b-auto__main-item'>
				{/* Loader */}
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>
				{/* Loader end */}
				<header className='b-topBar' st>
					<div className='container wow slideInDown' data-wow-delay='0.7s'>
						<div className='row'></div>
					</div>
				</header>

				{/* slider  */}
				<section className='b-slider'>
					<div
						id='carouselExampleFade'
						class='carousel slide carousel-fade'
						data-bs-ride='carousel'>
						<div class='carousel-inner'>
							<div class='carousel-item active'>
								<img
									src='media/main-slider/sushil-cars.jpg'
									class='d-block w-100'
									alt='...'
								/>
							</div>
							<div class='carousel-item'>
								<img src='media/main-slider/4.jpg' alt='sliderImg' />
								<div className='container'>
									<div className='carousel-caption b-slider__info'>
										<h3 style={{ marginLeft: "350px" }}>Find your dream car</h3>
										<h2>
											MercedesBenz <br />
											CLS63 AMG
										</h2>
										<p>
											Model 2015{" "}
											<span>
												<i
													className='fa fa-rupee'
													style={{ fontSize: "24px" }}></i>
												22,14,900
											</span>
										</p>
										<a className='btn m-btn' href='detail.html'>
											see details<span className='fa fa-angle-right'></span>
										</a>
									</div>
								</div>
							</div>

							<div class='carousel-item'>
								<img src='media/main-slider/2.jpg' alt='sliderImg' />
								<div className='container'>
									<div className='carousel-caption b-slider__info'>
										<h3 style={{ marginLeft: "350px" }}>Find your dream car</h3>
										<h2>
											MercedesBenz <br />
											CLS63 AMG
										</h2>
										<p>
											Model 2015{" "}
											<span>
												<i
													className='fa fa-rupee'
													style={{ fontSize: "24px" }}></i>
												22,14,900
											</span>
										</p>
										<a className='btn m-btn' href='detail.html'>
											see details<span className='fa fa-angle-right'></span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<button
							class='carousel-control-prev'
							type='button'
							data-bs-target='#carouselExampleFade'
							data-bs-slide='prev'>
							<span
								style={{ height: "14px", marginLeft: "-200px" }}
								class='carousel-control-prev-icon'
								aria-hidden='true'></span>
							<span class='visually-hidden'>Previous</span>
						</button>
						<button
							class='carousel-control-next'
							type='button'
							data-bs-target='#carouselExampleFade'
							data-bs-slide='next'>
							<span
								style={{ height: "14px", marginLeft: "200px" }}
								class='carousel-control-next-icon'
								aria-hidden='true'></span>
							<span class='visually-hidden'>Next</span>
						</button>
					</div>
				</section>

				{/* filter form search bar */}
				<section className='b-search'>
					<div className='container'>
						<div className='row'>
							<h3
								style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}
								className='wow zoomInUp text-center'
								data-wow-delay='0.3s'>
								UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? FIND IT HERE
							</h3>

							<div
								className='b-search__main wow zoomInUp'
								data-wow-delay='0.3s'>
								<h4>SELECT VEHICLE BODY TYPE</h4>
								<form
									action='gallery.html'
									method='POST'
									className='b-search__main-form'>
									<div className='row'>
										<div className='col-xs-12 col-md-8'>
											<div className='m-firstSelects'>
												<div className='col-xs-4'>
													<select name='select1'>
														<option value='0'>Any Make</option>
														<option value='1'>Any Make</option>
														<option value='2'>Any Make</option>
														<option value='3'>Any Make</option>
														<option value='4'>Any Make</option>
													</select>
													<span className='fa fa-caret-down'></span>
													<p>MISSING MANUFACTURER?</p>
												</div>
												<div className='col-xs-4'>
													<select name='select2'>
														<option value='0' selected='selected'>
															Any Model
														</option>
														<option value='1'>Any Model</option>
														<option value='2'>Any Model</option>
														<option value='3'>Any Model</option>
													</select>
													<span className='fa fa-caret-down'></span>
													<p>MISSING MODEL?</p>
												</div>
												<div className='col-xs-4'>
													<select name='select3'>
														<option value='1' selected='selected'>
															Vehicle Status
														</option>
														<option value='2'>Vehicle Status 2</option>
														<option value='3'>Vehicle Status 3</option>
														<option value='4'>Vehicle Status 4</option>
														<option value='5'>Vehicle Status 5</option>
													</select>
													<span className='fa fa-caret-down'></span>
													<p>E.G: NEW, USED, CERTIFIED</p>
												</div>
											</div>
											<div className='m-secondSelects'>
												<div className='col-xs-4'>
													<select name='select4'>
														<option value='0' selected='selected'>
															Min Year
														</option>
														<option value='1'>Min Year</option>
														<option value='2'>Min Year</option>
														<option value='3'>Min Year</option>
														<option value='4'>Min Year</option>
														<option value='5'>Min Year</option>
													</select>
													<span className='fa fa-caret-down'></span>
												</div>
												<div className='col-xs-4'>
													<select name='select5'>
														<option value='0' selected='selected'>
															Max Year
														</option>
														<option value='1'>Max Year</option>
														<option value='2'>Max Year</option>
														<option value='3'>Max Year</option>
														<option value='4'>Max Year</option>
													</select>
													<span className='fa fa-caret-down'></span>
												</div>
											</div>
										</div>
										<div className='col-md-4 col-xs-12 text-left s-noPadding'>
											<div className='b-search__main-form-range'>
												<label>PRICE RANGE</label>
												<div className='slider'></div>
												<input
													type='hidden'
													name='min'
													className='j-min'
													value=''
												/>
												<input
													type='hidden'
													name='max'
													className='j-max'
													value=''
												/>
											</div>
											<div className='b-search__main-form-submit'>
												<Link to='/detailsdata'></Link>
												<button type='submit' className='btn m-btn'>
													Search the Vehicle
													<span className='fa fa-angle-right'></span>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				{/* vehicals on sale section */}
				<section className='b-homeAuto'>
					<div className='container-fluid'>
						<div className='col-xs-12   visible-xs-horizental-scroll'>
							<div className='b-homeAuto__latest'>
								<h5 className='s-titleBg wow zoomInLeft' data-wow-delay='0.3s'>
									GIVING OUR CUSTOMERS BEST DEALS
								</h5>
								<br />
								<h2 className='s-title wow zoomInLeft' data-wow-delay='0.3s'>
									LATEST VEHICLES ON SALE
								</h2>
								<div className='b-auto__main'>
									<Row xs={12} md={4}>
										{CarsDetails.map((item) => (
											<div key={item} id='cardrow'>
												<Col>
													<div
														className='b-auto__main-item wow zoomInUp'
														data-wow-delay='0.3s'>
														<img
															className='img-responsive center-block'
															src={item.imgcars}
															alt='nissan'
														/>
														<h2>
															<Link to='/details'>{item.titlecars}</Link>
														</h2>
														<div className='b-auto__main-item-info'>
															<span className='m-price'>
																<i className='fa fa-rupee'></i>
																{item.range}
															</span>
														</div>
														<div className='b-featured__item-links m-auto'>
															<span className='model'>{item.yerReg}</span>
															<span className='year'>{item.year}</span> <br />
															<span className='kms'>
																{item.locat}
																<span className='kmsvalue'>
																	{item.rangekms}
																</span>
															</span>
															<br />
															<span className='fuel'>
																{item.fulet}{" "}
																<span className='fueltype'>{item.miles}</span>{" "}
															</span>
														</div>
													</div>
												</Col>
											</div>
										))}
									</Row>
								</div>
							</div>
						</div>
					</div>
					<div className='clearfix'></div>
				</section>
				{/* Exclusive offers slider */}
				<section class='b-featured'>
					<div class='container'>
						<h2 class='s-title wow zoomInUp' data-wow-delay='0.3s'>
							Exclusive Offers
						</h2>
						<Carousel breakPoints={breakPoints}>
							{data.map((item) => (
								<div key={item}>
									<div>
										<div
											class='b-featured__item wow rotateIn p-0 m-0'
											data-wow-delay='0.3s'>
											<a
												style={{ backgroundColor: "black" }}
												href='detail.html'>
												<img
													style={{ width: "170px", marginLeft: "-37px" }}
													src={item.img}
													alt='mers'
												/>
											</a>
											<div class='b-featured__item-price'>
												<i class='fa fa-rupee'></i>
												{item.rs}
											</div>

											<div class='clearfix'></div>
											<h5>
												<a href='detail.html'>{item.titlecar}</a>
											</h5>
											<div class='b-featured__item-count'>
												<span class='fa fa-tachometer'></span>
												{item.range}
											</div>
											<div class='b-featured__item-links '>
												<a href='#'>{item.quality}</a>
												<a href='#'>{item.year}</a>
												<a href='#'>{item.resion}</a>
												<div className='d-flex'>
													<a href='#'>{item.color}</a>
													<a href='#'>{item.dl}</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Carousel>

						{/* slide checking */}

						<div
							id='carousel-small'
							class='owl-carousel enable-owl-carousel'
							data-items='4'
							data-navigation='true'
							data-auto-play='true'
							data-stop-on-hover='true'
							data-items-desktop='4'
							data-items-desktop-small='4'
							data-items-tablet='3'
							data-items-tablet-small='2'>
							<div>
								<div
									style={{ width: "186px" }}
									class='b-featured__item wow rotateIn'
									data-wow-delay='0.3s'>
									<a style={{ backgroundColor: "black" }} href='detail.html'>
										<img src='media/186x113/innova.jpg' alt='mers' />
										{/* <!--  <span class="m-premium">Premium</span> --> */}
									</a>

									<div class='clearfix'></div>
									<h5>
										<a href='detail.html'>
											TOYOTA INNOVA CRYSTA 2.4 GX AT 7 STR
										</a>
									</h5>
									<div class='b-featured__item-count'>
										<span class='fa fa-tachometer'></span>28700KM
									</div>
									<div class='b-featured__item-links'>
										<a href='#'>Used</a>
										<a href='#'>2022</a>
										<a href='#'>Manual</a>
										<a href='#'>white</a>
										<a href='#'>Diesel</a>
									</div>
								</div>
							</div>
							<div>
								<div
									style={{ width: "186px" }}
									class='b-featured__item wow rotateIn'
									data-wow-delay='0.3s'>
									<a style={{ backgroundColor: "black" }} href='detail.html'>
										<img src='media/186x113/mg.jpeg' alt='mers' />
										{/* <!--  <span class="m-premium">Premium</span> --> */}
									</a>
									<div class='b-featured__item-price'>
										<i class='fa fa-rupee'></i>16,75,000
									</div>
									<div class='clearfix'></div>
									<h5>
										<a href='detail.html'>
											MORRIS GARAGE HECTOR SHARP 1.5 PETROL CVT
										</a>
									</h5>
									<div class='b-featured__item-count'>
										<span class='fa fa-tachometer'></span>33000KM
									</div>
									<div class='b-featured__item-links'>
										<a href='#'>Used</a>
										<a href='#'>2021</a>
										<a href='#'>Manual</a>
										<a href='#'>Red</a>
										<a href='#'>Petrol</a>
									</div>
								</div>
							</div>
							<div>
								<div
									style={{ width: "186px" }}
									class='b-featured__item wow rotateIn'
									data-wow-delay='0.3s'>
									<a style={{ backgroundColor: "black" }} href='detail.html'>
										<img src='media/186x113/hondaamaze.jpg' alt='mers' />
										{/* <!--  <span class="m-premium">Premium</span> --> */}
									</a>
									<div class='b-featured__item-price'>
										<i class='fa fa-rupee'></i>5,50,000
									</div>
									<div class='clearfix'></div>
									<h5>
										<a href='detail.html'>HONDA AMAZE 1.2 S MT PETROL</a>
									</h5>
									<div class='b-featured__item-count'>
										<span class='fa fa-tachometer'></span>27000KM
									</div>
									<div class='b-featured__item-links'>
										<a href='#'>Used</a>
										<a href='#'>2018</a>
										<a href='#'>Manual</a>
										<a href='#'>Grey</a>
										<a href='#'>Petrol</a>
									</div>
								</div>
							</div>
							<div>
								<div
									style={{ width: "186px" }}
									class='b-featured__item wow rotateIn'
									data-wow-delay='0.3s'>
									<a style={{ backgroundColor: "black" }} href='detail.html'>
										<img src='media/186x113/wagonr.jpg' alt='mers' />
										{/* <!--  <span class="m-premium">Premium</span> --> */}
									</a>
									<div class='b-featured__item-price'>
										<i class='fa fa-rupee'></i>5,65,000
									</div>
									<div class='clearfix'></div>
									<h5>
										<a href='detail.html'>MARUTI SUZUKI WAGON R VXI 1.0</a>
									</h5>
									<div class='b-featured__item-count'>
										<span class='fa fa-tachometer'></span>15000KM
									</div>
									<div class='b-featured__item-links'>
										<a href='#'>Used</a>
										<a href='#'>2021</a>
										<a href='#'>Manual</a>
										<a href='#'>white</a>
										<a href='#'>Petrol</a>
									</div>
								</div>
							</div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</section>

				{/* 


WELCOME TO SUSHIL CARS  section */}

				<section className='b-welcome'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-3 col-lg-3 col-xs-12'>
								{" "}
								<div className='row'>
									<div className='col-xs-12 m-padding'>
										<div
											className='b-welcome__services-auto wow zoomInLeft'
											data-wow-delay='0.3s'>
											<div className='b-welcome__services-img m-auto'>
												<a href='car-loan.html'>
													<span className='fa fa-cab'></span>
												</a>
											</div>
											<h3>AUTO LOANS</h3>
										</div>
									</div>
									<div className='col-xs-12 text-right visible-md visible-lg'>
										<div
											className='m-circle wow slideInRight'
											data-wow-delay='0.3s'>
											<span className='b-welcome__services-circle'></span>
										</div>
									</div>
									<div className='col-xs-12 m-padding'>
										<div
											className='b-welcome__services-buying wow zoomInLeft'
											data-wow-delay='0.3s'>
											<div className='b-welcome__services-img m-buying'>
												<span className='fa fa-book'></span>
											</div>
											<h3>Customer Requirements</h3>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-lg-6 col-xs-12'>
								{" "}
								<div
									className='b-welcome__text wow zoomInUp'
									data-wow-delay='0.3s'>
									<h2>INDIA'S LEADING CAR DEALER</h2>
									<h3>WELCOME TO SUSHIL CARS</h3>
									<p>
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive. We tend to deliver the very best quality
										vehicle at the foremost competitive cost. Sushil Car bazar
										is a one stop solution to sell yourPremium/ Luxury car at
										best price.
									</p>
									<ul className='welcome-points'>
										<li>
											<span className='fa fa-check'></span>Low Prices, No
											Haggling{" "}
										</li>
										<li>
											<span className='fa fa-check'></span>Largest Car
											Dealership
										</li>
										<li>
											<span className='fa fa-check'></span>Multipoint Safety
											Check
										</li>
									</ul>
								</div>
							</div>
							<div className='col-md-3 col-lg-3 col-xs-12'>
								<div className='row'>
									<div className='col-xs-12 m-padding'>
										<div
											className='b-welcome__services-trade wow zoomInRight'
											data-wow-delay='0.3s'>
											<div className='b-welcome__services-img m-trade'>
												<a href='insurance.html'>
													<span className='fa fa-shield'></span>
												</a>
											</div>
											<h3>insurance</h3>
										</div>
									</div>
									<div className='col-xs-12 text-left visible-md visible-lg'>
										<div
											className='m-circle pull-right wow slideInLeft'
											data-wow-delay='0.3s'>
											<span className='b-welcome__services-circle m-left'></span>
										</div>
									</div>
								</div>{" "}
								<div className='row'>
									<div className='col-xs-12 m-padding'>
										<div
											className='b-welcome__services-trade wow zoomInRight'
											data-wow-delay='0.3s'>
											<div className='b-welcome__services-img m-trade'>
												<a href='emi-calculator.html'>
													<span className='fa fa-calculator'></span>
												</a>
											</div>
											<h3> Emi calculator</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* switch to go mobile */}
				<section className='b-count sms-sec'>
					<div className='container'>
						<div className='row'>
							<div
								className='col-md-6 col-xs-12 percent-blocks sms-main'
								data-waypoint-scroll='true'>
								<div className='row'>
									<div className='col-md-10'>
										<div className='sms-sec__item'>
											<div
												className='getng_t_text wow fadeInDown animated'
												data-wow-delay='.0s'
												style={{
													visibility: "visible",
													animationDelay: "0s",
													animationName: "fadeInDown",
												}}>
												<p
													style={{
														fontSize: "65px",
														fontWight: "700",
														lineHeight: "45px",
														fontVariantCaps: "all-petite-caps",
														fontFamily:
															"'Gill Sans', 'Gill Sans MT', 'Myriad Pro', 'DejaVu Sans Condensed', Helvetica, Arial, 'sans-serif'",
													}}>
													Switch to the fast lane. <br /> Go mobile
												</p>
												<p>
													Download our app and let your mobile assistence do all
													the hard work
												</p>
											</div>
											<div
												className='getng_btns wow fadeInDown animated'
												data-wow-delay='.30s'
												style={{
													visibility: "visible",
													animationDelay: "0.3s",
													animationName: "fadeInDown",
												}}>
												<a href='#/' target='_blank' className='apkbtn'>
													<img
														className='lazy'
														alt='apk btn 1'
														src='assets/app-logo/google-play-logo.png'
														style={{ display: "inline-block" }}
													/>
												</a>
												<a href='#/' target='_blank' className='apkbtn'>
													<img
														className='lazy'
														alt='apk btn 2'
														src='assets/app-logo/apple-app-store-logo.png'
														style={{ display: "inline-block" }}
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* customer syaing slider */}
				<section className='b-homeReviews'>
					<div className='container'>
						<h1 className='s-title wow zoomInUp' data-wow-delay='0.3s'>
							WHAT CUSTOMERS SAYING
						</h1>
						<Carousel style={{ width: "118%" }} breakPoints={breakPoints2}>
							{CustomerDetails.map((item) => (
								<div key={item}>
									<div className='' data-wow-delay='0.3s'>
										<div className='b-homeReviews__main-body'>
											<p>{item.detail}</p>
											<img src={item.carimg} alt='carimg' />
										</div>

										<div
											className='b-homeReviews__main-person'
											style={{ marginTop: "110px" }}>
											<div className='b-review__main-person m-personTwo'>
												<div
													style={{ marginTop: "-30px", marginLeft: "-20px" }}>
													<img src={item.custimg} alt='imgcust' />
												</div>
											</div>
											<div className='b-homeReviews__main-person-name'>
												<em>"</em>
												<h4>{item.custname}</h4>
												<p>{item.feedback}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</Carousel>
					</div>
				</section>
				<section className='b-asks'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12'>
								<div
									className='b-asks__first wow zoomInLeft'
									data-wow-delay='0.3s'>
									<div className='b-asks__first-circle'>
										<span className='fa fa-search'></span>
									</div>
									<div className='b-asks__first-info'>
										<h2>ARE YOU LOOKING FOR A CAR?</h2>
										<p>
											Search Our Inventory With Thousands Of Cars And More Cars
											Are Adding On Daily Basis
										</p>
									</div>
									<div className='b-asks__first-arrow'>
										<a href='listTableTwo.html'>
											<span className='fa fa-angle-right'></span>
										</a>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0'>
								<div
									className='b-asks__first m-second wow zoomInRight'
									data-wow-delay='0.3s'>
									<div className='b-asks__first-circle'>
										<span className='fa fa-rupee'></span>
									</div>
									<div className='b-asks__first-info'>
										<h2>DO YOU WANT TO SELL A CAR?</h2>
										<p>
											Search Our Inventory With Thousands Of Cars And More Cars
											Are Adding On Daily Basis
										</p>
									</div>
									<div className='b-asks__first-arrow'>
										<a href='submit1.html'>
											<span className='fa fa-angle-right'></span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='b-count'>
					<div className='container'>
						<div className='row'>
							<div
								className='col-md-11 col-xs-12 percent-blocks m-main'
								data-waypoint-scroll='true'>
								<div className='row'>
									<div className='col-sm-3 col-xs-6'>
										<div className='b-count__item'>
											<div className='b-count__item-circle'>
												<span className='fa fa-car'></span>
											</div>
											<div className='chart' data-percent='5000'>
												<h2 className='percent'>5000</h2>
											</div>
											<h5>vehicles in stock</h5>
										</div>
									</div>
									<div className='col-sm-3 col-xs-6'>
										<div className='b-count__item'>
											<div className='b-count__item-circle'>
												<span className='fa fa-users'></span>
											</div>
											<div className='chart' data-percent='3100'>
												<h2 className='percent'>3100</h2>
											</div>
											<h5>HAPPY CUSTOMER REVIEWS</h5>
										</div>
									</div>
									<div className='col-sm-3 col-xs-6'>
										<div className='b-count__item'>
											<div className='b-count__item-circle'>
												<span className='fa fa-building-o'></span>
											</div>
											<div className='chart' data-percent='500'>
												<h2 className='percent'>500</h2>
											</div>
											<h5>DEALER BRANCHES</h5>
										</div>
									</div>
									<div className='col-sm-3 col-xs-6'>
										<div className='b-count__item j-lastHome'>
											<div className='b-count__item-circle'>
												<span className='fa fa-suitcase'></span>
											</div>
											<div className='chart' data-percent='54'>
												<h2 className='percent'>54</h2>
											</div>
											<h5>FREE PARTS GIVEN</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='b-brands s-shadow'>
					<div className='container'>
						<h5 className='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
							FIND OUT MORE
						</h5>
						<br />
						<h2 className='s-title wow zoomInUp' data-wow-delay='0.5s'>
							BRANDS WE OFFER
						</h2>
						<div className=''>
							<div
								className='b-brands__brand wow rotateIn'
								data-wow-delay='0.5s'>
								<img src='media/brands/bmwLogo.png' alt='brand' />
							</div>
							<div
								className='b-brands__brand wow rotateIn'
								data-wow-delay='0.5s'>
								<img src='media/brands/kia.png' alt='brand' />
							</div>
							<div
								className='b-brands__brand wow rotateIn'
								data-wow-delay='0.5s'>
								<img src='media/brands/volvo.png' alt='brand' />
							</div>
							<div
								className='b-brands__brand wow rotateIn'
								data-wow-delay='0.5s'>
								<img src='media/brands/mercLogo.png' alt='brand' />
							</div>
							<div
								className='b-brands__brand wow rotateIn'
								data-wow-delay='0.5s'>
								<img src='media/brands/audiLogo.png' alt='brand' />
							</div>
							<div
								className='b-brands__brand wow rotateIn'
								data-wow-delay='0.5s'>
								<img src='media/brands/honda.png' alt='brand' />
							</div>
							<div
								className='b-brands__brand wow rotateIn'
								data-wow-delay='0.5s'>
								<img src='media/brands/mg.png' alt='brand' />
							</div>
						</div>
					</div>
				</section>
				<div className='b-info'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-3 col-xs-6'>
								<aside
									className='b-info__aside wow zoomInLeft'
									data-wow-delay='0.3s'>
									<article className='b-info__aside-article'>
										<h3>OPENING HOURS</h3>
										<div className='b-info__aside-article-item'>
											<h6>Sales Department</h6>
											<p>
												Mon-Sat : 8:00am - 5:00pm
												<br /> Sunday is closed
											</p>
										</div>
									</article>
									<article className='b-info__aside-article'>
										<h3>About us</h3>
										<p>
											Established in the year 2002, Sushil Car Bazar is one of
											the top & most trusted dealership for preowned luxury
											car.In over 17 years of business history we have always
											had a customer oriented approach & total customer
											satisfaction has been our motive
										</p>
									</article>
									<a href='about.html' className='btn m-btn'>
										Read More<span className='fa fa-angle-right'></span>
									</a>
								</aside>
							</div>
							<div className='col-md-3 col-xs-6'>
								<div className='b-info__latest'>
									<h3>LATEST AUTOS</h3>
									<div
										className='b-info__latest-article wow zoomInUp'
										data-wow-delay='0.3s'>
										<div className='b-info__latest-article-photo m-audi'></div>
										<div className='b-info__latest-article-info'>
											<h6>
												<a href='detail.html'>HYUNDAI CRETA S PLUS</a>
											</h6>
											<p>
												<span className='fa fa-tachometer'></span> 33,000 KM
											</p>
										</div>
									</div>
									<div
										className='b-info__latest-article wow zoomInUp'
										data-wow-delay='0.3s'>
										<div className='b-info__latest-article-photo m-audiSpyder'></div>
										<div className='b-info__latest-article-info'>
											<h6>
												<a href='#'>MERCEDES BENZ A-CLASS</a>
											</h6>
											<p>
												<span className='fa fa-tachometer'></span> 8,000 KM
											</p>
										</div>
									</div>
									<div
										className='b-info__latest-article wow zoomInUp'
										data-wow-delay='0.3s'>
										<div className='b-info__latest-article-photo m-aston'></div>
										<div className='b-info__latest-article-info'>
											<h6>
												<a href='#'>VOLVO XC40 T4 R-DESIGN</a>
											</h6>
											<p>
												<span className='fa fa-tachometer'></span> 20,000 KM
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className='col-md-3 col-xs-6'>
								<address
									className='b-info__contacts wow zoomInUp'
									data-wow-delay='0.3s'>
									<p>contact us</p>
									<div className='b-info__contacts-item'>
										<span className='fa fa-map-marker'></span>
										<ol>
											Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12
											Dividing Road Pincode 121006
										</ol>
									</div>
									<div className='b-info__contacts-item'>
										<span className='fa fa-map-marker'></span>
										<em>
											<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
										</em>
									</div>
									<div className='b-info__contacts-item'>
										<span className='fa fa-phone'></span>
										<ol>
											+91 92509 22333
											<br />
											+91 98114 36332
										</ol>
									</div>

									<div className='b-info__contacts-item'>
										<span className='fa fa-envelope'></span>
										<em>
											<ol>sushilcarbazar@gmail.com</ol>
										</em>
									</div>
								</address>
								<address className='b-info__map'>
									<a href='contacts.html'>Open Location Map</a>
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
