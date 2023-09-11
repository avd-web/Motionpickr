import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Friends from "./pages/friends";
import ViewMovie from "./pages/viewMovie";
import Recommended from "./pages/recommended";
import WatchList from "./pages/watchList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <BrowserRouter>  <Header/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<ViewMovie />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/movie" element={<WatchList />} />
      </Routes> <Footer/>
    </BrowserRouter>

   
  </React.StrictMode>
);
