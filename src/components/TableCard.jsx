// components/TableCard.jsx
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const TableCard = ({ id, title, image, description }) => {
	return (
		<div className="table-card pb-16 relative">
			<img src={image} alt={title} className="table-image" />
			<div className="table-content">
				<h3>{title}</h3>
				<p className="table-description">{description}</p>
			</div>
			<Link
				to={`/booking?table_id=${id}`}
				className="btn btn-primary left-[50%] -translate-x-[50%] block w-48 text-center absolute bottom-4"
			>
				Reserve this table
			</Link>
		</div>
	);
};

export default TableCard;
