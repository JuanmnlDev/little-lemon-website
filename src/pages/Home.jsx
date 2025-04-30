import HorizontalSlider from "../components/HorizontalSlider";
import RecipesList from "../components/RecipesList";
import TablesList from "../components/TablesList";
import Main from "../layout/Main";

const Home = () => {
	return (
		<Main>
			<div id="home">
				<HorizontalSlider />
				<div className="container py-10 mx-auto">
					<h2 className="text-center pb-10">Most popular recipes</h2>
					<RecipesList limit={4} />
					<a
						href="/recipes"
						className="btn btn-primary mx-auto block w-48 text-center"
					>
						See all recipes
					</a>
					{/* Tables */}
					<TablesList limit={4} />
				</div>
			</div>
		</Main>
	);
};

export default Home;
