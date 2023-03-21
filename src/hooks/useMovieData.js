import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovieInfo = () => {
  return axios.get(`http://www.omdbapi.com/?apikey=e93993e6&t=${movie}`);
};

export const useMovieData = (onSuccess, onError) => {
  return useQuery(["movie", "gladiator"], fetchMovieInfo(movie), {
    onSuccess,
    onError,
    movie,
    select: (data) => {
      const movieData = data.data;
      return movieData;
    },
  });
};
