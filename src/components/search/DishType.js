import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { dishType } from './SearchOptions.js';


export default function DishType(props){
  const { classes, dish_type, setDishType } = props;

  const handleAutoCompleteChange = value => {
    setDishType(value)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={dishType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={dish_type}
        onChange={(event,value)=>handleAutoCompleteChange(value)}
        renderInput={(params) => <TextField {...params} label="Dish Type" margin="normal" />} />
    </div>
  )
} 