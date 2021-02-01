import React from "react";
import Navbar from "./NavBar/NavBar";
import Educ from "./Education&Work/Educ";
import Work from "./Education&Work/Work";
import Skills from "./Skill/index";

import "./style.scss";

export default function index() {
  return (
    <>
    <Navbar />
      <div className={"mainDiv"}>
    </div>
      <Educ />
    
      <Work />
      <Skills />
    </>
  );
}
