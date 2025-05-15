import { selectAllBookings } from "../slice/bookingSlice";
import { useSelector } from "react-redux";
import Main from "../layout/Main";

const Reservations = () => {
	const userReservations = useSelector(selectAllBookings);
	return (
		<Main>
			<div className="container mx-auto py-10">
				<h1 className="text-3xl font-bold text-center mb-8">Reservations</h1>
				{userReservations.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{userReservations.map((reservation, index) => (
							<div
								key={index}
								className="reservation-item bg-white shadow-md rounded-lg p-6 border border-gray-200 relative"
							>
								<h2 className="text-xl font-semibold text-gray-800 mb-2">
									Reservation {index + 1}
								</h2>
								<p className="text-gray-600">
									<strong>Email:</strong> {reservation.email}
								</p>
								<p className="text-gray-600">
									<strong>Date / Time:</strong> {reservation.dateTime}
								</p>
								<p className="text-gray-600">
									<strong>Guests:</strong> {reservation.guests}
								</p>
								<p className="text-gray-600">
									<strong>Occasion:</strong> {reservation.occasion}
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
