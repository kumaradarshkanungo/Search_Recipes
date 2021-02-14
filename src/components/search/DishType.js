import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { dishType } from './SearchOptions.js';


export default function DishType(props){
  const { classes } = props;

  const handleAutoCompleteChange = (value, key) => {
    console.log(value, key)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={dishType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={(event,value)=>handleAutoCompleteChange(value,'dish_type')}
        renderInput={(params) => <TextField {...params} label="Dish Type" margin="normal" />} />
    </div>
  )
} 