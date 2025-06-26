// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Box } from "@mui/material";

function App() {
	return (
		<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
		</Router>
	);
}

export default App;
