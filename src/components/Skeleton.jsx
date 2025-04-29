// eslint-disable-next-line react/prop-types
const Skeleton = ({ type }) => {
	switch (type) {
		case "slider":
			return <div className="bg-gray-300 h-[90vh] w-full"></div>;
		default:
			return <div>Loading ...</div>;
	}
};

export default Skeleton;
