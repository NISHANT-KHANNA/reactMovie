// import React,{ useEffect }from "react";
// import {NavLink,Routes,Route,useLocation} from "react-router-dom";
// import "./index.css";
// import Home from "./Home";
// import Shows from "./Shows";
// import About from "./About";
// import Contact from "./Contact";
// import Result from "./Result";

// const App = () => {
//      const location = useLocation();
//      const handleChange= async(event)=>
//      {
//         const value=event.target.value;
//         const response=await fetch(`https://www.omdbapi.com/?t=${value}&apikey=a7becb24`);
//         const data = await response.json(); // Await the JSON parsing
//       console.log(data); // Log the actual data

//      }

//     useEffect(() => {
        
//         if (location.pathname === "/") {
//             document.body.classList.add("home");
//         } else {
//             document.body.classList.remove("home");
//             document.body.classList.add("show-home");
//         }
//     }, [location.pathname]);

//   return (
//     <>
//       <div className="navbar">
//         <div className="firsthalf">
//           <h1>Binge</h1>
//           <input className="movie-input" type="text" placeholder="search ....." onChange={handleChange} />
//         </div>
//         <div className="secondhalf">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/show">Shows</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </div>
//       </div>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/show" element={<Shows />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// };


// export default App;


// // import React, { useEffect,useState } from "react";
// // import { NavLink, Routes, Route, useLocation } from "react-router-dom";
// // import "./index.css";
// // import Home from "./Home";
// // import Shows from "./Shows";
// // import About from "./About";
// // import Contact from "./Contact";
// // import Result from "./Result";

// // const App = () => { 
// //   const [searchValue, setSearchValue] = useState(''); // Manage search value here
// //   const location = useLocation();

// //   const handleChange = (event) => {
// //     setSearchValue(event.target.value); // Update state on input change
// //   };

// //   useEffect(() => {
// //     if (location.pathname === "/") {
// //       document.body.classList.add("home");
// //     } else {
// //       document.body.classList.remove("home");
// //       document.body.classList.add("show-home");
// //     }
// //   }, [location.pathname]);

// //   return (
// //     <>
// //       <div className="navbar">
// //         <div className="firsthalf">
// //           <h1>Binge</h1>
// //           <input
// //             className="movie-input"
// //             type="text"
// //             placeholder="search ....."
// //             onChange={handleChange} // Update state on input change
// //           />
// //         </div>
// //         <div className="secondhalf">
// //           <NavLink to="/">Home</NavLink>
// //           <NavLink to="/show">Shows</NavLink>
// //           <NavLink to="/about">About</NavLink>
// //           <NavLink to="/contact">Contact</NavLink>
// //         </div>
// //       </div>

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/show" element={<Shows />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/result" element={<Result searchValue={searchValue} />} /> {/* Pass searchValue as a prop */}
// //       </Routes>
// //     </>
// //   );
// // };

// // export default App;


// import React, { useState,useEffect } from "react";
// import { NavLink, Routes, Route, useLocation } from "react-router-dom";
// import "./index.css";
// import Home from "./Home";
// import Shows from "./Shows";
// import About from "./About";
// import Contact from "./Contact";
// import Result from "./Result";

// const App = () => {
//   const [searchValue, setSearchValue] = useState(''); // Manage search value here
//   const location = useLocation();

//   const handleChange = (event) => {
//     setSearchValue(event.target.value); // Update state on input change
//   };

//   useEffect(() => {
//     if (location.pathname === "/") {
//       document.body.classList.add("home");
//     } else {
//       document.body.classList.remove("home");
//       document.body.classList.add("show-home");
//     }
//   }, [location.pathname]);

//   return (
//     <>
//       <div className="navbar">
//         <div className="firsthalf">
//           <h1>Binge</h1>
//           <input
//             className="movie-input"
//             type="text"
//             placeholder="search ....."
//             onChange={handleChange} // Update state on input change
//           />
//         </div>
//         <div className="secondhalf">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/show">Shows</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </div>
//       </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/show" element={<Shows />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/result" element={<Result searchValue={searchValue} />} /> {/* Pass searchValue as a prop */}
//       </Routes>
//     </>
//   );
// };

// export default App;


// import React, { useState,useEffect } from "react";
// import { NavLink, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import "./index.css";
// import Home from "./Home";
// import Shows from "./Shows";
// import About from "./About";
// import search from "./search.png";
// // import Contact from "./Contact";
// import Result from "./Result";
// import Result1 from "./Result1";

// const App = () => {
//   const [searchValue, setSearchValue] = useState(''); // Manage search value here
//   const navigate = useNavigate(); // Initialize navigate function
//   const location = useLocation();

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setSearchValue(value); // Update state on input change

//   };
// // const handleSearch = () => {
// //     if (searchValue.trim()) { // Check if the search value is not empty
// //       navigate('/result', { state: { searchValue } }); // Redirect to Result page with searchValue
// //     }
// //   };
//   const handleSearch = () => {
//     if (searchValue.trim()) { // Check if the search value is not empty
//       navigate('/result/${searchValue}'); // Redirect to Result page with searchValue
//     }
//   };
//   useEffect(() => {
//     if (location.pathname === "/") {
//       document.body.classList.add("home");
//     } else {
//       document.body.classList.remove("home");
//       document.body.classList.add("show-home");
//     }
//   }, [location.pathname]);

//   return (
//     <>
//       <div className="navbar">
//         <div className="firsthalf">
//           <h1>Binge</h1>
//           <input
//             className="movie-input"
//             type="text"
//             placeholder="search ....."
//             onChange={handleChange} // Update state on input change
//           />
//            <button className="search-button" onClick={handleSearch}>Search</button> 
//         </div>
//         <div className="secondhalf">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/show">Shows</NavLink>
//           <NavLink to="/about">About</NavLink>
//           {/*<NavLink to="/contact">Contact</NavLink>*/}
//         </div>
//       </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/show" element={<Shows />} />
//         <Route path="/about" element={<About />} />
//         {/*<Route path="/contact" element={<Contact />} />*/}
//         <Route path="/result/:searchValue" element={<Result searchValue={searchValue} />} /> {/* Pass searchValue as a prop */}
//         <Route path="/Result1/:movieTitle" element={<Result1 />} />
//       </Routes>
//     </>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Shows from "./Shows";
import About from "./About";
import search from "./search.png"; // Import the search image
import Result from "./Result";
import Result1 from "./Result1";
import Error from "./Error";

const App = () => {
  const [searchValue, setSearchValue] = useState(''); // Manage search value here
  const navigate = useNavigate(); // Initialize navigate function
  const location = useLocation();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value); // Update state on input change
  };

  const handleSearch = () => {
    if (searchValue.trim()) { // Check if the search value is not empty
      navigate(`/result/${searchValue}`); // Redirect to Result page with searchValue
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home");
    } else {
      document.body.classList.remove("home");
      document.body.classList.add("show-home");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="navbar">
        <div className="firsthalf">
          <h1>Binge.</h1>
          <div className="search-container">
            <input
              className="movie-input"
              type="text"
              placeholder="search ....."
              onChange={handleChange} // Update state on input change
            />
            <button className="search-button" onClick={handleSearch}>
              <img src={search} alt="search" />
            </button>
          </div>
        </div>
        <div className="secondhalf">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/show">Shows</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Shows />} />
        <Route path="/about" element={<About />} />
        <Route path="/result/:searchValue" element={<Result searchValue={searchValue} />} />
        <Route path="/Result1/:movieTitle" element={<Result1 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
