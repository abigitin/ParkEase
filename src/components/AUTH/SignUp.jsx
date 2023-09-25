import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loginImg from "../../images/loginImg.png";
import { Link } from "react-router-dom";
const firebaseConfig = {
	apiKey: "AIzaSyC7q9dDSeSXr9KfAbA9CL0zy6-7zBoop_w",
	authDomain: "parkease-login-e90c0.firebaseapp.com",
	databaseURL: "https://parkease-login-e90c0-default-rtdb.firebaseio.com",
	projectId: "parkease-login-e90c0",
	storageBucket: "parkease-login-e90c0.appspot.com",
	messagingSenderId: "489249405557",
	appId: "1:489249405557:web:7b12bbcee11ebf1691963c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const signUp = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				if (user) {
					alert("Registration successfull!!");
					navigate("/home");
				}
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
				alert(errorMessage);
			});
	};
	return (
		<>
			<form onSubmit={signUp}>
				<div className="bg-black h-screen">
					<header className="text-yellow-300 font-bold text-3xl justify-center flex pt-6">
						<p className="bg-yellow-400 text-black mx-2 rounded-sm text-2xl">
							P
						</p>
						PARK <span className="text-white mx-2"> EASE</span>
					</header>
					<div className="flex items-center justify-center">
						<img src={loginImg} className="h-72 w-full" alt="Login image" />
					</div>
					<p className="text-yellow-400 text-4xl font-bold text-center pt-6">
						Sign Up
					</p>
					<div className="block justify-center items-center ">
						<div className="flex justify-center items-center ml-10 mt-6 w-3/4">
							<input
								id="email"
								type="email"
								placeholder="Email"
								value={email}
								className="block border border-grey-light w-full p-3 rounded mb-4"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						<div className="flex justify-center items-center ml-10 mt-2 w-3/4">
							<input
								id="password"
								type="password"
								placeholder="Password"
								value={password}
								className="block border border-grey-light w-full p-3 rounded mb-4"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<div className="flex justify-center items-center">
							<button
								type="submit"
								id="signup"
								className="bg-yellow-400 rounded-md mb-3 px-5 py-2 text-2xl"
							>
								Sign Up
							</button>
						</div>
						<Link to="/">
							<p className="text-white mt-2 text-center text-lg">
								Already have an account?{" "}
								<span className="text-yellow-400">Login</span>
							</p>
						</Link>
					</div>
				</div>
			</form>
		</>
	);
}

export default SignUp;
