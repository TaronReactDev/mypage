import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Task from "./Task"
import "./style.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };
  const submit = (ev) => {
    ev.preventDefault();
    const task = {
      id: new Date(),
      task: value,
    };
    setTasks([...tasks, { task }]);
    setValue("");
  };

  const todo = tasks.map((el) => {


    return <Task id={el.task.id} task ={el.task.task}/>;
  });

  return (
    <>
      <form
        className={classes.root}
        onSubmit={submit}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="enter your task"
            rowsMax={4}
            value={value}
            onChange={handleChange}
          />{" "}
        </div>{" "}
      </form>
      {todo}
    </>
  );
}
