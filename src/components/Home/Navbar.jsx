import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuItems = [
    { text: "Home", link: "#" },
    { text: "About", link: "#" },
    { text: "Services", link: "#" },
    { text: "Contact", link: "#" },
  ];

  return (
    <div>
      <nav className="bg-yellow-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="block sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:text-white focus:outline-none focus:text-white"
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

          <div
            className={`absolute top-0 right-0 h-full bg-yellow-500 transition-all duration-300 z-20 ${
              isMobileMenuOpen ? "w-64" : "w-0"
            } sm:hidden lg:hidden`}
          >
            <ul className="text-black py-4 sm:flex-1 sm:justify-end sm:space-x-4 sm:mr-4">
              {mobileMenuItems.map((item, index) => (
                <li key={index} className="mb-2 ml-4 py-6 sm:mb-0">
                  <a href={item.link} className="hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* (Search Bar)
          <div className="sm:justify-center items-center flex">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
            />
          </div> */}

          {/* Desktop Menu (Hidden on Small Screens) */}
          <div className="hidden sm:flex sm:justify-end">
            <ul className="text-black flex justify-end">
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
