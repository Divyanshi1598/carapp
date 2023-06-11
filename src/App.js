// import "./styles.css";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Gellery from "./Components/Gellery";
import Contact from "./Components/Contact";
import Submit1 from "./Components/Submit1";
import ListTableTwo from "./Components/ListTableTwo";
import Details from "./Components/Details";
import Insurance from "./Components/Insurance";
import Navbar from "./Components/Navbar";
import EmiCalculator from "./Components/EmiCalculator";
import Submit2 from "./Components/Submit2";
import { Toaster } from "react-hot-toast";
import HomePage from "./Components/HomePage";
import StockCars from "./Components/StockCars";
import Notification from "./Components/Notification";


export default function App() {
	return (
		<div className='overflow-auto'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<HomePage />} exact />
				<Route path='/insurence' element={<Insurance />} />
				<Route path='/about' element={<About />} />
				<Route path='/salecar' element={<Submit1 />} />
				<Route path='/buycar' element={<ListTableTwo />} />
				<Route path='/notification' elemet={<Notification />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/detailsdata' element={<StockCars />} />
				<Route path='/details' element={<Details />} />
				<Route path='/emical' element={<EmiCalculator />} />
				<Route path='/submit2' element={<Submit2 />} />
			</Routes>{" "}
			<div>
				<Toaster
					position='top-right'
					toastOptions={{
						success: {
							style: {
								background: "#05A677",
								color: "#fff",
							},
						},
						info: {
							style: {
								background: "#0948B3",
								color: "#fff",
							},
						},
						error: {
							style: {
								background: "#FA5252",
								color: "#fff",
							},
						},
					}}
				/>{" "}
			</div>{" "}
		</div>
	);
}
