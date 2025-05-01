// pages/Tables.jsx
import TablesList from "../components/TablesList";
import Main from "../layout/Main";

const Tables = () => {
	return (
		<Main>
			<h1 className="text-center">Our Tables</h1>
			<TablesList />
		</Main>
	);
};

export default Tables;
