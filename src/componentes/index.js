import React from "react";
import Navbar from "./NavBar/NavBar";
import Educ from "./EducationWork/Educ";
import Work from "./EducationWork/Work";
import Skills from "./Skill/index";


import "./style.scss";

export default function index() {
  return (
    <>
      <Navbar />
      <div className={"mainDiv"} >
        <div>
          <p> Hi my name is Taron and i am a frontend developer</p>
          <a href="./cv Taron.pdf" download>
            click to downlode my CV
          </a>
        </div>
      </div>
      <Educ />

      <Work />
      <Skills />
    </>
  );
}
