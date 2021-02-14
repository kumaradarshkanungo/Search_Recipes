import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '& .MuiTableCell-root img': {
      width: '80px',
      border: '1px solid #ddd'
    }
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function TableComponent(props) {
  const classes = useStyles();
  const { rows } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell >Qty</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell >Energy</StyledTableCell>
            <StyledTableCell >Nutrients</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.image}
              </StyledTableCell>
              <StyledTableCell >{row.quantity}</StyledTableCell>
              <StyledTableCell >{row.title}</StyledTableCell>
              <StyledTableCell dangerouslySetInnerHTML={{__html: row.energy}} />
              <StyledTableCell dangerouslySetInnerHTML={{__html: row.nutrients}} />
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
