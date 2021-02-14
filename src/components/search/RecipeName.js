import { TextField } from '@material-ui/core';


export default function RecipeName(props){
  const { classes, recipe_name, setRecipeName } = props;

  const handleChange = e => {
    setRecipeName(e.target.value);
  }

  return(
    <div className={classes.textField}>
      <TextField
        required
        id="standard-required"
        label="Recipe Name"
        name="recipe_name"
        value={recipe_name}
        placeholder="Ex. Chicken"
        onChange={handleChange} />
    </div>
  )
} 