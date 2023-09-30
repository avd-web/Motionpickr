import React, { useState, useContext } from "react";
import { DashboardContext, SetTokenFunctionContext } from "./pages/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Movie from "./components/movie/movie";
import ViewMovie from "./pages/viewMovie";
import Recommended from "./pages/userRecommended";
import WatchList from "./pages/watchList";
import GenreInfo from "./pages/GenreInfo";
import Genre from "./pages/Genre";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
export default function AppRoot() {
  const [token, setToken] = useState(null);
  const removeToken = () => {
    setToken(null);
  };

  return (
    <div>
      <DashboardContext.Provider value={token}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route
              path="/home"
              element={
                <Home setTokenEvent={setToken} removeTokenEvent={removeToken} />
              }
            />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/:id" element={<ViewMovie />} />
            <Route path="/recommended" element={<Recommended />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/genre" element={<Genre />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </DashboardContext.Provider>
    </div>
  );
}
