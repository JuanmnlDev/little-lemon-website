// components/RecipeCard.jsx
// eslint-disable-next-line react/prop-types
const RecipeCard = ({ id, title, image, rating, description }) => {
	const searchParams = `?id=${id}&title=${title}&image=${title}&description${description}`;
	return (
		<div className="recipe-card">
			<img src={image} alt={title} className="recipe-image" />
			<div className="recipe-content">
				<h3>
					<a href={`/recipe${searchParams}`}>{title}</a>
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
			</div>
		</div>
	);
};

export default RecipeCard;
