import React from "react";
import { motion } from "framer-motion";

function PaymentSuccessful() {
  return (
    <div className="bg-black h-screen  justify-center items-center">
      <header className="text-yellow-300 font-bold text-3xl justify-center flex pt-6 py-8">
        <p className="bg-yellow-400 text-black mx-2 rounded-sm text-2xl">P</p>
        PARK <span className="text-white mx-2">EASE</span>
      </header>

     
      <motion.div
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 1.0 }} 
        className="text-center"
      >
		<div className=" flex justify-center my-16 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
          
          <circle cx="50" cy="50" r="50" fill="#FFD700" />

          <polyline
            points="38 50 45 58 62 42"
            stroke="#FFFFFF"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
		</div>
        
        <h2 className="text-yellow-300 text-3xl font-semibold mt-12">Payment Successful!</h2>
        <p className="mt-4 text-gray-600">Your payment has been successfully processed.</p>
      </motion.div>

      
      <div className="flex justify-center items-center py-80">
							<button
								type="submit"
								id="home"
								className="bg-yellow-400 rounded-md m-4 mb-0 w-4/5 py-2"
							>
								Back
							</button>
						</div>
    </div>
  );
}

export default PaymentSuccessful;
