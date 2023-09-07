import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
