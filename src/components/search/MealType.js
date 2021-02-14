import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { mealType } from './SearchOptions.js';


export default function Mealtype(props){
  const { classes } = props;

  const handleAutoCompleteChange = (value, key) => {
    console.log(value, key)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={mealType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={(event,value)=>handleAutoCompleteChange(value,'meal_type')}
        renderInput={(params) => <TextField {...params} label="Meal Type" margin="normal" />} />
    </div>
  )
} 