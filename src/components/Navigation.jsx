import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useReservationContext } from "../GlobalContext";
const Navigation = () => {
	const { state } = useReservationContext(); // Access the dispatch function
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
						<Link to="/our-tables">Our tables</Link>
					</li>
					<li className="p-2">
						<Link to="/reservations">
							<span
								className="flex justify-center items-center w-10 h-6 text-xl relative"
								id="cart-icon"
							>
								{state.reservations.length > 0 && (
									<span className="absolute -top-2 right-0 bg-red-500 text-white rounded-full text-base w-5 h-5 flex justify-center items-center">
										{state.reservations.length}
									</span>
								)}
								<IoMdCart />
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
