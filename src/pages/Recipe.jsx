import { useSearchParams } from "react-router-dom";
import Main from "../layout/Main";

// eslint-disable-next-line react/prop-types
const Recipe = () => {
	const searchParams = useSearchParams();
	const id = searchParams[0].get("id");
	const title = searchParams[0].get("title");
	const description = searchParams[0].get("description");
	const image = searchParams[0].get("image");
	return (
		<Main>
			<article id={`recipe-${id}`} className="my-10 container mx-auto">
				<img src={image} alt={title} />
				<h2>{title}</h2>
				<p>{description}</p>
				<a
					href="/booking"
					className="btn btn-primary mx-auto block w-48 text-center"
				>
					Book a table
				</a>
			</article>
		</Main>
	);
};

export default Recipe;
