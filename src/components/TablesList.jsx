// pages/Tables.jsx
import { useState, useEffect } from "react";
import TableCard from "../components/TableCard";
import data from "../data/tables.json";
import "../styles/Tables.css";

// eslint-disable-next-line react/prop-types
const TablesList = ({ limit = null }) => {
	const [tables, setTables] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const tablesPerPage = 8; // 2 rows of 4 tables

	// Simulated data fetch - replace with your actual API call
	useEffect(() => {
		// Replace this with your actual data fetching logic
		const fetchTables = async () => {
			setLoading(true);
			try {
				// Simulate API call
				setTables(data.tables);
			} catch (error) {
				console.error("Error fetching tables:", error);
			}
			setLoading(false);
		};

		fetchTables();
	}, []);

	// Get current tables
	const indexOfLastTable = currentPage * tablesPerPage;
	const indexOfFirstTable = indexOfLastTable - tablesPerPage;
	let currentTables = tables.slice(indexOfFirstTable, indexOfLastTable);
	if (limit !== null)
		currentTables = tables.slice(0, limit).sort((a, b) => a.rating > b.rating);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (loading) {
		return <div className="loading">Loading...</div>;
	}

	return (
		<div className="tables-container">
			<div className="tables-grid">
				{currentTables.map((recipe) => (
					<TableCard
						key={recipe.id}
						id={recipe.id}
						title={recipe.title}
						image={recipe.image}
						rating={recipe.rating}
						description={recipe.description}
					/>
				))}
			</div>

			{limit === null && (
				<div className="pagination">
					<button
						onClick={() => paginate(currentPage - 1)}
						disabled={currentPage === 1}
						className="pagination-button"
					>
						Previous
					</button>

					{[...Array(Math.ceil(tables.length / tablesPerPage))].map(
						(_, index) => (
							<button
								key={index + 1}
								onClick={() => paginate(index + 1)}
								className={`pagination-button ${
									currentPage === index + 1 ? "active" : ""
								}`}
							>
								{index + 1}
							</button>
						)
					)}

					<button
						onClick={() => paginate(currentPage + 1)}
						disabled={currentPage === Math.ceil(tables.length / tablesPerPage)}
						className="pagination-button"
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default TablesList;
