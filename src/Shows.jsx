import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Show.css";

const Shows = () => {
  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  const getMovie = async () => {
    const response = await fetch("https://www.omdbapi.com/?s=batman&plot=half&apikey=a7becb24");
    const actResponse = await response.json();
    setMovieData(actResponse.Search);
  };

  const getSeries = async () => {
    const response = await fetch("https://www.omdbapi.com/?s=india&type=series&apikey=a7becb24");
    const actResponse = await response.json();
    setSeriesData(actResponse.Search);
  };

  useEffect(() => { 
    getMovie();
    getSeries();
  }, []);

  return (
    <>
      <div className="main-container">
        <h2>Watch Your Movies and Shows</h2>
        <h2 className="h2">For Free 😱!!!</h2>
      
        <h3 >MOVIES</h3>
        <div className="movies">
          {movieData.map((val) => (
            <Link to={`/result1/${val.Title}`} key={val.imdbID}>
              <div className="card">
                <div className="poster">
                  <img src={val.Poster} alt="movie poster" className="movie-img" />
                </div>
                <div className="movie-info">
                  <h3>{val.Title}</h3>
                  <h3>{val.Year}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h3>SERIES</h3>
        <div className="series">
          {seriesData.map((val) => (
            <Link to={`/result1/${val.Title}`} key={val.imdbID}>
              <div className="card">
                <div className="poster">
                  <img src={val.Poster} alt="series poster" className="movie-img" />
                </div>
                <div className="movie-info">
                  <h3>{val.Title}</h3>
                  <h3>{val.Year}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shows;
