import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import marker from "../../images/marker.svg";
import image from "../../images/bluedot.png";
function Home() {
	const [showPopup, togglePopup] = React.useState(false);
	const [latitude, setLatitude] = useState(22.52157539555119);
	const [longitude, setLongitude] = useState(88.46090970473738);
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
	return (
		<div className="w-screen">
			<Navbar />
			<div>
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
								src={marker}
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
								src={marker}
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
								src={marker}
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
								src={marker}
								alt="Marker"
							/>
						</Marker>
					</Link>
					<Marker
						latitude={22.521440109794064}
						longitude={88.46072789931833}
						offsetLeft={-20}
						offsetTop={-30}
					>
						<img
							onClick={() => togglePopup(true)}
							style={{ height: 20, width: 20 }}
							src={image}
							alt="Marker"
						/>
					</Marker>
				</ReactMapGL>
			</div>
		</div>
	);
}

export default Home;
