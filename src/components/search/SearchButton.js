import { Button, Fade, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#7aca25',
    '&:hover': {
      backgroundColor: '#6db421',
    },
  }
}))(Button);

export default function SearchButton(props){
  const { classes, loading } = props;

  return(
    <div className={classes.submitSection} style={{position: 'relative'}}>
      <ColorButton variant="contained" color="primary" type="submit" >
        Submit
      </ColorButton>
      <Fade
          in={loading}
          unmountOnExit
        >
          <CircularProgress size={30} />
        </Fade>
    </div>
  )
} 