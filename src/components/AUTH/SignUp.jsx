import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loginImg from "../../images/loginImg.png";
import apple_icon from "../../images/apple_icon.png";
import facebookIcon from "../../images/facebook_icon.png";
import googleIcon from "../../images/google_icon.png";

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
		
					<p className="text-yellow-400 text-4xl text-left font-bold text-center pt-7	">
						Sign Up
					</p>
					<div className="block justify-center items-center ">
						<div className="flex justify-center items-center ml-10 mt-6 w-3/4">
							<input 
							type="text"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="fullname"
							placeholder="Full Name" />
						</div>

						<div className="flex justify-center items-center ml-10 mt-2 w-3/4">
						<input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
						</div>
                
						<div className="flex justify-center items-center ml-10 mt-2 w-3/4">
						<input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
						</div>

                       <p className="text-yellow-400 text-center text-2xl">Sign in with</p>
                        <div className="flex  w-[10rem]  justify-center gap-5 ml-[7rem] mt-3">
							<a href="" className=""><img  src={apple_icon} alt="appleIcon" /></a>
							<a href="" className=""><img src={facebookIcon} alt="facebookIcon" /></a>
							<a href="" className=""><img src={googleIcon} alt="googleIcon" /></a>
						</div>
						<div className="flex justify-center items-center">
							<button
								type="submit"
								id="signup"
								className="bg-yellow-400 rounded-md m-4 mb-0 w-4/5 py-2 text-2xl"
							>
								Sign Up
							</button>
						</div>
						<p className="text-white mt-4 text-center tracking-widest text-lg">
							Already have an account? <span className="text-yellow-400">Login</span>
						</p>
						
					</div>
				</div>
			</form>
		</>
	);
}

export default SignUp;
