import { useState } from "react";

function Navbar() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	// Define the mobile menu items
	const mobileMenuItems = [
		{ text: "Home", link: "#" },
		{ text: "About", link: "#" },
		{ text: "Services", link: "#" },
		{ text: "Contact", link: "#" },
	];
	return (
		<div>
			<nav className="bg-blue-500 p-4">
				<div className="container mx-auto flex items-center justify-between">
					{/* Hamburger Icon (Always Visible) */}
					<div className="block sm:hidden">
						<button
							onClick={toggleMobileMenu}
							className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>

					{/* Mobile Menu (Always Visible) */}
					<div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
						<ul className="text-white mt-2">
							{mobileMenuItems.map((item, index) => (
								<li key={index} className="mb-2">
									<a href={item.link} className="hover:underline">
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Search Bar (Always Visible) */}
					<div className="block sm:hidden">
						<input
							type="text"
							placeholder="Search..."
							className="px-2 py-1 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
						/>
					</div>

					{/* Desktop Menu (Hidden on Small Screens) */}
					<div className="hidden sm:block">
						<ul className="text-white">
							<li className="ml-4">
								<a href="#" className="hover:underline">
									Home
								</a>
							</li>
							<li className="ml-4">
								<a href="#" className="hover:underline">
									About
								</a>
							</li>
							<li className="ml-4">
								<a href="#" className="hover:underline">
									Services
								</a>
							</li>
							<li className="ml-4">
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
