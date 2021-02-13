import { Container, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchForm from './search/SearchForm.js'

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
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="md" className={classes.container}>
        <Card className={classes.root}>
          <CardContent>

            <h1 className={classes.centerAlign}>Recipe Search</h1>
            <p className={classes.paragraph}>Choose one or more options</p>
            
            <SearchForm />
            
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
