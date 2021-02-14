import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Diet } from './SearchOptions.js';


export default function DietSearch(props){
  const { classes } = props;

  const handleAutoCompleteChange = (value, key) => {
    console.log(value, key)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={Diet}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        onChange={(event,value)=>handleAutoCompleteChange(value,'diet')}
        renderInput={(params) => <TextField {...params} label="Diet" margin="normal" />} />
    </div>
  )
} 