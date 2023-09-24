import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Info() {
	const navigate = useNavigate();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_st148ib",
				"template_xiq9t09",
				e.target,
				"QZF3922cHVYiU_QnD"
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		navigate("/scs");
	};
	return (
		<>
			<form className="bg-black h-screen" onSubmit={sendEmail}>
				<div className="content-center">
					<h1 className="text-center text-yellow-300 py-2 text-3xl font-bold font-mono">
						INFO
					</h1>
					<div className="block items-center justify-center my-4">
						<input
							className="rounded-lg my-3"
							name="name"
							type="text"
							placeholder="Enter your name"
						/>
						<input
							className="rounded-lg my-3"
							name="user_email"
							type="email"
							placeholder="Enter your email"
						/>
						<input
							className="rounded-lg my-3"
							name="car"
							type="text"
							placeholder="Enter your car no."
						/>
						<input
							className="invisible"
							name="price"
							type="number"
							value="50"
						/>

						<input
							type="submit"
							className="bg-yellow-300 rounded-lg my-3 absolute"
							value="Submit"
						/>
					</div>
				</div>
			</form>
		</>
	);
}

export default Info;
