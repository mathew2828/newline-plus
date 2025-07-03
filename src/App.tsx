import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerAppBar from "./components/AppBar";
import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DrawerAppBar>
              <Home />
            </DrawerAppBar>
          }
        />
        <Route
          path="/products"
          element={
            <DrawerAppBar>
              <Products />
            </DrawerAppBar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
