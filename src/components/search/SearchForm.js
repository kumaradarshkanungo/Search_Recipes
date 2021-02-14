import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeName from './RecipeName.js';
import Calories from './Calories.js';
import Time from './Time.js';
import CuisineType from './CuisineType.js';
import Mealtype from './MealType.js';
import DishType from './DishType.js';
import DietSearch from './DietSearch.js';
import HealthSearch from './HealthSearch.js';
import SearchButton from './SearchButton.js';

const useStyles = makeStyles((theme) => ({
  inputClass:{
    padding: '10px',
  },
  textField:{
    display: 'inline-block',
    marginRight: '10px',
    marginTop: '10px',
    minWidth: '30%',
    [theme.breakpoints.down('xs')]: {
        minWidth: '100%'
    },
  },
  submitSection:{
    width: '100%',
    textAlign: 'center',
    marginTop: '10px'
  }

}));

export default function SearchForm(props){
  const classes = useStyles();

  const [recipe_name, setRecipeName] = useState("");
  const [calories, setCalories] = useState("");
  const [time, setTime] = useState("");
  const [cuisine_type, setCuisineType] = useState([]);
  const [meal_type, setMealType] = useState([]);
  const [dish_type, setDishType] = useState([]);
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([]);

  const submitForm = e => {
    e.preventDefault();
  }

  return(
    <form className={classes.root} autoComplete="off" onSubmit={submitForm}>
      <RecipeName classes={classes} recipe_name={recipe_name} setRecipeName={setRecipeName} />

      <Calories classes={classes} calories={calories} setCalories={setCalories} />
      
      <Time classes={classes} time={time} setTime={setTime} />
      
      <CuisineType classes={classes} cuisine_type={cuisine_type} setCuisineType={setCuisineType} />

      <Mealtype classes={classes} meal_type={meal_type} setMealType={setMealType} />
      
      <DishType classes={classes} dish_type={dish_type} setDishType={setDishType} />
      
      <DietSearch classes={classes} diet={diet} setDiet={setDiet} />

      <HealthSearch classes={classes} health={health} setHealth={setHealth} />
      
      <SearchButton classes={classes} />
      
    </form>
  )
}