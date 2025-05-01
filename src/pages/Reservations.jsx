import { useReservationContext } from "../GlobalContext";
import Main from "../layout/Main";

const Reservations = () => {
	const { state } = useReservationContext(); // Access the dispatch function
	return (
		<Main>
			<div className="container mx-auto py-10">
				<h1>Reservations</h1>
				{state.reservations.length > 0 ? (
					state.reservations.map((reservation, index) => (
						<div key={index} className="reservation-item">
							<h2>Reservation {index + 1}</h2>
							<p>Name: {reservation.name}</p>
							<p>Email: {reservation.email}</p>
							<p>Date: {reservation.date}</p>
							<p>Time: {reservation.time}</p>
							<p>Guests: {reservation.guests}</p>
							<p>Occasion: {reservation.occasion}</p>
						</div>
					))
				) : (
					<p>No reservations</p>
				)}
			</div>
		</Main>
	);
};

export default Reservations;
