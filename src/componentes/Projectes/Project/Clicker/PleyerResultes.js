import React from "react";
import Grid from "@material-ui/core/Grid";

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
    <Grid container spacing={1}>
      <Grid item xs={8} sm={4}>
        <p>Setnumber</p>
        {set}
      </Grid>
      <Grid item xs={8} sm={4}>
        <p>Player 1</p>
        {player1}
      </Grid>
      <Grid item xs={8} sm={4}>
        <p>Player 2</p>
        {player2}
      </Grid>
    </Grid>
  );
}
