import React from "react";
import "../styles/HomeScreen.css";
import Row from "../components/Row";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import { requests } from "../API/requests";
const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Row
        title="NetFlix-Originals"
        fetch={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetch={requests.fetchTrending} />
      <Row title="Top Rated" fetch={requests.fetchTopRated} />
      <Row title="Action Movies" fetch={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetch={requests.fetchRomanceMovies} />
    </>
  );
};
export default HomeScreen;
