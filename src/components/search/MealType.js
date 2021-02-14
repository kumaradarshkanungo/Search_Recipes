import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { mealType } from './SearchOptions.js';


export default function Mealtype(props){
  const { classes, meal_type, setMealType } = props;

  const handleAutoCompleteChange = value => {
    setMealType(value)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={mealType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={meal_type}
        onChange={(event,value)=>handleAutoCompleteChange(value)}
        renderInput={(params) => <TextField {...params} label="Meal Type" margin="normal" placeholder="Ex. Lunch" />} />
    </div>
  )
} 