import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Result.css";
import imdb from './imdb1.png';
import tomato from './tomato.png';
import play from './play.png';
import trailer from './trailer.png';
import share from './share.png';
import watchlist from './watchlist.png';

const Result1 = () => {
  const {movieTitle}=useParams();
  const [movieData,setMovieData]=useState("");
   const getResult=async()=>
   {
        const response=await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=a7becb24`);
        const data = await response.json();
        setMovieData(data);
        // console.log(data); // Log the actual data

   }



    // Receive searchValue as a prop
  useEffect(() => {
       getResult();
    // console.log("Search Value:", searchValue); // Log the search value
  }, [movieTitle]); // Run effect when searchValue changes
  // const imdRating = movieData.Ratings[0]?.Value || 'N/A';
   const imdRating = movieData.Ratings && movieData.Ratings.length > 0 ? movieData.Ratings[0].Value : 'N/A';
  return (
    <>
      <div className="result-container">
        <div className="img-container">
          <img
            src={movieData.Poster}
            alt="movie"
            className="movieImg"
          />
        </div>
        <div className="info-container">
          <div className="infoCon1">
            <h1>{movieData.Title}</h1>
            <p>Directed By {movieData.Director}</p>
          </div>
          <div className="infoCon2">
            <h6>{movieData.Year}  &nbsp;&nbsp;    {movieData.Runtime} &nbsp;&nbsp;   {movieData.Rated}</h6>
            <h6>{movieData.Genre}</h6>
            <h6>{movieData.Type 
    ? movieData.Type.charAt(0).toUpperCase() + movieData.Type.slice(1).toLowerCase()
    : 'N/A'}  &nbsp;&nbsp;{movieData.Lang}</h6>            
            <h6 className="icon-box">
              <span className="rating-item">
                <img src={imdb} alt="imdb" className="icon" />
                {movieData.imdbRating}
              </span>
              <span className="rating-item">
                <img src={tomato} alt="tomato" className="icon" />
                {imdRating}
              </span>
            </h6>
            <h6 className="button-container">
              <button className="watch-button">
                <img src={play} alt="play" className="button-icon" />
                Watch Free
              </button>
              <span className="icon-group">
                <img src={watchlist} alt="watchlist" className="small-icon" />
                <img src={trailer} alt="trailer" className="small-icon" />
                <img src={share} alt="share" className="small-icon" />
              </span>
            </h6>
          </div>
          <div className="infoCon3">
            <h4>
              {movieData.Plot}
            </h4>
            <h5>{movieData.Actors}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result1;
