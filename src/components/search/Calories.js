import { TextField } from '@material-ui/core';


export default function Calories(props){
  const { classes, calories, setCalories } = props;

  const handleChange = e => {
    setCalories(e.target.value)
  }

  return(
    <div className={classes.textField}>
      <TextField
        id="standard-required"
        label="Calories"
        name="calories"
        value={calories}
        onChange={handleChange}  />
    </div>
  )
} 