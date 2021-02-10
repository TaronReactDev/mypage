import React, { useState } from "react";
import ResultModal from "./ResulteModal";
import PleyerResultes from "./PleyerResultes";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function Index() {
  const [clickeCaunt, setClickeCaunt] = useState(0);
  const [firstClick, setFirstClick] = useState(true);
  const [GameSetTime, setGameSetTime] = useState(5000);
  const [alertResult, setAlertResult] = useState(false);
  const [resultes, setResultes] = useState([]);

  const click = () => {
    setClickeCaunt((prevclickeCaunt) => prevclickeCaunt + 1);
  };

  const handelBtnClic = () => {
    setClickeCaunt(1);
    setFirstClick(false);
    const time = Date.now();
    const GameSetTime = setInterval(() => {
      setGameSetTime(5000 - (Date.now() - time));
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(GameSetTime);
      setFirstClick(true);
      clearTimeout(timeout);
      setGameSetTime(0);
      setAlertResult(true);
    }, 5000);
  };

  const startNewSet = () => {
    setAlertResult(false);
    setClickeCaunt(0);
    setGameSetTime(5000);
    setResultes([...resultes, clickeCaunt]);
  };

  return (
    <>
      {alertResult ? (
        <ResultModal startNewSet={startNewSet} clickeCaunt={clickeCaunt} />
      ) : (  <> <p >
              Time - {GameSetTime}
            </p>
            <p >
              {" "}
              Cilckes count - {clickeCaunt}
            </p>
            <Button
              variant="contained"
              color="secondary"
              onClick={firstClick ? handelBtnClic : click}
            
            >
              Clicker
            </Button>
        
         
            <PleyerResultes resultes={resultes} />{" "}
        
      </>
      )}
    </>
  );
}
