import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import marker from "../../images/marker.svg";
import dot from "../../images/bluemarker.png";
function Home() {
	const [showPopup, togglePopup] = React.useState(false);
	const [Latitude, setLatitude] = useState(null);
	const [Longitude, setLongitude] = useState(null);
	const [showMap, setShowMap] = useState(true);
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const { latitude, longitude } = position.coords;
				setLatitude(latitude);
				setLongitude(longitude);
				setShowMap(true);
			});
		} else {
			console.log("Geolocation is not available in this browser.");
			setShowMap(true);
		}
	}, []);
	const defaultLatitude = 22.521196498344402;
	const defaultLongitude = 88.46075746320318;

	const initialViewState = {
		longitude: Longitude || defaultLongitude,
		latitude: Latitude || defaultLatitude,
		zoom: 16,
	};
	return (
		<div className="w-screen">
			{<Navbar />}
			{showMap && (
				<div>
					<ReactMapGL
						mapboxAccessToken="pk.eyJ1IjoiYWJpcmZyb21raXRjaGVuIiwiYSI6ImNsanF2OWtpbzAxdWwzZHZzanpkYTByaGoifQ.5h9oEcPU2VSNjvgQmjV-AA"
						initialViewState={initialViewState}
						style={{ width: 500, height: 800 }}
						mapStyle="mapbox://styles/mapbox/outdoors-v12"
					>
						{showPopup && (
							<Popup
								latitude={Latitude}
								longitude={Longitude}
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
							latitude={Latitude}
							longitude={Longitude}
							offsetLeft={-20}
							offsetTop={-30}
						>
							<img
								onClick={() => togglePopup(true)}
								style={{ height: 50, width: 50 }}
								src={dot}
								alt="Marker"
							/>
						</Marker>
					</ReactMapGL>
				</div>
			)}
		</div>
	);
}

export default Home;
