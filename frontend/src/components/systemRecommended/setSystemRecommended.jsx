import React, { useState } from "react";

export default function SetSystemRecommended() {
  const [selectedactors, setSelectedActors] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  return (
    <div>
      <h2>recommended</h2>
      <div><h3>genres</h3><div>all</div><div>selected</div></div>
      <div><h3>actors</h3><div>all</div><div>selected</div></div>
    </div>
  );
}
