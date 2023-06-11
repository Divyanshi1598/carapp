import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const EmiCalculator = () => {
	return (
		<>
			<section class='b-pageHeader'>
				<div class='container'>
					<h1 class='wow zoomInLeft' data-wow-delay='0.5s'>
						Easy EMI
					</h1>
				</div>
			</section>
			<div class='b-breadCumbs s-shadow wow zoomInUp' data-wow-delay='0.5s'>
				<div class='container'>
					<Link to='/' class='b-breadCumbs__page'>
						Home
					</Link>
					<span class='fa fa-angle-right'></span>
					<Link to='/emical' class='b-breadCumbs__page m-active'>
						Emi Calculator
					</Link>
				</div>
			</div>

			<section class='b-detail s-shadow'>
				<div class='container '>
					<div class='header'>
						<div class='b-detail__main'>
							<div class='row '>
								<div class='col-md-10 col-xs-12'>
									<h1 class='car-emi-title wow zoomInUp' data-wow-delay='0.5s'>
										Car EMI Calculator
									</h1>
									<p
										style={{ fontSize: "14px" }}
										class=' wow zoomInUp'
										data-wow-delay='0.5s'>
										The Car Loan EMI Calculator, is the best way to calculate
										your Equated Monthly Instalments for the loan amount you
										require. The EMI calculator helps in decision-making and
										brings you one step closer to your dream car. Now with all
										the details in place, all you need to do is apply for a car
										loan.
									</p>
								</div>
								<button>
									<i class='bi bi-list'></i>
								</button>
							</div>
							<div class='row mt-40'>
								<div class='col-sm-6'>
									<div class='detail-group'>
										<div>
											<div class='detail'>
												<p>Loan Amount</p>
												<p id='loan-amt-text' style={{ color: " #6258A8" }}></p>
											</div>
											<input
												type='range'
												id='loan-amount'
												min='0'
												max='10000000'
												step='10000'
											/>
										</div>
										<div>
											<div class='detail'>
												<p>Tenure</p>
												<p
													id='loan-period-text'
													style={{ color: "#6258A8" }}></p>
											</div>
											<input
												type='range'
												id='loan-period'
												min='1'
												max='30'
												step='1'
											/>
										</div>
										<div>
											<div class='detail'>
												<p>Interest Rate (%)</p>
												<p
													id='interest-rate-text'
													style={{ color: "#6258A8" }}></p>
											</div>
											<input
												type='range'
												id='interest-rate'
												min='1'
												max='15'
												step='0.5'
											/>
										</div>
									</div>
								</div>
								<div class='col-sm-6'>
									<div class='col-sm-6  breakup'>
										<canvas id='pieChart'></canvas>
										<div class='col-sm-12 text-center'>
											{" "}
											Your Monthly EMI Payment
										</div>
										<div class='footer'>
											<p id='price-container'>
												<span id='price'>0</span>/mo
											</p>
										</div>
									</div>
									<div class='col-sm-5 col-offset-1'>
										<div>
											<div class='loan-details'>
												<div class='chart-details'>
													<p>Principal</p>
													<p
														id='cp'
														style={{ color: "#130F31", fontSize: "17px" }}></p>
												</div>
												<div class='chart-details'>
													<p>Interest</p>
													<p
														id='ci'
														style={{ color: "#130F31", fontSize: "17px" }}></p>
												</div>
												<div class='chart-details'>
													<p>Total Payable</p>
													<p
														id='ct'
														style={{ color: "#130F31", fontSize: "17px" }}></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class='b-brands s-shadow'>
				<div class='container'>
					<h5 class='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
						FIND OUT MORE
					</h5>
					<br />
					<h2 class='s-title wow zoomInUp' data-wow-delay='0.5s'>
						BRANDS WE OFFER
					</h2>
					<div class=''>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bmwLogo.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/kia.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/volvo.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/mercLogo.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/audiLogo.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/honda.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/mg.png' alt='brand' />
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
											<br /> Sunday is closed
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
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<em>
										<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
									</em>
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-phone'></span>
									{/* <ol>+91 92509 22333<br>+91 98114 36332</ol> */}
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
};

export default EmiCalculator;
