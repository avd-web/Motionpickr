import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Genre from "./pages/Genre";
import GenreInfo from "./pages/GenreInfo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/genre/:id" element={<GenreInfo/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
