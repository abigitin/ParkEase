import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
					<h1 className="text-yellow-300 font-mono text-3xl flex justify-center">
						Sign-Up
					</h1>
					<div className="flex justify-center space-y-2 space-x-3">
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
					</div>
				</div>
			</form>
		</>
	);
}

export default SignUp;
