import React from "react";
import Social from "../Information/Social";
import Contacts from "../Information/Contacts";
import {  Link  } from "react-router-dom";
import "./style.scss";

export default function NavBar() {
  console.log(window.location.pathname);
  return (
    <div className={"mainNavigationDiv"}>
      <div className={"left"}>
      <Link to="/">Home</Link>
        {/* <a href={"#"}>About me</a> */}

{window.location.pathname === "/projectes" ? "" : <>
   <a href={"#work"}>Work</a>
   <a href={"#educ"}>Education</a>
   <a href={"#skill"}>Skills</a>

   <Link to="/projectes">Projectes</Link>
   </>
}
      
      

        
          
        
      </div>
      <Social />
      <Contacts />
      <div className={"right"}>
      <Link to="/aboutme">About me</Link>
      </div>
    </div>
  );
}
