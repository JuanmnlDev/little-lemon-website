import { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		date: "",
		time: "",
		guests: "2",
		occasion: "regular",
	});

	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}
		if (!formData.date) {
			newErrors.date = "Date is required";
		}
		if (!formData.time) {
			newErrors.time = "Time is required";
		}
		return newErrors;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();

		if (Object.keys(validationErrors).length === 0) {
			// Handle form submission here
			console.log("Form submitted:", formData);
			// Reset form
			setFormData({
				name: "",
				email: "",
				date: "",
				time: "",
				guests: "2",
				occasion: "regular",
			});
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className="booking-form-container">
			<h1>Reserve a Table</h1>
			<form onSubmit={handleSubmit} noValidate>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						aria-label="Full name"
						aria-required="true"
						aria-invalid={!!errors.name}
					/>
					{errors.name && (
						<span className="error" role="alert">
							{errors.name}
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						aria-label="Email address"
						aria-required="true"
						aria-invalid={!!errors.email}
					/>
					{errors.email && (
						<span className="error" role="alert">
							{errors.email}
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="date">Date:</label>
					<input
						type="date"
						id="date"
						name="date"
						value={formData.date}
						onChange={handleInputChange}
						min={new Date().toISOString().split("T")[0]}
						aria-label="Reservation date"
						aria-required="true"
						aria-invalid={!!errors.date}
					/>
					{errors.date && (
						<span className="error" role="alert">
							{errors.date}
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="time">Time:</label>
					<input
						type="time"
						id="time"
						name="time"
						value={formData.time}
						onChange={handleInputChange}
						aria-label="Reservation time"
						aria-required="true"
						aria-invalid={!!errors.time}
					/>
					{errors.time && (
						<span className="error" role="alert">
							{errors.time}
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="guests">Number of Guests:</label>
					<select
						id="guests"
						name="guests"
						value={formData.guests}
						onChange={handleInputChange}
						aria-label="Number of guests"
					>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
							<option key={num} value={num}>
								{num}
							</option>
						))}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="occasion">Occasion:</label>
					<select
						id="occasion"
						name="occasion"
						value={formData.occasion}
						onChange={handleInputChange}
						aria-label="Occasion"
					>
						<option value="regular">Regular</option>
						<option value="birthday">Birthday</option>
						<option value="anniversary">Anniversary</option>
						<option value="business">Business</option>
					</select>
				</div>

				<button
					type="submit"
					aria-label="Submit reservation"
					className="submit-button"
				>
					Reserve Table
				</button>
			</form>
		</div>
	);
};

export default BookingForm;
