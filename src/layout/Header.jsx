import { FaCartShopping, FaUser } from "react-icons/fa6";
const Header = () => {
	return (
		<header className="flex justify-between">
			{/* Logo */}
			<img src="" alt="logo" />
			<div className="navigation flex">
				{/* main navigation */}
				<nav id="main-navigation" className="mr-10">
					<ul className="flex gap-x-2">
						<li className="p-2">Home</li>
						<li className="p-2">Reserve now</li>
						<li className="p-2">Our services</li>
						<li className="p-2">Contact us</li>
					</ul>
				</nav>
				{/* User navigation */}
				<nav id="user-navigation">
					<ul className="flex">
						<li className="p-2">
							<FaCartShopping />
						</li>
						<li className="p-2">
							<FaUser />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
