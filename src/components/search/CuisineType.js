import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { cuisineType } from './SearchOptions.js';


export default function CuisineType(props){
  const { classes } = props;

  const handleAutoCompleteChange = (value, key) => {
    console.log(value, key)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={cuisineType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={(event,value)=>handleAutoCompleteChange(value,'cuisine_type')}
        renderInput={(params) => <TextField {...params} label="Cuisine Type" margin="normal" />} />
    </div>
  )
} 