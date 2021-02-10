import React, { useState, useEffect } from "react";
import Square from "./Square";

import "./style.scss";

export default function Xikoik() {
  const [bord, setBord] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [turn, setTurn] = useState("X");
  const [won, setWon] = useState(false);
  const [count, setCount] = useState(1);
  const [setnumber, setSetnumber] = useState([]);
  const [winner, setWinner] = useState([]);
 

  useEffect(() => {
    setBord([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);

    setTurn("X");
  }, [count,won]);


  const restartClick = () => {
   
   winner.length >= 9?  clearResult() : won? setWinner([...winner,<span>{turn}</span>]): setWinner([...winner,<span>_</span>]);
  
   
    count >9 ?  setCount(1) : setCount(count + 1);
    setnumber.length >=9 ? setSetnumber([]): setSetnumber([...setnumber, <span>{count}</span>]);
    setWon(false);
  };

  const clearResult =()=>{
    setSetnumber([]);
    setWinner([]);
    
    setCount(1)
  }

  const click = (i, j) => {
    const shallowBoard = bord.map((row) => {
      return [...row];
    });
    shallowBoard[i][j] = turn;
    setBord(shallowBoard);
    isGameWon(shallowBoard, i, j)
      ? setWon(true)
      : setTurn(turn === "X" ? "O" : "X");
  };

  const isGameWon = (shallowBoard, i, j) => {
    return (
      checkHorizontal(shallowBoard[i]) ||
      checkVertical(shallowBoard, j) ||
      checkTopLeftToRight(shallowBoard) ||
      checkBotLeftToRight(shallowBoard)
    );
  };
  const checkHorizontal = (row) => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] !== turn) return false;
    }
    return true;
  };

  const checkVertical = (shallowBoard, j) => {
    for (let i = 0; i < shallowBoard.length; i++) {
      if (shallowBoard[i][j] !== turn) return false;
    }
    return true;
  };

  const checkTopLeftToRight = (shallowBoard) => {
    for (let i = 0; i < shallowBoard.length; i++) {
      if (shallowBoard[i][i] !== turn) return false;
    }
    return true;
  };

  const checkBotLeftToRight = (shallowBoard) => {
    for (let i = shallowBoard.length - 1; i >= 0; i--) {
      if (shallowBoard[i][shallowBoard.length - i - 1] !== turn) return false;
    }
    return true;
  };

  const bordsquer = bord.map((elem, i) => (
    <div key={i} className={"containerdiv"}>
      {elem.map((el, ind) => {
        return <Square key={ind} i={i} j={ind} char={el} click={click} />;
      })}
    </div>
  ));

  return (
    <div className={"mainDivXikOik"}>
      <div className={"turn"}>
        <p>Set Number {count}</p>
        {won ? <p>Player {turn} Won </p> : <p>Player Turn : {turn}</p>}
      </div>

      {won ? <div className={"winerDiv"}>Player {turn} Won </div> : bordsquer}

      <button  onClick={restartClick} className={"restartbtn"}>
        {won ? "Start New Set " : "Restart"}
      </button>

      {count && winner.length ? (
        <div className={"resultMainDiv"}>
          <div className={"titlesOfResult"}>
            <span>Setnumber</span>

            <span>Winner is</span>

         
          </div>

          <div className={"result"}>
            <div> {setnumber}</div>
            <div>{winner}</div>
         
          </div>
          <button onClick={clearResult} className={"cleareResulte"}>Cleare Resulte</button>
        </div>
      ) : null}
    </div>
  );
}
