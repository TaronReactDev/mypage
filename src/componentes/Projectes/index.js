import React from "react";
import NavBar from "../NavBar/NavBar";
import ProjectElement from "./ProjectElem";
import backgroundImage1 from "./Projectimages/githubsearch.jpg";
import backgroundImage2 from "./Projectimages/tic-tac-toe.jpg";
import backgroundImage3 from "./Projectimages/todo.jpg";
import backgroundImage4 from "./Projectimages/githubsearch.jpg";
import backgroundImage5 from "./Projectimages/githubsearch.jpg";
import "./style.scss";

export default function index() {
  const imagesForProjectes = [
    [backgroundImage1, "Github profile searcher","githubprofilesearcher"],
    [backgroundImage2, "Tic-tac-toe","tictactoe"],
    [backgroundImage3, "My to do list","mytodolist"],
    [backgroundImage4, "Clicker","clicker"],
  ];
  const projectes = imagesForProjectes.map((elem) => {
    return <ProjectElement images={elem[0]} text={elem[1]} url={elem[2]}/>;
  });

  return (
    <div>
      <NavBar />
      <div className="projectesContainer"> {projectes}</div>
    </div>
  );
}
