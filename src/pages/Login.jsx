import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slice/userSlice";
import api from "../api/axios";
import Main from "../layout/Main";

export default function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.email) newErrors.email = "Email is required";
		if (!formData.password) newErrors.password = "Password is required";
		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formErrors = validateForm();

		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		setIsLoading(true);
		try {
			// login request
			const response = await api.post(
				import.meta.env.VITE_RESTFUL_API_LOGIN,
				formData
			);

			// Dispatch to Redux instead of using localStorage
			dispatch(
				setCredentials({
					user: response.data.user,
					token: response.data.token,
					profile: response.data.profile[1],
				})
			);

			// profile request

			navigate("/"); // Redirect to home after login
		} catch (error) {
			setErrors({
				api: error.response?.data?.message || "An error occurred",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Main>
			<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h2>
					</div>
					<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
						{errors.api && (
							<div className="rounded-md bg-red-50 p-4">
								<div className="text-sm text-red-700">{errors.api}</div>
							</div>
						)}
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									value={formData.email}
									onChange={handleChange}
									className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
										errors.email ? "border-red-300" : "border-gray-300"
									} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
									placeholder="Email address"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-600">{errors.email}</p>
								)}
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									value={formData.password}
									onChange={handleChange}
									className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
										errors.password ? "border-red-300" : "border-gray-300"
									} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
									placeholder="Password"
								/>
								{errors.password && (
									<p className="mt-1 text-sm text-red-600">{errors.password}</p>
								)}
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled={isLoading}
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400"
							>
								{isLoading ? "Signing in..." : "Sign in"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</Main>
	);
}
