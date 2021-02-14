import { TextField } from '@material-ui/core';


export default function Time(props){
  const { classes, time, setTime } = props;

  const handleChange = e => {
    setTime(e.target.value);
  }

  return(
    <div className={classes.textField}>
      <TextField
      id="standard-required"
      label="Time (minutes)"
      name="time"
      value={time}
      placeholder="Ex. 60"
      onChange={handleChange}  />
    </div>
  )
}