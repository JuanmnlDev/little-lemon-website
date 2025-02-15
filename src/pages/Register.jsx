import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slice/userSlice";
import api from "../api/axios";
import Main from "../layout/Main";

export default function Register() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		if (!formData.password) newErrors.password = "Password is required";
		if (formData.password.length < 8) {
			newErrors.password = "Password must be at least 8 characters";
		}
		if (formData.password !== formData.password_confirmation) {
			newErrors.password_confirmation = "Passwords do not match";
		}
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
			const response = await api.post(
				import.meta.env.VITE_RESTFUL_API_REGISTER,
				formData
			);
			// Dispatch to Redux instead of using localStorage
			dispatch(
				setCredentials({
					user: response.data.user,
					token: response.data.token,
				})
			);
			navigate("/");
		} catch (error) {
			setErrors({
				api: error.response?.data?.message || "An error occurred",
				...error.response?.data?.errors,
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
							Create your account
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
								<label htmlFor="name" className="sr-only">
									Full Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									value={formData.name}
									onChange={handleChange}
									className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
										errors.name ? "border-red-300" : "border-gray-300"
									} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
									placeholder="Full Name"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-600">{errors.name}</p>
								)}
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									value={formData.email}
									onChange={handleChange}
									className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
										errors.email ? "border-red-300" : "border-gray-300"
									} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
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
									required
									value={formData.password}
									onChange={handleChange}
									className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
										errors.password ? "border-red-300" : "border-gray-300"
									} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
									placeholder="Password"
								/>
								{errors.password && (
									<p className="mt-1 text-sm text-red-600">{errors.password}</p>
								)}
							</div>
							<div>
								<label htmlFor="password_confirmation" className="sr-only">
									Confirm Password
								</label>
								<input
									id="password_confirmation"
									name="password_confirmation"
									type="password"
									required
									value={formData.password_confirmation}
									onChange={handleChange}
									className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
										errors.password_confirmation
											? "border-red-300"
											: "border-gray-300"
									} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
									placeholder="Confirm Password"
								/>
								{errors.password_confirmation && (
									<p className="mt-1 text-sm text-red-600">
										{errors.password_confirmation}
									</p>
								)}
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled={isLoading}
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
							>
								{isLoading ? "Creating account..." : "Create Account"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</Main>
	);
}
