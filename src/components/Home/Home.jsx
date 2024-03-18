import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import marker from "../../images/marker.svg";
import dot from "../../images/bluemarker.png";
import { useMediaQuery } from "@react-hook/media-query";
import list from "../../../public/list.json";

function Home() {
	const [showPopup, togglePopup] = React.useState(false);
	const [Latitude, setLatitude] = useState(null);
	const [Longitude, setLongitude] = useState(null);
	const [showMap, setShowMap] = useState(true);
	const isSmallScreen = useMediaQuery("(max-width: 640px)");
	const isMediumScreen = useMediaQuery(
		"(min-width: 641px) and (max-width: 1024px)"
	);
	const [height, setHeight] = useState(535);
	const [width, setWidth] = useState(1280);

	useEffect(() => {
		if (isSmallScreen) {
			setHeight(800);
			setWidth(360);
		} else if (isMediumScreen) {
			setHeight(1800);
			setWidth(1300);
		} else {
			setHeight(535);
			setWidth(1280);
		}
	}, [isSmallScreen, isMediumScreen]);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const { latitude, longitude } = position.coords;
				setLatitude(latitude);
				setLongitude(longitude);
				setShowMap(true);
			});
		} else {
			alert("Geolocation is not available in this browser.");
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
	console.log(Longitude);
	console.log(Latitude);

	return (
		<div className="w-screen h-screen">
			{<Navbar className="h-screen" />}
			{showMap && (
				<div>
					<ReactMapGL
						mapboxAccessToken="pk.eyJ1IjoiYWJpcmZyb21raXRjaGVuIiwiYSI6ImNsanF2OWtpbzAxdWwzZHZzanpkYTByaGoifQ.5h9oEcPU2VSNjvgQmjV-AA"
						initialViewState={initialViewState}
						style={{ width: width, height: height }}
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

						{list.map((item) => (
							<Link to="/payment" key={item.id}>
								<Marker
									latitude={item.lat}
									longitude={item.long}
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
						))}
					</ReactMapGL>
				</div>
			)}
		</div>
	);
}

export default Home;
