import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import Main from "../layout/Main";

const Booking = () => {
	const paramsString = window.location.search;
	const searchParams = new URLSearchParams(paramsString);
	const table_id = searchParams.get("table_id");
	return (
		<Main>
			<div className="container mx-auto" data-testid="booking-page">
				<Link
					to="/our-tables"
					className="p-2 ml-2 mt-4 bg-zinc-300 w-20 rounded-full flex justify-around"
				>
					<IoMdArrowBack className="text-2xl" />
				</Link>
				<BookingForm id={table_id} />
			</div>
		</Main>
	);
};

export default Booking;
