import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import "../styles/slider.css";
import Skeleton from "./Skeleton";

// Lazy load the slider content
const SliderContent = lazy(() => import("./SliderContent"));

const HorizontalSlider = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	// Sample data array - replace with your actual data
	const slides = [
		{
			id: 1,
			caption:
				"<h2>Little Lemon</h2><h3>Chicago</h3><p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>",
			name: "1.png",
		},
		{
			id: 2,
			caption:
				"<h2>Little Lemon</h2><h3>Chicago</h3><p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>",
			name: "2.png",
		},
		{
			id: 3,
			caption:
				"<h2>Little Lemon</h2><h3>Chicago</h3><p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>",
			name: "3.png",
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === slides.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		);
	};

	return (
		<div
			className="slider-container"
			style={{ position: "relative", overflow: "hidden" }}
		>
			<Suspense fallback={<Skeleton type="slider" />}>
				<motion.div
					style={{
						display: "flex",
						width: "100%",
						height: "100%",
					}}
					initial={{ x: 0 }}
					animate={{ x: `-${currentIndex * 100}%` }}
					transition={{ duration: 0.5 }}
				>
					{slides.map((slide, index) => (
						<SliderContent
							key={slide.id}
							caption={slide.caption}
							isActive={index === currentIndex}
							image={`/images/home-slider/${slide.name}`}
						/>
					))}
				</motion.div>
			</Suspense>

			<button
				onClick={prevSlide}
				style={{ position: "absolute", left: 10, top: "50%" }}
			>
				Previous
			</button>
			<button
				onClick={nextSlide}
				style={{ position: "absolute", right: 10, top: "50%" }}
			>
				Next
			</button>
		</div>
	);
};

export default HorizontalSlider;
