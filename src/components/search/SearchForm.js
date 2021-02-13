import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {cuisineType, dishType, mealType, Diet, Health} from './SearchOptions.js'

const useStyles = makeStyles((theme) => ({
  root:{
    '& .MuiFormControl-marginNormal': {
      marginTop: '0px'
    },
    '& .MuiFormControl-root': {
      width:'100%'
    }
  },
  inputClass:{
    padding: '10px',
  },
  textField:{
    display: 'inline-block',
    marginRight: '10px',
    minWidth: '30%',
    [theme.breakpoints.down('xs')]: {
        minWidth: '100%',
        marginBottom: '5px'
    },
  },
  submitSection:{
    width: '100%',
    textAlign: 'center',
    marginTop: '10px'
  }

}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#7aca25',
    '&:hover': {
      backgroundColor: '#6db421',
    },
  },
}))(Button);

export default function SearchForm(props){
  const classes = useStyles();
  return(
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.textField}>
        <TextField required id="standard-required" label="Recipe Name" />
      </div>
      <div className={classes.textField}>
        <TextField id="standard-required" label="Calories" />
      </div>
      <div className={classes.textField}>
        <TextField id="standard-required" label="Time" />
      </div>
      <div className={classes.textField}>
      <Autocomplete
        multiple
        options={cuisineType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Cuisine Type" margin="normal" />} />
      </div>
      <div className={classes.textField}>
      <Autocomplete
        multiple
        options={mealType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Meal Type" margin="normal" />} />
      </div>
      <div className={classes.textField}>
      <Autocomplete
        multiple
        options={dishType}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Dish Type" margin="normal" />} />
      </div>
      <div className={classes.textField}>
      <Autocomplete
        multiple
        options={Diet}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Diet" margin="normal" />} />
      </div>
      <div className={classes.textField}>
      <Autocomplete
        multiple
        options={Health}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Health" margin="normal" />} />
      </div>
      <div className={classes.submitSection}>
        <ColorButton variant="contained" color="primary" className={classes.margin}>
          Submit
        </ColorButton>
      </div>
    </form>
  )
}