import React from "react";
import './Home.css'; // Import the Home-specific CSS
import { useNavigate } from "react-router-dom";
import Shows from "./Shows";
const Home = () => {
  const navigate=useNavigate();
  const direct=()=>
  {
     navigate('/show');
  }
  return (
    <div className="container">
      <h1> Movies Serials Shows,</h1>
      <h1>Anytime Anywhere.</h1>
      <p>The search is over! Let Binge help you find the perfect movie to watch tonight for free.</p>
      <button className="btn-watch" onClick={direct}>Watch Now!</button>
    </div>
  );
}

export default Home;
