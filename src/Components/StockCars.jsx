import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StockCars = () => {
	const [stockdata, setStockdata] = useState([]);
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

	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarVehStockDetail";
			const headers = {
				ApplicationMode: "ONLINE",
				EnvironmentType: "DEMO",
				BrandCode: "UC",
				CountryCode: "IN",
				"Content-Type": "application/json",
			};
			const data = {
				brandCode: "UC",
				countryCode: "IN",
				companyId: "SUSHIL",
				budgetFrom: 0,
				budgetTo: 2000000,
				vehBrandCode: "ALL",
				vehModelCode: "HECTOR",
				vehFuel: "PETROL",
				loginCompanyID: "ORBIT",
				loginUserId: "SULTAN",
				loginIpAddress: "192.168.10.32",
			};

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: headers,
					body: JSON.stringify(data),
				});

				if (response.ok) {
					const responseData = await response.json();
					setStockdata(responseData?.UsedCarVehStockDetail);
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{/* body stucture */}

			<div
				class='m-listTableTwo'
				data-scrolling-animations='true'
				data-equal-height='.b-items__cell'>
				<div id='page-preloader'>
					<span class='spinner'></span>
				</div>

				<section class='b-pageHeader'>
					<div class='container'>
						<h1 class='wow zoomInLeft' data-wow-delay='0.5s'>
							Auto Listings
						</h1>
						<div
							class='b-pageHeader__search wow zoomInRight'
							data-wow-delay='0.5s'>
							<h3>Your search returned 28 results</h3>
						</div>
					</div>
				</section>

				<div class='b-breadCumbs s-shadow'>
					<div class='container wow zoomInUp' data-wow-delay='0.5s'>
						<a href='home.html' class='b-breadCumbs__page'>
							Home
						</a>
						<span class='fa fa-angle-right'></span>
						<a href='listTableTwo.html' class='b-breadCumbs__page m-active'>
							Search Results
						</a>
					</div>
				</div>

				{/* body details cars */}

				<div class='b-items'>
					<div class='container'>
						{/* <div class='row'>
							<div class='col-lg-12 col-sm-12 col-xs-12'>
								<div class='row m-border'>
									<div
										class='col-lg-3 col-md-3 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/jeep.jpg'
													alt='jeep'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															JEEP COMPASS MODEL S (O) DIESEL 4X4 AT
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2021
															</span>
															<span class='b-items__cars-one-info-value'>
																Red
															</span>
															<span class='b-items__cars-one-info-value'>
																30,000 KM
															</span>
															<span class='b-items__cars-one-info-value'>
																Diesel
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>25,00,000
												</h5>
											</div>
										</div>
									</div>

									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/creta.jpg'
													alt='hyundai'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															HYUNDAI CRETA S PLUS 1.6 AT CRDI
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2019
															</span>
															<span class='b-items__cars-one-info-value'>
																White
															</span>
															<span class='b-items__cars-one-info-value'>
																33,000 KM
															</span>
															<span class='b-items__cars-one-info-value'>
																Diesel
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>11,75,000
												</h5>
											</div>
										</div>
									</div>
									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/mg-hector.jpg'
													alt='mg'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															MORRIS GARAGE HECTOR SHARP 1.5 PETROL CVT
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2021
															</span>
															<span class='b-items__cars-one-info-value'>
																Red
															</span>
															<span class='b-items__cars-one-info-value'>
																33,000 KM
															</span>
															<span class='b-items__cars-one-info-value'>
																{" "}
																Petrol
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>16,75,000
												</h5>
											</div>
										</div>
									</div>
									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/ciaz.jpg'
													alt='mg'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															MARUTI SUZUKI CIAZ DELTA 1.3 HYBRID
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2017
															</span>
															<span class='b-items__cars-one-info-value'>
																White
															</span>
															<span class='b-items__cars-one-info-value'>
																39,000 KM
															</span>
															<span class='b-items__cars-one-info-value'>
																Diesel
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>6,75,000
												</h5>
											</div>
										</div>
									</div>
									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/merc-220.jpg'
													alt='ciaz'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															MERCEDES BENZ GLC 220 D CBU
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2017
															</span>
															<span class='b-items__cars-one-info-value'>
																Silver
															</span>
															<span class='b-items__cars-one-info-value'>
																56000 KM
															</span>
															<span class='b-items__cars-one-info-value'>
																Diesel
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>38,00,000
												</h5>
											</div>
										</div>
									</div>
									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/mg-black.jpg'
													alt='chevrolet'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															MORRIS GARAGE HECTOR SHARP HYBRID 1.5 PETROL
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2020
															</span>
															<span class='b-items__cars-one-info-value'>
																Black
															</span>
															<span class='b-items__cars-one-info-value'>
																21500 KM
															</span>
															<span class='b-items__cars-one-info-value'>
																Petrol
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>16,25,000
												</h5>
											</div>
										</div>
									</div>
									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/audi.jpg'
													alt='audi'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															AUDI Q7 3.0 TDI QUATTRO PREMIUM
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2012
															</span>
															<span class='b-items__cars-one-info-value'>
																Silver
															</span>
															<span class='b-items__cars-one-info-value'>
																{" "}
																88000
															</span>
															<span class='b-items__cars-one-info-value'>
																Diesel
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i> 15,90,000
												</h5>
											</div>
										</div>
									</div>
									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/merc-a-class.jpg'
													alt='merc'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															MERCEDES BENZ A-CLASS LIMOUSINE 200D
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2022
															</span>
															<span class='b-items__cars-one-info-value'>
																Grey
															</span>
															<span class='b-items__cars-one-info-value'>
																{" "}
																8000
															</span>
															<span class='b-items__cars-one-info-value'>
																Diesel
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>41,45,000
												</h5>
											</div>
										</div>
									</div>
									<div
										class='col-lg-4 col-md-6 col-xs-12 wow zoomInUp'
										data-wow-delay='0.5s'>
										<div class='b-items__cell'>
											<div class='b-items__cars-one-img'>
												<img
													class='img-responsive'
													src='media/gallary-images/hyundai-tucson.jpg'
													alt='hyundai'
												/>
											</div>
											<div class='b-items__cell-info'>
												<div class='s-lineDownLeft b-items__cell-info-title'>
													<h2 class=''>
														<a href='detail.html'>
															HYUNDAI TUCSON 2WD AT GL DIESEL
														</a>
													</h2>
												</div>

												<div>
													<div class='row m-smallPadding'>
														<div class='col-xs-5'>
															<span class='b-items__cars-one-info-title'>
																Model Year:
															</span>
															<span class='b-items__cars-one-info-title'>
																Color:
															</span>
															<span class='b-items__cars-one-info-title'>
																Kms Done:
															</span>
															<span class='b-items__cars-one-info-title'>
																{" "}
																Fuel Type:
															</span>
														</div>
														<div class='col-xs-7'>
															<span class='b-items__cars-one-info-value'>
																2018
															</span>
															<span class='b-items__cars-one-info-value'>
																White
															</span>
															<span class='b-items__cars-one-info-value'>
																{" "}
																80000 KM
															</span>
															<span class='b-items__cars-one-info-value'>
																Diesel
															</span>
														</div>
													</div>
												</div>
												<h5 class='b-items__cell-info-price'>
													<span style={{ color: "black" }}>Price:</span>
													<i class='fa fa-rupee'></i>13,95,000
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}

						<div className='b-auto__main'>
							<Row xs={12} md={4}>
								{stockdata.map((item) => (
									<div key={item.uniqueSerial}>
										{item?.modelImages.length > 0 &&
											console.log(item?.modelImages[0].uri, "image details")}

										{/* {console.log(item?.modelImages, "item")} */}
										<Col>
											<div class=' wow zoomInUp' data-wow-delay='0.5s'>
												<div class='b-items__cell'>
													<div class='b-items__cars-one-img'>
														{item?.modelImages.length > 0 &&
															console.log(
																item?.modelImages[0].uri,
																"image details"
															)}
														<img
															class='img-responsive'
															src={
																item?.modelImages.length > 0 &&
																item?.modelImages[0].uri
															}
															alt='jeep'
														/>
													</div>
													<div class='b-items__cell-info'>
														<div class='s-lineDownLeft b-items__cell-info-title'>
															<h2 class=''>
																<a href='detail.html'>{item.vehBrandCode}</a>
															</h2>
														</div>

														<div>
															<div class='d-flex m-smallPadding'>
																<div class=''>
																	<span class='b-items__cars-one-info-title'>
																		Model Year:
																	</span>
																	<span class='b-items__cars-one-info-title'>
																		Color:
																	</span>
																	<span class='b-items__cars-one-info-title'>
																		Kms Done:
																	</span>
																	<span class='b-items__cars-one-info-title'>
																		Fuel Type:
																	</span>
																</div>
																<div class='col-xs-7'>
																	<span class='b-items__cars-one-info-value'>
																		{item.vehManufactureYear}
																	</span>
																	<span class='b-items__cars-one-info-value'>
																		{item.exteriorColor}
																	</span>
																	<span class='b-items__cars-one-info-value'>
																		{item.vehOdometer}KM
																	</span>
																	<span class='b-items__cars-one-info-value'>
																		{item.vehFuelCode}
																		Diesel
																	</span>
																</div>
															</div>
														</div>
														{/* <h5 class='b-items__cell-info-price'>
															<span style={{ color: "black" }}>Price:</span>
															<i class='fa fa-rupee'></i>25,00,000
														</h5> */}
													</div>
												</div>
											</div>
										</Col>
									</div>
								))}
							</Row>
						</div>

						<div class='b-items__pagination'>
							<div
								class='b-items__pagination-main wow zoomInUp'
								data-wow-delay='0.5s'>
								<a
									data-toggle='modal'
									data-target='#myModal'
									href='#'
									class='m-left'>
									<span class='fa fa-angle-left'></span>
								</a>
								<span class='m-active'>
									<a href='#'>1</a>
								</span>
								<span>
									<a href='#'>2</a>
								</span>
								<span>
									<a href='#'>3</a>
								</span>
								<span>
									<a href='#'>4</a>
								</span>
								<a href='#' class='m-right'>
									<span class='fa fa-angle-right'></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

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
			{/* <!--b-features--> */}

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
		</div>
	);
};

export default StockCars;
