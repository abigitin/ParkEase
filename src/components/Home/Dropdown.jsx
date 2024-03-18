// import { useState } from "react";
import list from "../../../public/list.json";
import { useState } from "react";

const DropdownMenu = () => {
	const [city, setCity] = useState("");

	const handleChange = (event) => {
		setCity(event.target.value);
	};

	return (
		<div>
			<input
				list="city"
				id="cityInput"
				placeholder="Enter City Name"
				className="w-44 sm:w-80 rounded-md border-2 border-black"
				value={city}
				onChange={handleChange}
			/>
			<datalist id="city">
				{list.map((item) => (
					<option value={item.cap} key={item.cap}></option>
				))}
			</datalist>
		</div>
	);
};

export default DropdownMenu;
