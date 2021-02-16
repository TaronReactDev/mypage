import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ offset: 400, delay: 100, duration: 400 });



export default function ProjectElem(props) {
  return (
    <Link to={`/projectes ${props.url}`}   className={"projElemLink"} data-aos={props.dataaos}>
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
