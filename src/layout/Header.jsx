// Header.jsx
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import MobileNavigation from "../components/MobileNavigation";

const Header = () => {
	return (
		<header className="border-b border-b-zinc-200">
			<div className="container mx-auto flex justify-between">
				{/* Logo */}
				<Link to="/" alt="logo">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						height="100"
						viewBox="0 0 100 100"
					>
						<circle cx="50" cy="50" r="40" fill="#c8f4c6" />
						<rect x="35" y="30" width="10" height="40" rx="2" fill="#495e57" />
						<rect x="55" y="30" width="10" height="40" rx="2" fill="#495e57" />
						<circle cx="50" cy="50" r="8" fill="#f4ce14" />
					</svg>
				</Link>
				{!isMobile ? <Navigation /> : <MobileNavigation />}
			</div>
		</header>
	);
};

export default Header;
