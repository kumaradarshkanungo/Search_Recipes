import React, { useState } from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchForm from './search/SearchForm';
import { getRecipes } from '../API/Fetch';

const useStyles = makeStyles((theme) => ({
  root:{
    '& .MuiFormControl-marginNormal': {
      marginTop: '0px'
    },
    '& .MuiFormControl-root': {
      width:'100%'
    }
  },
  centerAlign: {
    textAlign: 'center'
  },
  paragraph: {
    marginBottom: '0px'
  }
}));

function App() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const searchRecipe = async searchData => {
    if(loading) return false;

    const previousSearch = [...searchHistory];
    previousSearch.push(searchData);
    setSearchHistory(previousSearch);
    setLoading(true);

    const result = await getRecipes(searchData.query);

    setLoading(false);
    
  };

  return (
    <div className="App">
      <Container maxWidth="md" className={classes.container}>
        <Card className={classes.root}>
          <CardContent>

            <h1 className={classes.centerAlign}>Recipe Search</h1>
            <p className={classes.paragraph}>Choose one or more options</p>
            
            <SearchForm searchRecipe={searchRecipe} loading={loading} />
            
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
