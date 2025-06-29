import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DrawerAppBar from "./components/AppBar";
import Home from "./Home";
import Products from "./Products";

// Component to handle routing with animations
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
