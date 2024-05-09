import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/reservations" element={<Reservations />} />
				<Route path="/order" element={<OrderOnline />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
