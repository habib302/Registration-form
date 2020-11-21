import React, {  useContext } from 'react'
import moment from 'moment'
import { DataContext } from '../context/dataContext';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useTable } from 'react-table'
import Table from 'react-bootstrap/Table';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShoData = () => {
const { datas,dispatch } = useContext(DataContext);
return (
   
    <div>
        <Table striped bordered hover variant="dark">
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
        </Table>
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
