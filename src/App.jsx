import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Recipes = React.lazy(() => import("./pages/Recipes"));

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/booking" element={<Booking />} />
						<Route path="/recipes" element={<Recipes />} />
						<Route path="/recipe" element={<Recipe />} />
					</Routes>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
