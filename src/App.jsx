import SignIn from "./components/AUTH/SignIn";
import SignUp from "./components/AUTH/SignUp";
import Home from "./components/Home/Home";
import Payment from "./components/PAY/Payment";
import Paymentscs from "./components/PAY/PaymentSuccess";
import Info from "./components/Info";
import Front from "./components/Front";
import DropdownMenu from "./components/Home/Dropdown";

import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Front />} />
					<Route path="/front" element={<Front />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/home" element={<Home />} />
					<Route path="/payment" element={<Payment />} />
					<Route path="/scs" element={<Paymentscs />} />
					<Route path="/info" element={<Info />} />
					<Route path="/drop" element={<DropdownMenu />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
