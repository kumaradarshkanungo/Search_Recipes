import { TextField } from '@material-ui/core';


export default function Calories(props){
  const { classes, calories, setCalories } = props;

  const handleChange = e => {
    setCalories(e.target.value)
  }

  return(
    <div className={classes.textField}>
      <TextField
        id="calories"
        label="Calories (Kcal)"
        name="calories"
        value={calories}
        placeholder="Ex. 100"
        onChange={handleChange}  />
    </div>
  )
} 