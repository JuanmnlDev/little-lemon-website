import Header from "../layout/Header";
import Footer from "../layout/Footer";
// eslint-disable-next-line react/prop-types
const Main = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Main;
