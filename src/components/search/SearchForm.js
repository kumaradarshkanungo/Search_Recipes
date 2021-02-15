import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecipeName from './RecipeName';
import Calories from './Calories';
import Time from './Time';
import CuisineType from './CuisineType';
import Mealtype from './MealType';
import DishType from './DishType';
import DietSearch from './DietSearch';
import HealthSearch from './HealthSearch';
import SearchButton from './SearchButton';
import RecentSearchModal from './RecentSearchModal';
import ButtonComponent from '../common/ButtonComponent';

const useStyles = makeStyles((theme) => ({
  root:{
    '& .MuiCircularProgress-root':{
      position: 'absolute',
      marginLeft: '15px',
      marginTop: '3px'
    },
  },
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
  },
  centerAlign: {
    textAlign: 'center'
  },
  paragraph: {
    marginBottom: '0px'
  },
  button: {
    marginRight: '60px',
    float: 'right',
    [theme.breakpoints.down('xs')]: {
      marginRight: '0'
    },
  },
  modalButton: {
    marginTop: '15px',
    marginBottom: '15px',
    float: 'right',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    border: '1px solid #7aca25',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '65%',
    position: 'absolute',
    top: '15%',
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    },
  },

}));

export default function SearchForm(props){
  const classes = useStyles();
  const { loading, searchRecipe, searchHistory, searchAgain } = props;

  const [recipe_name, setRecipeName] = useState("");
  const [calories, setCalories] = useState("");
  const [time, setTime] = useState("");
  const [cuisine_type, setCuisineType] = useState([]);
  const [meal_type, setMealType] = useState([]);
  const [dish_type, setDishType] = useState([]);
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([]);
  const [open, setOpen] = useState(false);

  const submitForm = e => {
    e.preventDefault();

    let searchText = `Recipe Name=${recipe_name}`;
    let searchRequest = `q=${recipe_name}`;

    if(calories){
      if(!isNaN(calories)){
        searchText += `, Calories=${calories} Kcal`;
        searchRequest += `&calories=${calories}`;
      }else{
        alert("Invalid Calories value");
        return false;
      }
    }

    if(time){
      if(!isNaN(time)){
        searchText += `, Time=${time} Minutes`;
        searchRequest += `&time=${time}`;
      }else{
        alert("Invalid Time");
        return false;
      }
    }

    if(cuisine_type.length){
      cuisine_type.forEach((value, index)=>{
        if(index == 0){
          searchText += `, Cuisine Type=${value}`;
          searchRequest += `&cuisineType=${value}`;
        }else{
          searchText += `&${value}`;
          searchRequest += `&cuisineType=${value}`;
        }
      })
    }

    if(meal_type.length){
      meal_type.forEach((value, index)=>{
        if(index == 0){
          searchText += `, Meal Type=${value}`;
          searchRequest += `&mealType=${value}`;
        }else{
          searchText += `&${value}`;
          searchRequest += `&mealType=${value}`;
        }
      })
    }

    if(dish_type.length){
      dish_type.forEach((value, index)=>{
        if(index == 0){
          searchText += `, Dish Type=${value}`;
          searchRequest += `&dishType=${value}`;
        }else{
          searchText += `&${value}`;
          searchRequest += `&dishType=${value}`;
        }
      })
    }

    if(diet.length){
      diet.forEach((value, index)=>{
        if(index == 0){
          searchText += `, Diet=${value.label}`;
          searchRequest += `&diet=${value.value}`;
        }else{
          searchText += `&${value.label}`;
          searchRequest += `&diet=${value.value}`;
        }
      })
    }

    if(health.length){
      health.forEach((value, index)=>{
        if(index == 0){
          searchText += `, Health=${value.label}`;
          searchRequest += `&health=${value.value}`;
        }else{
          searchText += `&${value.label}`;
          searchRequest += `&health=${value.value}`;
        }
      })
    }

    searchRecipe({string: searchText, query: searchRequest});
  }

  const searchfromHistoy = query => {
    setOpen(false);
    searchAgain(query);
  }

  return(
    <>
      <h1 className={classes.centerAlign}>Recipe Search</h1>
      <p className={classes.paragraph}>
        Choose one or more options
        <ButtonComponent label="Recent Search" type="button" className={classes.button} onClick={()=>setOpen(true)} />
      </p>
      <form className={classes.root} autoComplete="off" onSubmit={submitForm}>
        <RecipeName classes={classes} recipe_name={recipe_name} setRecipeName={setRecipeName} />

        <Calories classes={classes} calories={calories} setCalories={setCalories} />
        
        <Time classes={classes} time={time} setTime={setTime} />
        
        <CuisineType classes={classes} cuisine_type={cuisine_type} setCuisineType={setCuisineType} />

        <Mealtype classes={classes} meal_type={meal_type} setMealType={setMealType} />
        
        <DishType classes={classes} dish_type={dish_type} setDishType={setDishType} />
        
        <DietSearch classes={classes} diet={diet} setDiet={setDiet} />

        <HealthSearch classes={classes} health={health} setHealth={setHealth} />
        
        <SearchButton classes={classes} loading={loading} />
        
      </form>

      <RecentSearchModal open={open} setOpen={setOpen} searchHistory={searchHistory} searchfromHistoy={searchfromHistoy} />

    </>
  )
}