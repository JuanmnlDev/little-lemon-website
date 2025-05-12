const Footer = () => {
	return (
		<footer className="border-t border-t-zinc-200">
			<div className="top h-10"></div>
			<div className="bottom">
				<p className="text-center py-4">
					© {`${new Date().getFullYear()}`} - All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
