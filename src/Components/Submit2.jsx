import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Submit2 = () => {
	const [statelist, setStateList] = useState([]);
	const [city, setCity] = useState([]);
	const [selectedstate, setSelectedstate] = useState("");
	const [selectcity, setSelectcity] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [serachresult, setSearchResult] = useState([]);
	const [code, setCode] = useState("");
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "STATE",
			// vehMake: "BMW",
			// vehModel: "220D",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData.generalMasterList[0].generalList;
				setStateList(generalList);
				console.log(generalList, "state list data");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "CITY",
			stateCode: code,

			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		// {"brandCode":"UC",
		// "countryCode":"IN",
		// "companyId":"SUSHIL",
		// "calledBy":"STATE",
		// "vehMake":"HYUNDAI",
		// "vehModel":"EMBERA",
		// "loginUserId":"RAVI",
		// "loginIpAddress":"180.151.78.50"}

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData.generalMasterList[0].generalList;
				setCity(generalList);
				// console.log(generalList, "city list data");
				console.log(jsonData, "json");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [code]);

	const handleSelectChange11 = (event) => {
		setSelectedstate(event.target.value);
		setCode(event.target.value);

		// console.log(event.target.value, "check event");
	};
	const handleSelectChange12 = (event) => {
		setSelectcity(event.target.value);
	};

	const Props = localStorage.getItem("data");
	// localStorage.removeItem("data");
	const PropsData = JSON.parse(Props);
	console.log(Props, "proData");

	const navigate = useNavigate();

	const handleSaveData = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "SUSHIL",
			branchCode: "GGN01",
			uniqueSerial: "000026",
			mobile: mobile,
			email: email,
			mfdMonth: PropsData.mfdMonth,
			firstName: name,
			source: PropsData.source,
			brand: PropsData.brand,
			model: PropsData.model,
			exteriorColor: PropsData.exteriorColor,
			variantCode: PropsData.variantCode,
			regnFormat: PropsData.regnFormat,
			regnPart1: "",
			regnPart2: "",
			regnPart3: "",
			regnPart4: "",
			regn1: PropsData.regn1,
			regn2: "",
			vehicleRegnNo: "",
			mfdYear: PropsData.mfdYear,
			fuel: PropsData.fuel,
			regnState: selectedstate,
			regnCity: selectcity,

			loginCompanyID: "SUSHIL",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(
			" https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/UpdateBasicInfo",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(Datasecond),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				toast(data.result);

				navigate("/");
				// Handle the response data here
				console.log("Response:", data);
			})
			.catch((error) => {
				// Handle any errors
				console.error("Error:", error);
			});

		console.log(Datasecond, "secontdata");
	};

	return (
		<div>
			{/* header section */}

			<div className='m-submit1' data-scrolling-animations='true'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow zoomInLeft' data-wow-delay='0.3s'>
							Submit Your Vehicle
						</h1>
					</div>
				</section>

				<div className='b-breadCumbs s-shadow'>
					<div className='container wow zoomInUp' data-wow-delay='0.5s'>
						<a href='home.html' className='b-breadCumbs__page'>
							Home
						</a>
						<span className='fa fa-angle-right'></span>
						<a href='submit1.html' className='b-breadCumbs__page m-active'>
							Submit a Vehicle
						</a>
					</div>
				</div>
			</div>

			<div className='b-submit'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-4 col-sm-5 col-xs-6'>
							<aside className='b-submit__aside'>
								<div
									className='b-submit__aside-step m-active wow zoomInUp'
									data-wow-delay='0.3s'>
									<h3>Step 1</h3>
									<div className='b-submit__aside-step-inner m-active clearfix'>
										<div className='b-submit__aside-step-inner-icon'>
											<span className='fa fa-car'></span>
										</div>
										<div className='b-submit__aside-step-inner-info'>
											<h4>Add YOUR Vehicle</h4>
											<p>Select your vehicle &amp; add info</p>
											<div className='b-submit__aside-step-inner-info-triangle'></div>
										</div>
									</div>
								</div>

								<div
									className='b-submit__aside-step m-active wow zoomInUp'
									data-wow-delay='0.3s'>
									<h3>Step 2</h3>
									<div className='b-submit__aside-step-inner m-active clearfix'>
										<div className='b-submit__aside-step-inner-icon'>
											<span className='fa fa-user'></span>
										</div>
										<div className='b-submit__aside-step-inner-info'>
											<h4>Contact Details</h4>
											<p>Choose vehicle specifications</p>
											<div className='b-submit__aside-step-inner-info-triangle'></div>
										</div>
									</div>
								</div>
							</aside>
						</div>
						<div className='col-lg-9 col-md-8 col-sm-7 col-xs-6'>
							<div className='b-submit__main'>
								<form className='s-submit' onSubmit={handleSaveData}>
									<div
										className='b-submit__main-contacts wow zoomInUp'
										data-wow-delay='0.3s'>
										<header className='s-headerSubmit s-lineDownLeft'>
											<h2>Contact Details</h2>
										</header>

										<div className='row'>
											<div className='col-md-6 col-xs-12'>
												<div className='b-submit__main-element'>
													<label style={{ color: "black" }}>
														Name <span>*</span>
													</label>
													<input
														type='text'
														name='name'
														onChange={(e) => setname(e.target.value)}
													/>
												</div>
											</div>
											<div className='col-md-6 col-xs-12'>
												<div className='b-submit__main-element'>
													<label style={{ color: "black" }}>
														Email Id <span>*</span>
													</label>
													<input
														type='text'
														name='email'
														onChange={(e) => setemail(e.target.value)}
													/>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-md-6 col-xs-12'>
												<div className='b-submit__main-element'>
													<label style={{ color: "black" }}>
														Enter Your Phone Number <span>*</span>
													</label>
													<input
														type='text'
														name='mobile'
														onChange={(e) => setmobile(e.target.value)}
													/>
												</div>
											</div>
											<div className='col-md-6 col-xs-12'>
												<div
													className='b-submit__main-element wow zoomInUp'
													data-wow-delay='0.5s'>
													<label style={{ color: "black" }}>
														State <span>*</span>
													</label>
													<div className='s-relative'>
														<select
															className='m-select'
															value={selectedstate}
															onChange={handleSelectChange11}>
															<option value='regnCity'>Select an item</option>
															{statelist.map((item, index) => (
																<option key={index} value={item.code}>
																	{item.description}
																</option>
															))}
														</select>
														<span className='fa fa-caret-down'></span>
													</div>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-md-6 col-xs-12'>
												<div
													className='b-submit__main-element wow zoomInUp'
													data-wow-delay='0.5s'>
													<label style={{ color: "black" }}>
														City <span>*</span>
													</label>
													<div className='s-relative'>
														<select
															className='m-select'
															value={selectcity}
															onChange={handleSelectChange12}>
															<option value='regnCity'>Select an item</option>
															{city.map((item, index) => (
																<option key={index} value={item.code}>
																	{item.description}
																</option>
															))}
														</select>
														<span className='fa fa-caret-down'></span>
													</div>
												</div>
											</div>
										</div>

										<div className='b-submit__main-contacts-check m-check'>
											<input type='checkbox' name='check3' id='check3' />
											<label className='s-submitCheckLabel' for='check3'>
												<span className='fa fa-check'></span>
											</label>
											<label className='s-submitCheck' for='check3'>
												<Link to='/contact'>
													Show Location On Google Maps to Buyers
												</Link>
											</label>
										</div>
									</div>
									<div className='row '>
										<div className='col-6'>
											<Link
												to='/salecar'
												style={{ backgroundColor: "#f76d2b" }}
												type='submit'
												className='btn m-btn pull-right wow zoomInUp btn-danger'
												data-wow-delay='0.3s'>
												Click to &amp; Back
												<span className='fa fa-angle-left'></span>
											</Link>
										</div>
										<div className='col-6'>
											<button
												style={{ backgroundColor: "#f76d2b" }}
												type='submit'
												className='btn m-btn pull-right wow zoomInUp btn-danger'
												data-wow-delay='0.3s'>
												Click to &amp; Raise Request
												<span className='fa fa-angle-right'></span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* footer section */}

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
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive.
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
										Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing
										Road Pincode 121006
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
	);
};

export default Submit2;
