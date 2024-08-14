// import React,{useEffect} from "react";
// // import React from "react";
// import "./Result.css";
// import imdb from './imdb1.png';
// import tomato from './tomato.png';
// import play from './play.png';
// import trailer from './trailer.png';
// import share from './share.png';
// import watchlist from './watchlist.png';

// const Result=()=>{
//   return (
//     <>
//       <div className="result-container">
//         <div className="img-container">
//           <img
//             src="https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SX300.jpg"
//             alt="movie"
//             className="movieImg"
//           />
//         </div>
//         <div className="info-container">
//           <div className="infoCon1">
//             <h1>Pink</h1>
//             <p>Directed By Aniruddha Roy Chowdhury</p>
//           </div>
//           <div className="infoCon2">
//             <h6>"Year": "2016", "Runtime": "136 min","Rated": "Not Rated"</h6>
//             <h6>"Crime, Drama, Thriller"</h6>
//             <h6>Type: "Movie", Language: "Hindi"</h6>            
//             <h6 className="icon-box">
//               <span className="rating-item">
//                 <img src={imdb} alt="imdb" className="icon" />
//                 8.1
//               </span>
//               <span className="rating-item">
//                 <img src={tomato} alt="tomato" className="icon" />
//                 100%
//               </span>
//             </h6>
//             <h6 className="button-container">
//               <button className="watch-button">
//                 <img src={play} alt="play" className="button-icon" />
//                 Watch Free
//               </button>
//               <span className="icon-group">
//                 <img src={watchlist} alt="watchlist" className="small-icon" />
//                 <img src={trailer} alt="trailer" className="small-icon" />
//                 <img src={share} alt="share" className="small-icon" />
//               </span>
//             </h6>
//           </div>
//           <div className="infoCon3">
//             <h4>
//               When three young women are implicated in a crime, a retired lawyer
//               steps forward to help them clear their names.
//             </h4>
//             <h5>Amitabh Bachchan, Taapsee Pannu, Kirti Kulhari</h5>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Result;


import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";
import imdb from './imdb1.png';
import tomato from './tomato.png';
import play from './play.png';
import trailer from './trailer.png';
import share from './share.png';
import watchlist from './watchlist.png';

const Result = ({ searchValue }) => {
  const [movieData,setMovieData]=useState("");
  const navigate = useNavigate();
   const getResult=async()=>
   {
        const response=await fetch(`https://www.omdbapi.com/?t=${searchValue}&apikey=a7becb24`);
        const data = await response.json();
        if (data.Response === "False") {
        navigate('/error');
      } else {
        setMovieData(data);
      }
        // setMovieData(data);
        // console.log(data); // Log the actual data

   }



    // Receive searchValue as a prop
  useEffect(() => {
       getResult();
    // console.log("Search Value:", searchValue); // Log the search value
  }, [searchValue]); // Run effect when searchValue changes
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

export default Result;
