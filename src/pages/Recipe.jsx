import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Main from "../layout/Main";

// eslint-disable-next-line react/prop-types
const Recipe = () => {
	const searchParams = useSearchParams();
	const id = searchParams[0].get("id");
	const title = searchParams[0].get("title");
	const description = searchParams[0].get("description");
	const image = searchParams[0].get("image");
	const price = searchParams[0].get("price");
	return (
		<Main>
			<article id={`recipe-${id}`} className="my-10 container mx-auto">
				<img src={image} alt={title} />
				<h2>{title}</h2>
				<p>{description}</p>
				<br />
				<span className="price text-sm py-[4px] px-[10px] bg-[#F4CE14] text-[#333] rounded-full">
					{new Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					}).format(price)}
				</span>
				<Link
					to="/booking"
					className="btn btn-primary mx-auto block w-48 text-center"
				>
					Reserve a table
				</Link>
			</article>
		</Main>
	);
};

export default Recipe;
