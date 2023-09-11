import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
