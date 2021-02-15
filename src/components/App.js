import React, { useState } from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchForm from './search/SearchForm';
import { getRecipes } from '../API/Fetch';
import Result from './result/Result';

const useStyles = makeStyles((theme) => ({
  root:{
    '& .MuiFormControl-marginNormal': {
      marginTop: '0px'
    },
    '& .MuiFormControl-root': {
      width:'100%'
    }
  }
}));

function App() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const searchRecipe = async searchData => {
    if(loading) return false;

    const previousSearch = [...searchHistory];
    previousSearch.push(searchData);
    setSearchHistory(previousSearch);
    setLoading(true);

    const result = await getRecipes(searchData.query);
    setSearchResult(result);

    setLoading(false);
    
  };

  const searchAgain = async query => {
    if(loading) return false;

    setLoading(true);
    
    const result = await getRecipes(query);
    setSearchResult(result);
    
    setLoading(false);
  }

  return (
    <div className="App">
      <Container maxWidth="md" className={classes.container}>
        <Card className={classes.root}>
          <CardContent>  
            <SearchForm searchRecipe={searchRecipe} loading={loading} searchHistory={searchHistory} searchAgain={searchAgain} />
            {searchResult && <Result searchResult={searchResult} />}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
