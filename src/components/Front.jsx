import { Link } from "react-router-dom";
function Front() {
	return (
		<>
			<div className="h-screen bg-black">
				<div className="flex justify-center pt-44">
					<button className="text-8xl bg-yellow-400 rounded-lg p-3 font-bold px-6">
						P
					</button>
				</div>
				<div className="flex justify-center text-4xl font-bold pt-3">
					<p className="text-yellow-300">
						PARK <span className="text-white">EASE</span>
					</p>
				</div>
				<div className="text-white text-2xl flex justify-center pt-3 bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
					<p>Park Smarter, Travel Easier</p>
				</div>
				<Link to="/signin">
					<div className="flex justify-center pt-60 ">
						<button className="bg-yellow-400 px-24 py-3 rounded-lg text-white text-2xl font-semibold">
							Get Started
						</button>
					</div>
				</Link>
			</div>
		</>
	);
}

export default Front;
