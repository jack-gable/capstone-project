import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import BookingPage from "./components/BookingPage";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/reservations" element={<BookingPage />} />
				<Route path="/confirmation" element={<ConfirmationPage />} />
				<Route path="/order" element={<OrderOnline />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
