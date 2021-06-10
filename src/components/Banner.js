import React, { useEffect, useState } from "react";
import { requests } from "../API/requests";
import { instance } from "../API/axios";
import "../styles/Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {
    (async () => {
      const result = await instance.get(requests.fetchNetflixOriginals);

      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
    })();
  }, []);
  const trncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerConetent">
        <h1 className="banner_title">{movie?.name || movie?.title}</h1>
        <div className="buttonContainer">
          <button className="btn" title="">
            Start
          </button>
          <button className="btn">My List</button>
        </div>
        <h1 className="descritpion">{trncate(movie?.overview, 160)}</h1>
      </div>
      <div className="fadding-area" />
    </header>
  );
};

export default Banner;
