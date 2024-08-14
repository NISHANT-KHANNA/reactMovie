import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; 
// import Result from "./Result";
ReactDom.render(
   <>
   <BrowserRouter> 
   <App />
   </BrowserRouter>
   {/*<App />*/}
   </>  

  ,document.getElementById("root")); 