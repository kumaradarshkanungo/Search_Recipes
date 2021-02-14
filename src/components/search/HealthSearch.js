import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Health } from './SearchOptions.js';


export default function HealthSearch(props){
  const { classes, health, setHealth } = props;

  const handleAutoCompleteChange = value => {
    setHealth(value)
  }

  return(
    <div className={classes.textField}>
      <Autocomplete
        multiple
        options={Health}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        value={health}
        onChange={(event,value)=>handleAutoCompleteChange(value)}
        renderInput={(params) => <TextField {...params} label="Health" margin="normal" placeholder="Ex. Eggs" />} />
    </div>
  )
} 