import React from "react";
import Row from "../components/row/Row.jsx";
import requests from "../api-request/requests";
import Banner from "../components/banner/Banner.jsx";
import { HomeContainer } from "./home-style";
import Navbar from "../components/navbar/Navbar.jsx";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </HomeContainer>
  );
};

export default Home;
