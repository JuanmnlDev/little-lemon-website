import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<div className="navigation flex py-6">
			{/* main navigation */}
			<nav id="main-navigation" className="mr-10">
				<ul className="flex gap-x-2">
					<li className="p-2">
						<Link to="/">Home</Link>
					</li>
					<li className="p-2">
						<Link to="/recipes">Our recipes</Link>
					</li>
					<li className="p-2">
						<Link to="/booking">Reserve now</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
