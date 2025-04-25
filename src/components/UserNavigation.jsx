import { useSelector, useDispatch } from "react-redux";
import {
	selectCurrentUser,
	selectIsAuthenticated,
	logout,
} from "../slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
const UserNavigation = () => {
	const user = useSelector(selectCurrentUser);
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
	};
	return (
		<nav id="user-navigation">
			<ul className="flex">
				{isAuthenticated ? (
					<li className="relative group p-2">
						<div className="cursor-pointer flex items-center">{user.name}</div>
						{/* Dropdown Menu */}
						<div className="absolute right-0 top-full w-48 bg-white rounded-md shadow-lg py-1 transform opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 ease-in-out">
							<div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
								Signed in as
								<br />
								<span className="font-medium">{user.email}</span>
							</div>
							<Link
								to="/profile"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							>
								Your Profile
							</Link>
							<button
								onClick={handleLogout}
								className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							>
								Sign out
							</button>
						</div>
					</li>
				) : (
					<li className="p-2 flex">
						<Link
							to="/login"
							className="flex border-r border-r-gray-400 pr-1 mr-1"
						>
							Login
						</Link>
						<Link to="/register" className="flex">
							Register
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default UserNavigation;
