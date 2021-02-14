import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { cuisineType } from './SearchOptions.js';

export default function CuisineType(props){
  const { classes, cuisine_type, setCuisineType } = props;

  const handleAutoCompleteChange = value => {
    setCuisineType(value)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={cuisineType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={cuisine_type}
        onChange={(event,value)=>handleAutoCompleteChange(value)}
        renderInput={(params) => <TextField {...params} label="Cuisine Type" margin="normal" />} />
    </div>
  )
} 