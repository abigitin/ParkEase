import SignIn from "./components/AUTH/SignIn";
import SignUp from "./components/AUTH/SignUp";
import Home from "./components/Home";
import Payment from "./components/Payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
