import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { IoMdCloseCircleOutline } from "react-icons/io";
const MobileNavigation = () => {
	const [open, setOpen] = useState(true);
	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<div
			className={twMerge(
				"navigation py-6 h-screen fixed top-0 w-3/4",
				open ? "left-0" : "-left-3/4"
			)}
		>
			{/* mobile main navigation */}
			<nav id="mobile-main-navigation">
				<button
					className="absolute top-0 left-3/4"
					onClick={() => toggleMenu()}
				>
					<IoMdCloseCircleOutline />
				</button>
				<ul className="flex flex-wrap gap-x-2 bg-white">
					<li className="p-2 w-full">
						<Link to="/">Home</Link>
					</li>
					<li className="p-2 w-full">Our recipes</li>
					<li className="p-2 w-full">
						<Link to="/booking">Reserve now</Link>
					</li>
					<li className="p-2 w-full">Contact us</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNavigation;
