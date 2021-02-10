import React from "react";

export default function PleyerResultes(props) {
  var resultes = props.resultes;
  let player1 = [];
  let player2 = [];

  player1 = resultes
    .filter((elem, i) => {
      return i % 2 === 0;
    })
    .map((e) => {
      return <p>{e}</p>;
    });

  player2 = resultes
    .filter((elem, i) => {
      return i % 2 === 1;
    })
    .map((e) => {
      return <p>{e}</p>;
    });

  let set = player1.map((e, i) => {
    return <p>{i + 1}</p>;
  });

  return (
    <div className="resulte">
      <div className="setnumber">
        {" "}
        <p >Setnumber</p>
        {set}
      </div>
      <div className="setnumber">
        {" "}
        <p>Player 1</p>
        {player1}
      </div>
      <div className="setnumber">
        <p>Player 2</p>
        {player2}
      </div>
    </div>
  );
}
