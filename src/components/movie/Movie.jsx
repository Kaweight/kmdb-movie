import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./Movie.scss";

const Movie = () => {
  const [movie, setMovie] = useState("");

  const URL = `http://www.omdbapi.com/?t=${movie}&apikey=e93993e6`;

  const { data, isLoading, isError, refetch } = useQuery(
    ["movie"],
    async () => {
      const response = await axios.get(URL);
      return response.data;
    }
  );

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="movie__container">
      <div className="movie__search-box">
        <input
          className="movie__search-bar"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Enter movie title"
          type="text"
        />
        <button className="movie__search-btn" onClick={refetch}>
          Show movie
        </button>
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
