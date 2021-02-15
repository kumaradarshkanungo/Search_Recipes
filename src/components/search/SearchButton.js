import { Fade, CircularProgress } from '@material-ui/core';
import ButtonComponent from '../common/ButtonComponent';

export default function SearchButton(props){
  const { classes, loading } = props;

  return(
    <div className={classes.submitSection} style={{position: 'relative'}}>
      <ButtonComponent label="Search" type="submit" />
      <Fade
          in={loading}
          unmountOnExit
        >
          <CircularProgress size={30} />
        </Fade>
    </div>
  )
} 