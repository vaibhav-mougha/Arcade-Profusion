import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
