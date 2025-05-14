import { useEffect, useState } from "react";
import { selectCurrentToken } from "../slice/userSlice";
import Main from "../layout/Main";
import api from "../api/axios";
import { useSelector } from "react-redux";

const Reservations = () => {
	const userToken = useSelector(selectCurrentToken);
	const [userReservations, setUserReservations] = useState([]);
	useEffect(() => {
		const fetchReservations = async () => {
			try {
				const response = await api
					.get(import.meta.env.VITE_RESTFUL_API_USER_RESERVATIONS, {
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: `Bearer ${userToken}`,
						},
					})
					.then((response) => response.data);
				if (!response.success) {
					throw new Error("Network response was not ok");
				}
				const data = await response.message;
				setUserReservations(data);
			} catch (error) {
				console.error("Error fetching reservations:", error);
			}
		};
		fetchReservations();
	}, []);
	return (
		<Main>
			<div className="container mx-auto py-10">
				<h1 className="text-3xl font-bold text-center mb-8">Reservations</h1>
				{userReservations.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{userReservations.map((reservation, index) => (
							<div
								key={index}
								className="reservation-item bg-white shadow-md rounded-lg p-6 border border-gray-200"
							>
								<h2 className="text-xl font-semibold text-gray-800 mb-2">
									Reservation {reservation.id}
								</h2>
								<p className="text-gray-600">
									<strong>Date / Time:</strong> {reservation.day_time}
								</p>
								<p className="text-gray-600">
									<strong>Guests:</strong> {reservation.guests}
								</p>
								<p className="text-gray-600">
									<strong>Occasion:</strong> {reservation.ocasion}
								</p>
							</div>
						))}
					</div>
				) : (
					<p className="text-center text-gray-500">No reservations</p>
				)}
			</div>
		</Main>
	);
};

export default Reservations;
