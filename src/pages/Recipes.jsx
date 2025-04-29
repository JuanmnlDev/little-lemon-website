// pages/Recipes.jsx
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import Main from "../layout/Main";
import data from "../data/recipes.json";
import "../styles/Recipes.css";

const Recipes = () => {
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
	const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (loading) {
		return <div className="loading">Loading...</div>;
	}

	return (
		<Main>
			<div className="recipes-container">
				<h1>Our Recipes</h1>

				<div className="recipes-grid">
					{currentRecipes.map((recipe) => (
						<RecipeCard
							key={recipe.id}
							title={recipe.title}
							image={recipe.image}
							rating={recipe.rating}
							description={recipe.description}
						/>
					))}
				</div>

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
			</div>
		</Main>
	);
};

export default Recipes;
