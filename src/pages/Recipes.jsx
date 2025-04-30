// pages/Recipes.jsx
import RecipesList from "../components/RecipesList";
import Main from "../layout/Main";

const Recipes = () => {
	return (
		<Main>
			<h1 className="text-center">Our Recipes</h1>
			<RecipesList />
		</Main>
	);
};

export default Recipes;
