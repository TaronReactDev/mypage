import React from "react";
import NavBar from "../componentes/NavBar/NavBar";
import ProjectElement from "./ProjectElem";
import backgroundImage1 from "./Projectimages/githubsearch.jpg";
import backgroundImage2 from "./Projectimages/tic-tac-toe.jpg";
import backgroundImage3 from "./Projectimages/todo.jpg";
import backgroundImage4 from "./Projectimages/githubsearch.jpg";
import backgroundImage5 from "./Projectimages/githubsearch.jpg";
import "./style.scss";

export default function index() {
  const imagesForProjectes = [
    [backgroundImage1, "Github profile searcher","githubprofilesearcher","fade-right"],
    [backgroundImage2, "Tic-tac-toe","tictactoe","fade-left"],
    [backgroundImage3, "My to do list","mytodolist","fade-right"],
    [backgroundImage4, "Clicker","clicker","fade-right","fade-left"],
    [backgroundImage5, "Canvas","canvas","fade-right"],
  ];
  const projectes = imagesForProjectes.map((elem) => {
    return <ProjectElement images={elem[0]} text={elem[1]} url={elem[2]} dataaos={elem[3]}/>;
  });

  return (
    <div>
      <NavBar />
      <div className="projectesContainer"> {projectes}</div>
    </div>
  );
}
