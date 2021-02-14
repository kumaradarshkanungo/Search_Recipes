import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Health } from './SearchOptions.js';


export default function HealthSearch(props){
  const { classes } = props;

  const handleAutoCompleteChange = (value, key) => {
    console.log(value, key)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={Health}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        onChange={(event,value)=>handleAutoCompleteChange(value,'health')}
        renderInput={(params) => <TextField {...params} label="Health" margin="normal" />} />
    </div>
  )
} 