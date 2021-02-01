import React from "react";

export default function ResulteModal(props) {
  return (
    <div>
      your result is {props.clickeCaunt}
      <button onClick={props.startNewSet}>start new set</button>
    </div>
  );
}
