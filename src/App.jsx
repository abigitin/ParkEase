import Login from "./components/Login";
import Home from "./components/Home";
import Payment from "./components/Payment";


import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
