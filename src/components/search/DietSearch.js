import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Diet } from './SearchOptions.js';


export default function DietSearch(props){
  const { classes, diet, setDiet } = props;

  const handleAutoCompleteChange = value => {
    setDiet(value)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={Diet}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        value={diet}
        onChange={(event,value)=>handleAutoCompleteChange(value)}
        renderInput={(params) => <TextField {...params} label="Diet" margin="normal" />} />
    </div>
  )
} 