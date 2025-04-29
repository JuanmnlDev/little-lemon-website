import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SliderContent = ({ caption, image, isActive }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const handleImageClick = () => {
		setIsFullScreen(!isFullScreen);
	};

	const handleClose = () => {
		setIsFullScreen(false);
	};

	if (isFullScreen) {
		return (
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					backgroundColor: "rgba(0, 0, 0, 0.9)",
					zIndex: 1000,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<button
					onClick={handleClose}
					style={{
						position: "absolute",
						top: "20px",
						right: "20px",
						background: "white",
						border: "none",
						borderRadius: "50%",
						width: "40px",
						height: "40px",
						cursor: "pointer",
						fontSize: "20px",
					}}
					aria-label="Close fullscreen view"
				>
					×
				</button>
				<img
					src={image}
					alt={caption}
					style={{
						maxWidth: "90vw",
						maxHeight: "90vh",
						objectFit: "contain",
					}}
				/>
				{caption && (
					<div
						style={{
							color: "white",
							padding: "20px",
							textAlign: "center",
						}}
					>
						{caption}
					</div>
				)}
			</div>
		);
	}

	return (
		<div
			style={{
				flex: "0 0 100%",
				justifyContent: "center",
				alignItems: "center",
				opacity: isActive ? 1 : 0.5,
				height: "90vh",
				width: "100vw",
				transition: "opacity 0.5s ease-in-out",
				cursor: "pointer",
			}}
			onClick={handleImageClick}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					handleImageClick();
				}
			}}
			className="relative"
		>
			<img
				src={image}
				alt={caption}
				style={{ width: "100%", height: "100%" }}
			/>
			<div className="caption absolute top-[50%] -translate-y-[50%] left-[200px]">
				<div
					className="inner-caption"
					dangerouslySetInnerHTML={{ __html: caption }}
				/>
			</div>
		</div>
	);
};

export default SliderContent;
