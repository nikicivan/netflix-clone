import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  BannerContainer,
  BannerContents,
  BannerTitle,
  BannerButton,
  BannerFadeButton,
  BannerDescription,
} from "./banner-style";

const baseUrl = "https://api.themoviedb.org/3";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${fetchUrl}`);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  //   console.log("movie", movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <BannerContainer
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <BannerContents>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <div className="banner__buttons">
          <BannerButton>Play</BannerButton>
          <BannerButton>My list</BannerButton>
        </div>
        <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
      </BannerContents>
      <BannerFadeButton></BannerFadeButton>
    </BannerContainer>
  );
};

export default Banner;
