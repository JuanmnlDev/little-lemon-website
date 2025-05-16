import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SliderContent = ({ caption, image, isActive }) => {
	return (
		<div
			style={{
				flex: "0 0 100%",
				justifyContent: "center",
				alignItems: "center",
				opacity: isActive ? 1 : 0.5,
				height:
					window.innerWidth < 768
						? "35vh"
						: window.innerWidth <= 1024
						? "50vh"
						: "90vh",
				width: "100vw",
				transition: "opacity 0.5s ease-in-out",
				cursor: "pointer",
			}}
			role="button"
			tabIndex={0}
			className="relative"
		>
			<img
				src={image}
				alt={caption}
				style={{ width: "100%", height: "100%" }}
			/>
			<div className="caption absolute top-[50%] -translate-y-[50%] lg:left-[100px] lg:w-[80%] xl:w-auto">
				<div
					className="inner-caption"
					dangerouslySetInnerHTML={{ __html: caption }}
				/>
				<Link
					to="/booking"
					className="btn btn-primary block w-48 text-center mt-4"
				>
					Reserve a table
				</Link>
			</div>
		</div>
	);
};

export default SliderContent;
