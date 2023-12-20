import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main.js";
import "./App.css";
import Nav from "./components/nav.js";
import Contact from "./pages/contact.js";
import Footer from "./components/footer.js";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
