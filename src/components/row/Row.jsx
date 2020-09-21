import React, { useState, useEffect } from "react";

import { RowContainer, RowPosters, RowPoster } from "./row-style";

import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const url_forImagesPath = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${fetchUrl}`);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  //   console.log(movies);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <RowContainer>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map((movie) => (
          <>
            {isLargeRow ? (
              <RowPoster
                style={{ maxHeight: "250px" }}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${url_forImagesPath}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ) : (
              <RowPoster
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${url_forImagesPath}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )}
          </>
        ))}
      </RowPosters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </RowContainer>
  );
};

export default Row;
