import React, {  useContext } from 'react'
import moment from 'moment'
import { DataContext } from '../context/dataContext';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useTable } from 'react-table'
// import Table from 'react-bootstrap/Table';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const ShoData = () => {
const classes = useStyles();
const { datas,dispatch } = useContext(DataContext);
return (
   
    <div className="container" className="col-lg-12">
        
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Scheme Name</StyledTableCell>
                    <StyledTableCell>Date of Introduction</StyledTableCell>
                    <StyledTableCell>Scheme Type</StyledTableCell>
                    <StyledTableCell>Yearly Interest Rate</StyledTableCell>
                    <StyledTableCell>IRDA Code</StyledTableCell>
                    <StyledTableCell>Yearly Minimum Investment</StyledTableCell>
                    <StyledTableCell>Minimum Tenure of Investment</StyledTableCell>
                    <StyledTableCell>Pre-mature Closure Charge</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {datas.length && datas.map((data) => (
                    <StyledTableRow key={data.name}>
                        {/* <StyledTableCell component="th" scope="row">
                            ll>{row.name}
                        </StyledTableCell> */}
                        <StyledTableCell align="center">{data.schemeName}</StyledTableCell>
                        <StyledTableCell align="center">{moment(data.dateOfIntroduction).format('DD-MM-YYYY')}</StyledTableCell>
                        <StyledTableCell align="center">{data.schemeType}</StyledTableCell>
                        <StyledTableCell align="center">{data.yearlyInterestRate}</StyledTableCell>
                        <StyledTableCell align="center">{data.irdaCode}</StyledTableCell>
                        <StyledTableCell align="center">{data.yearlyMinimumInvestment}</StyledTableCell>
                        <StyledTableCell align="center">{data.minimumTenureOfInvestment}</StyledTableCell>
                        <StyledTableCell align="center">{data.prematureClosureCharge}</StyledTableCell>
                        <StyledTableCell align="center">
                            <button  onClick={() => dispatch({ type: 'REMOVE_DATA', id: data.id })} class="btn btn-outline-danger">Clear
                            </button>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        
        {/* <Table striped bordered hover variant="dark">
            <thead>
                <th>Scheme Name</th>
                <th>Date of Introduction</th>
                <th>Scheme Type</th>
                <th>Yearly Interest Rate</th>
                <th>IRDA Code</th>
                <th>Yearly Minimum Investment</th>
                <th>Minimum Tenure of Investment</th>
                <th>Pre-mature Closure Charge</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    datas.length && datas.map(data=>(
                        <tr>
                            <td>{data.schemeName}</td>
                            <td>{moment(data.dateOfIntroduction).format('DD-MM-YYYY')}</td>
                            <td>{data.schemeType}</td>
                            <td>{data.yearlyInterestRate}</td>
                            <td>{data.irdaCode}</td>
                            <td>{data.yearlyMinimumInvestment}</td>
                            <td>{data.minimumTenureOfInvestment}</td>
                            <td>{data.prematureClosureCharge}</td>
                            <td><button  onClick={() => dispatch({ type: 'REMOVE_DATA', id: data.id })}>Clear</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table> */}
        {/* <table>
            <tr>
                <th>Scheme Name</th>
                <th>Date of Introduction</th>
                <th>Scheme Type</th>
                <th>Yearly Interest Rate</th>
                <th>IRDA Code</th>
                <th>Yearly Minimum Investment</th>
                <th>Minimum Tenure of Investment</th>
                <th>Pre-mature Closure Charge</th>
                <th>Action</th>
            </tr>
            {
                datas.length && datas.map(data=>(
                    <tr>
                        <td>{data.schemeName}</td>
                        <td>{moment(data.dateOfIntroduction).format('DD-MM-YYYY')}</td>
                        <td>{data.schemeType}</td>
                        <td>{data.yearlyInterestRate}</td>
                        <td>{data.irdaCode}</td>
                        <td>{data.yearlyMinimumInvestment}</td>
                        <td>{data.minimumTenureOfInvestment}</td>
                        <td>{data.prematureClosureCharge}</td>
                        <td><button  onClick={() => dispatch({ type: 'REMOVE_DATA', id: data.id })}>Clear</button></td>
                    </tr>
                ))
            }
        </table> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>

)
     
 
}

export default ShoData
