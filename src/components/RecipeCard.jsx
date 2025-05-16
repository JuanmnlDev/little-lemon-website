// components/RecipeCard.jsx
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const RecipeCard = ({ id, title, image, rating, description, price }) => {
	const searchParams = `?id=${id}&title=${title}&image=${title}&description=${description}&price=${price}`;
	return (
		<div className="recipe-card">
			<img src={image} alt={title} className="recipe-image" />
			<div className="recipe-content">
				<h3>
					<Link to={`/recipe${searchParams}`}>{title}</Link>
				</h3>
				<div className="recipe-rating">
					{[...Array(5)].map((_, index) => (
						<span
							key={index}
							className={`star ${index < rating ? "filled" : ""}`}
						>
							★
						</span>
					))}
				</div>
				<p className="recipe-description">{description}</p>
				<br />
				<span className="price text-sm py-[4px] px-[10px] bg-[#F4CE14] text-[#333] rounded-full">
					{new Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					}).format(price)}
				</span>
			</div>
		</div>
	);
};

export default RecipeCard;
