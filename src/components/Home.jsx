import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
function Home() {
	const [showPopup, togglePopup] = React.useState(false);
	const [latitude, setLatitude] = useState(22.52157539555119);
	const [longitude, setLongitude] = useState(88.46090970473738);
	// 22.52157539555119, 88.46090970473738
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const { latitude, longitude } = position.coords;
				setLatitude(latitude);
				setLongitude(longitude);
			});
		} else {
			console.log("Geolocation is not available in this browser.");
		}
	}, []);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	// Define the mobile menu items
	const mobileMenuItems = [
		{ text: "Home", link: "#" },
		{ text: "About", link: "#" },
		{ text: "Services", link: "#" },
		{ text: "Contact", link: "#" },
	];
	return (
		<div className="w-screen">
			<nav className="bg-blue-500 p-4">
				<div className="container mx-auto flex items-center justify-between">
					{/* Hamburger Icon (Always Visible) */}
					<div className="block sm:hidden">
						<button
							onClick={toggleMobileMenu}
							className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>

					{/* Mobile Menu (Always Visible) */}
					<div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
						<ul className="text-white mt-2">
							{mobileMenuItems.map((item, index) => (
								<li key={index} className="mb-2">
									<a href={item.link} className="hover:underline">
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Search Bar (Always Visible) */}
					<div className="block sm:hidden">
						<input
							type="text"
							placeholder="Search..."
							className="px-2 py-1 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
						/>
					</div>

					{/* Desktop Menu (Hidden on Small Screens) */}
					<div className="hidden sm:block">
						<ul className="text-white">
							<li className="ml-4">
								<a href="#" className="hover:underline">
									Home
								</a>
							</li>
							<li className="ml-4">
								<a href="#" className="hover:underline">
									About
								</a>
							</li>
							<li className="ml-4">
								<a href="#" className="hover:underline">
									Services
								</a>
							</li>
							<li className="ml-4">
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="h-screen">
				<ReactMapGL
					mapboxAccessToken="pk.eyJ1IjoiYWJpcmZyb21raXRjaGVuIiwiYSI6ImNsanF2OWtpbzAxdWwzZHZzanpkYTByaGoifQ.5h9oEcPU2VSNjvgQmjV-AA"
					initialViewState={{
						longitude: longitude,
						latitude: latitude,
						zoom: 16,
					}}
					style={{ width: 500, height: 900 }}
					mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
				>
					{showPopup && (
						<Popup
							latitude={22.521471845739487}
							longitude={88.46093008586243}
							closeButton={true}
							closeOnClick={true}
							onClose={() => togglePopup(false)}
							anchor="top"
						>
							<div>Pop up marker</div>
						</Popup>
					)}
					<Link to="/payment">
						<Marker
							latitude={22.52161900483102}
							longitude={88.46066619912584}
							offsetLeft={-20}
							offsetTop={-30}
						>
							<img
								onClick={() => togglePopup(true)}
								style={{ height: 50, width: 50 }}
								src="https://pngimg.com/uploads/parking/parking_PNG36.png"
								alt="Marker"
							/>
						</Marker>
					</Link>
					<Link to="/payment">
						<Marker
							latitude={22.52155351254053}
							longitude={88.46106639143785}
							offsetLeft={-20}
							offsetTop={-30}
						>
							<img
								onClick={() => togglePopup(true)}
								style={{ height: 50, width: 50 }}
								src="https://pngimg.com/uploads/parking/parking_PNG36.png"
								alt="Marker"
							/>
						</Marker>
					</Link>
					<Link to="/payment">
						<Marker
							latitude={22.52129323874589}
							longitude={88.46096157542934}
							offsetLeft={-20}
							offsetTop={-30}
						>
							<img
								onClick={() => togglePopup(true)}
								style={{ height: 50, width: 50 }}
								src="https://pngimg.com/uploads/parking/parking_PNG36.png"
								alt="Marker"
							/>
						</Marker>
					</Link>
					<Link to="/payment">
						<Marker
							latitude={22.521270077343388}
							longitude={88.46058335870772}
							offsetLeft={-20}
							offsetTop={-30}
						>
							<img
								onClick={() => togglePopup(true)}
								style={{ height: 50, width: 50 }}
								src="https://pngimg.com/uploads/parking/parking_PNG36.png"
								alt="Marker"
							/>
						</Marker>
					</Link>
				</ReactMapGL>
			</div>
		</div>
	);
}

export default Home;
