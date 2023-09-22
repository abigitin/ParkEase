import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				if (user) {
					alert(user.email + " Login successfull !!");
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
			<form onSubmit={signIn}>
				<div className="bg-black h-screen">
					<header className="text-yellow-300 font-bold text-4xl justify-center flex pt-5">
						<p className="bg-yellow-400 text-black mx-2 rounded-sm text-2xl">
							P
						</p>
						PARK <span className="text-white mx-2"> EASE</span>
					</header>
					<div>
						<input
							id="email"
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<input
							id="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<button
							type="submit"
							id="signup"
							className="bg-yellow-400 rounded-r-md m-4"
						>
							Continue
						</button>
						<button className="bg-slate-300 rounded-r-md m-4">
							Continue with Google
						</button>
						<Link to="/signup">
							<p className="text-yellow-300">Dont have an account? Sign in</p>
						</Link>
					</div>
				</div>
			</form>
		</>
	);
}

export default Login;
