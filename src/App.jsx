import React from "react";
import { ReservationProvider } from "./GlobalContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Recipe = React.lazy(() => import("./pages/Recipe"));
const Tables = React.lazy(() => import("./pages/Tables"));
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Reservations = React.lazy(() => import("./pages/Reservations"));
const Recipes = React.lazy(() => import("./pages/Recipes"));

function App() {
	return (
		<Provider store={store}>
			<ReservationProvider>
				<PersistGate loading={null} persistor={persistor}>
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/booking" element={<Booking />} />
							<Route path="/our-tables" element={<Tables />} />
							<Route path="/recipes" element={<Recipes />} />
							<Route path="/recipe" element={<Recipe />} />
							<Route path="/reservations" element={<Reservations />} />
						</Routes>
					</Router>
				</PersistGate>
			</ReservationProvider>
		</Provider>
	);
}

export default App;
