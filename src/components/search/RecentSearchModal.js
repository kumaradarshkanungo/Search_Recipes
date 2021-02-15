import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonComponent from '../common/ButtonComponent';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: '15px'
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
    maxHeight: '70%',
    overflow: 'auto',
    position: 'absolute',
    top: '15%',
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    },
  },
  noHistory: {
    width: '100%',
    display: 'block',
    padding: '10px 0',
    textAlign: 'center',
    border: '1px solid #ddd'
  }

}));

export default function RecentSearchModal(props){
  const classes = useStyles();
  const {open, setOpen, searchHistory, searchfromHistoy} = props;


  return(
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={()=>setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2>Recent Search</h2>
          {searchHistory.length ? 
            searchHistory.map((item,index)=>(
              <Card className={classes.card}>
                <CardContent>
                  <span>
                    {item.string}
                  </span>
                  <ButtonComponent label="Search Again" className={classes.modalButton} onClick={()=>searchfromHistoy(item.query)} />
                </CardContent>
              </Card>
          ))
          :
          <span  className={classes.noHistory}>No Search History Found</span>
        }
        
        </div>
      </Fade>
    </Modal>
  )
}