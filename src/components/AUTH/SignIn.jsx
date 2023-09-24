import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import loginImg from "../../images/loginImg.png";
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
		<div className=" bg-black h-screen ">
			<form onSubmit={signIn}>
				<div>
					<header className="text-yellow-300 font-bold text-3xl justify-center flex pt-6 tracking-wide">
						<p className="bg-yellow-400 font-sans text-black mx-2 rounded-sm text-2xl">
							P
						</p>
						PARK <span className="text-white mx-2"> EASE</span>
					</header>
					<div className="flex items-center justify-center">
						<img src={loginImg} className="h-72 w-full" alt="Login image" />
					</div>

					<p className="text-yellow-400 text-4xl text-left font-bold text-center pt-6	">
						Log In
					</p>
					<div className="block items-center justify-center my-4">
						<div className="flex justify-center items-center mb-3">
							<input
								id="email"
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						<div className="flex justify-center items-center mb-3">
							<input
								id="password"
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						<p className="text-white text-center font-bold">Forget Password?</p>
						<div className="flex justify-center items-center">
							<button
								type="submit"
								id="signup"
								className="bg-yellow-400 rounded-md m-4 mb-0 w-4/5 py-2"
							>
								Continue
							</button>
						</div>
						<div className="flex justify-center items-center">
							<button className="bg-slate-300 rounded-md m-4 w-4/5 py-2">
								Continue with Google
							</button>
						</div>
						<div className="flex justify-center items-center">
							<Link to="/signup">
								<p className="text-yellow-300">Dont have an account? Sign up</p>
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
