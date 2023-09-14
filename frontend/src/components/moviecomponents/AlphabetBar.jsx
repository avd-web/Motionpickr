import axios from "axios";
import React, { useEffect, useState } from "react";
import "./letter.scss";

export default function AlphabetBar({updateMovies}) {


  const fetchMoviePerLetter = async (e) => {
    console.log(e.target.value + "  pressed");
    const responseMovies = await axios.get(
      `http://localhost:8080/api/v1/movie/letter/${e.target.value}`
    );
    updateMovies(responseMovies.data)
  };

  const renderAlphabet = () => {
    const letters = [];
    for (let i = 0; i < 26; i++) {
      letters.push({
        sign: String.fromCharCode(97 + i).toLocaleUpperCase(),
        id: 97 + i,
      });
    }
    return letters;
  };

  const alphabet = renderAlphabet();

  useEffect(() => {
    console.log(alphabet);
  }, []);

  return (
    <div>
      <div className="alphabet-bar">
        {alphabet.map((letter) => (
          <div key={letter.id} className="letter">
            <input
              type="button"
              value={letter.sign}
              onClick={fetchMoviePerLetter}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
