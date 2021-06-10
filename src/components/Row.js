import React, { useEffect, useState } from "react";
import { instance } from "../API/axios";
import "../styles/Row.css";
const Row = ({ title, fetch, isLarge }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await instance.get(fetch);
      setMovies(res.data.results);
    })();
    // because we are sending a request to a third party service, it may take less than second, So we need to make it Async function to not stop our code from being executed
  }, [fetch]);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* Title*/}
      <div className="imgContaner">
        {movies.map((element) => (
          <img
            className={`row_poster ${isLarge && "row_largposter"}`}
            key={element.id.toString()}
            tabIndex="1"
            src={`${baseURL}${
              isLarge ? element.poster_path : element.backdrop_path
            }`}
            alt={element.title || element.name}
          />
        ))}
      </div>

      {/* Container WITH Images*/}
    </div>
  );
};

export default Row;
