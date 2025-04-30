// pages/Recipes.jsx
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import data from "../data/recipes.json";
import "../styles/Recipes.css";

// eslint-disable-next-line react/prop-types
const RecipesList = ({ limit = null }) => {
	const [recipes, setRecipes] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const recipesPerPage = 8; // 2 rows of 4 recipes

	// Simulated data fetch - replace with your actual API call
	useEffect(() => {
		// Replace this with your actual data fetching logic
		const fetchRecipes = async () => {
			setLoading(true);
			try {
				// Simulate API call
				setRecipes(data.recipes);
			} catch (error) {
				console.error("Error fetching recipes:", error);
			}
			setLoading(false);
		};

		fetchRecipes();
	}, []);

	// Get current recipes
	const indexOfLastRecipe = currentPage * recipesPerPage;
	const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
	let currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
	if (limit !== null)
		currentRecipes = recipes
			.slice(0, limit)
			.sort((a, b) => a.rating > b.rating);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (loading) {
		return <div className="loading">Loading...</div>;
	}

	return (
		<div className="recipes-container">
			<div className="recipes-grid">
				{currentRecipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						id={recipe.id}
						title={recipe.title}
						image={recipe.image}
						rating={recipe.rating}
						description={recipe.description}
					/>
				))}
			</div>

			{limit === null && (
				<div className="pagination">
					<button
						onClick={() => paginate(currentPage - 1)}
						disabled={currentPage === 1}
						className="pagination-button"
					>
						Previous
					</button>

					{[...Array(Math.ceil(recipes.length / recipesPerPage))].map(
						(_, index) => (
							<button
								key={index + 1}
								onClick={() => paginate(index + 1)}
								className={`pagination-button ${
									currentPage === index + 1 ? "active" : ""
								}`}
							>
								{index + 1}
							</button>
						)
					)}

					<button
						onClick={() => paginate(currentPage + 1)}
						disabled={
							currentPage === Math.ceil(recipes.length / recipesPerPage)
						}
						className="pagination-button"
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default RecipesList;
