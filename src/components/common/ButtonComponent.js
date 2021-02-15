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

export default function ButtonComponent(props){
  const { label, type, className, onClick } = props;

  return(
    <ColorButton variant="contained" color="primary" type={type} className={className} onClick={onClick} >
      {label}
    </ColorButton>
  )
} 