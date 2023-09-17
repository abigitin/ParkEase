import { Link } from "react-router-dom";
function Login() {
	return (
		<>
			<div className="flex justify-center bg-yellow-500 text-white font-bold text-6xl h-16">
				Welcome to ParkEase
			</div>
			<div>
				<Link to="/Home">
					<button>Click Me</button>
				</Link>
			</div>
		</>
	);
}

export default Login;
