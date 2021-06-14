import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { instance } from "../API/axios";
import "../styles/HomeScreen.css";
const Row = ({ title, fetch, isLarge }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    (async () => {
      const res = await instance.get(fetch);
      setMovies(res.data.results);
    })();
    // because we are sending a request to a third party service, it may take less than second, So we need to make it Async function to not stop our code from being executed
  }, [fetch]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "", { id: true })
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      {/* Title*/}
      <div className="imgContaner">
        {movies.map((element) => (
          <img
            onClick={() => handleClick(element)}
            className={`row_poster ${isLarge && "row_largposter"}`}
            key={element.id}
            tabIndex="1"
            src={`${baseURL}${
              isLarge ? element.poster_path : element.backdrop_path
            }`}
            alt={element.title || element.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
