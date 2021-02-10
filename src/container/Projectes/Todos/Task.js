import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FlagIcon from '@material-ui/icons/Flag';
import "./style.scss"

export default function Task({task, id}) {
    return (
        <div  className="oneTask">
            <div className="checkboxWithTask">
                <input type="checkbox"/>
            <p key ={id}  >{task} </p>
            </div>
            <div className="icon">
            <EditIcon/> 
            <FlagIcon />
          
            <DeleteIcon/>
</div>
        </div>
    )
}
