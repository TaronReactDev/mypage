import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);







const handleChange=(ev)=>{
setValue(ev.target.value)
}
const submit =(ev)=>{
  ev.preventDefault();
  const task={
    id: new Date(),
    task:value
  }
setTasks([...tasks, {task}])
  setValue("")}

const todo = tasks.map(el=>{return <p key={el.task.id}>
  {el.task.task}</p>})



  return (<>
    <form className={classes.root} 
    onSubmit={submit}
    noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />      </div> </form>
{todo}
</>
  )
}
