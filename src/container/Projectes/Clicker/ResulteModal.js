import React from "react";
import "./style.scss"

export default function ResulteModal(props) {
  return (
    <div className="resultDiv">
      your result is {props.clickeCaunt}
      <button onClick={props.startNewSet}>start new set</button>
    </div>
  );
}
