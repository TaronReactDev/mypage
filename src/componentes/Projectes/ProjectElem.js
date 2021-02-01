import React from "react";

export default function ProjectElem(props) {
    console.log(props.imges);
  return <div className={"projElem"} style={{backgroundImage: "url(" + props.images + ")"}} > <p className={"projectDescription"}>{props.text}</p> </div>;
}
