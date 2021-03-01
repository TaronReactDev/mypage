import React, { useState } from "react";
import  DeleteIcon from "@material-ui/icons/Delete";
import  EditIcon from "@material-ui/icons/Edit";
import FlagIcon  from "@material-ui/icons/Flag";

import "./style.scss";

export default function Task({
  task,
  id,
  onFlag,
  onDelet,
  color,
  edit,
  editTask,
  changeInputEdit,
  saveEdit,
  checked,
  checkedClick
}) {
  const editChange = (ev) => (id) => {
    changeInputEdit(ev, id);
  };


  return (
    <div className="oneTask">
      <div className="checkboxWithTask">
        <input type="checkbox"  onClick ={checkedClick(id)} />
        {edit ? (
          <input value={task} onChange={editChange(id)}></input>
        ) : (
          <p key={id} style={{ textDecorationLine : checked ?  'line-through' : 'none'}}>{task} </p>
        )}
      </div>

      {edit ? (
        <button onClick={saveEdit(id)}>save</button>
      ) : (
        <div className="icon">
          <div onClick={editTask(id)}>
            {" "}
            <EditIcon />{" "}
          </div>
          <div onClick={onFlag(id)}>
            {" "}
            <FlagIcon color={"" + color} />{" "}
          </div>
          <div onClick={onDelet(id)}>
            {" "}
            <DeleteIcon />{" "}
          </div>
        </div>
      )}
    </div>
  );
}
