import React from "react";
import { Link } from "react-router-dom";

export default function ProjectElem(props) {
  return (
    <Link to={`/projectes ${props.url}`}   className={"projElemLink"}>
      <div
        className={"projElem"}
        style={{ backgroundImage: "url(" + props.images + ")" }}
      >
        {" "}
        <p className={"projectDescription"}>{props.text}</p>{" "}
      </div>
    </Link>
  );
}
