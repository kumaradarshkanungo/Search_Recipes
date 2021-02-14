import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableComponent from './TableComponent';

const useStyles = makeStyles((theme) => ({
  centerAlign: {
    textAlign: 'center'
  },
  noResult: {
    width: '100%',
    display: 'block',
    padding: '10px 0',
    textAlign: 'center',
    border: '1px solid #ddd'
  }
}));

function Result(props) {
  const classes = useStyles();
  const { searchResult } = props;

  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);

  function createData(image, quantity, title, energy, nutrients) {
    return { image, quantity, title, energy, nutrients };
  }

  useEffect(() => {
    createTable();
  },[searchResult]);

  const createTable = () => {
    console.log("Hi");
    setCount(searchResult.count)
    let temp = "";
    let tempArr = [];
    searchResult.hits.forEach(element => {
      temp = element.recipe;
      let img = <img src={temp.image} />
      let nutrient = `Protein: <b style="float:right"> ${
        parseInt(temp.totalNutrients.PROCNT.quantity)
      } ${
        temp.totalNutrients.PROCNT.unit
      }</b><br/>
      Fat: <b style="float:right"> ${
        parseInt(temp.totalNutrients.FAT.quantity)
      } ${
        temp.totalNutrients.FAT.unit
      }</b><br/>
      Carbs: <b style="float:right"> ${
        parseInt(temp.totalNutrients.CHOCDF.quantity)
      } ${
        temp.totalNutrients.CHOCDF.unit
      }</b>`
      tempArr.push(createData(img, temp.yield, temp.label, `<b> ${parseInt(temp.totalNutrients.ENERC_KCAL.quantity)} kcal</b>` , nutrient))
    });
    setRows(tempArr);
  }

  return (
    <div className="result">

      <h1 className={classes.centerAlign}>Search Result</h1>
      {count ? <TableComponent rows={rows}/> : <span  className={classes.noResult}>No Results Found</span>}

    </div>
  );
}

export default Result;
