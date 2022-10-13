import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
