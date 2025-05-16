import HorizontalSlider from "../components/HorizontalSlider";
import RecipesList from "../components/RecipesList";
import TablesList from "../components/TablesList";
import { Link } from "react-router-dom";
import Main from "../layout/Main";

const Home = () => {
	return (
		<Main>
			<div id="home">
				<HorizontalSlider />
				<div className="container py-10 mx-auto">
					{/* Recipes */}
					<h2 className="text-center pb-10">Most popular recipes</h2>
					<RecipesList limit={4} />
					<Link
						to="/recipes"
						className="btn btn-secondary mx-auto block w-48 text-center"
					>
						See all recipes
					</Link>
					{/* Tables */}
					<h2 className="mb-10 mt-30 text-center">Our tables</h2>
					<TablesList limit={4} />
					<Link
						to="/our-tables"
						className="btn btn-secondary mx-auto block w-48 text-center"
					>
						See all tables
					</Link>
				</div>
			</div>
		</Main>
	);
};

export default Home;
