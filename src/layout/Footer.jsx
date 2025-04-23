const Footer = () => {
	return (
		<footer className="bg-green-100">
			<div className="top h-60"></div>
			<div className="bottom">
				<p className="text-center py-4">
					© {`${new Date().getFullYear()}`} - All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
