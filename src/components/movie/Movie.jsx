import React, { useState } from "react";
import "./Movie.scss";
import axios from "axios";

const Movie = () => {
  const [data, setData] = useState({});
  const [movie, setMovie] = useState("");

  const URL = `http://www.omdbapi.com/?t=${movie}&apikey=e93993e6`;

  const searchMovie = (e) => {
    if (e.key === "Enter") {
      axios.get(URL).then((response) => {
        setData(response.data);
      });
      setMovie("");
    }
  };

  return (
    <div className="movie__container">
      <div className="movie__search-box">
        <input
          className="movie__search-bar"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          onKeyDown={searchMovie}
          placeholder="Enter movie title"
          type="text"
        />
      </div>
      <div className="movie__info-box">
        <div className="movie__desc">
          {data.Title !== undefined ? (
            <div className="movie__desc__data">
              <p>
                Title: <span>{data.Title}</span>
              </p>

              {data.imdbRating && data.imdbRating !== "N/A" ? (
                <p>
                  Rate: <span>{data.imdbRating} / 10</span>
                </p>
              ) : null}

              <p>
                Rating: <span>{data.Genre}</span>
              </p>
              <p>
                Runtime: <span>{data.Runtime}</span>
              </p>
              <p>
                Year: <span>{data.Year}</span>
              </p>
              <p>
                Country: <span>{data.Country}</span>
              </p>
            </div>
          ) : null}
          {/* {showPoster()} */}
          {data.Poster && data.Poster !== "N/A" ? (
            <div className="movie__desc__poster">
              <img src={data.Poster} alt={data.Title} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Movie;
