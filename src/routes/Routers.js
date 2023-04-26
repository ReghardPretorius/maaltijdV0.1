import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Meals from "../pages/Meals";
import Checkout from "../pages/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
