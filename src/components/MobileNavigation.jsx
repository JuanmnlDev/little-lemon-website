import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { IoMdCloseCircleOutline, IoMdMenu } from "react-icons/io";
import UserNavigation from "./UserNavigation";

const MobileNavigation = () => {
	const [open, setOpen] = useState(false); // Start with the menu closed

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			{/* Toggle button */}
			<button
				className="fixed top-4 right-4 z-50 bg-gray-600 text-white p-2 rounded-md"
				onClick={toggleMenu}
			>
				<IoMdMenu size={24} />
			</button>

			{/* Sliding navigation */}
			<div
				className={twMerge(
					"navigation py-6 h-screen fixed top-0 w-3/4 bg-white shadow-lg transition-transform duration-300 z-40",
					open ? "translate-x-0" : "-translate-x-full"
				)}
			>
				{/* Close button */}
				<button
					className="absolute top-4 right-4 text-gray-800"
					onClick={toggleMenu}
				>
					<IoMdCloseCircleOutline size={24} />
				</button>

				{/* Navigation links */}
				<nav id="mobile-main-navigation">
					<ul className="flex flex-col gap-y-4 p-4">
						<li>
							<Link to="/" onClick={toggleMenu}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/recipes" onClick={toggleMenu}>
								Our recipes
							</Link>
						</li>
						<li>
							<Link to="/our-tables" onClick={toggleMenu}>
								Our tables
							</Link>
						</li>
					</ul>
				</nav>
				<UserNavigation />
			</div>
		</>
	);
};

export default MobileNavigation;
