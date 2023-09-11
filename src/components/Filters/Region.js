import React, { useEffect, useState } from 'react'
import "./EndYear.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// Import your action creator
import { useDispatch } from 'react-redux';
import { setRegion } from "../store/filterSlice"; // Import your action creator



const Region = (props) => {
  const dispatch=useDispatch();
  const datai = ["Northern America","Northen Europe","Central America","World","Western Africa","Eastern Europe","Central Asia","South-Eastern Asia","South America","Europe","Western Africa","Oceania"];

  const [selectedValue, setSelectedValue] = useState(datai[0]);

  const Filter = props.filter;
  const type = props.type;
  console.log("Filter",Filter)

  

  const data = JSON.parse(props.data)
  
  function createData(intensity,likelihood,relevance,end_year,country,topic,region,city) {
    return {intensity,likelihood,relevance,end_year,country,topic,region,city};
  }
  
  const datarow = data.map((d)=>
      createData(d.intensity,d.likelihood,d.relevance,d.end_year,d.country,d.topic,d.region,d.city)
  )


  const handleFilterChange = (newFilterValue) => {
    // Dispatch the action using the dispatch function
    dispatch(setRegion(newFilterValue));
  };

  const handleDropdownChange = (event) => {
    const newValue = event.target.value; // Parse selected value as an integer
    setSelectedValue(newValue); // Update the selected value in the component's state
    handleFilterChange(newValue); // Dispatch the action with the selected value
  };
  

  
  return (
    // <div>did</div>
    <div className='container'>
       <div className="dropdown-container">
                <select value={selectedValue} onChange={handleDropdownChange}>
                {datai.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
                </select>
             </div>
       <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tablebar'>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Intensity</TableCell>
            <TableCell align="right">EndYear</TableCell>
            <TableCell align="right">Likelihood</TableCell>
            <TableCell align="right">Relevance</TableCell>
            <TableCell align="right">Pestle</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Topic</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {datarow
      .filter((row) => {
        switch (type) {
          case 'intensity':
            return row.intensity === Filter;
          case 'end_year':
            return row.end_year === Filter;
          case 'start_year':
            return row.start_year === Filter;
          case 'county':
            return row.country === Filter;
          case 'relevance':
            return row.relevance === Filter;
          case 'likelihood':
            return row.likelihood === Filter;
          case 'region':
            return row.region === Filter;
          case 'pestle':
            return row.pestle === Filter;
          case 'topic':
            return row.topic === Filter;
          default:
            return true; // Include all rows if type doesn't match any case
        }
      })
      .map((filteredRow) =>
    (
      
      <TableRow align="right"
        key={filteredRow._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {filteredRow.region || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.intensity || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.end_year || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.likelihood || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.relevance || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.pestle || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.source || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.topic || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.country || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.city || "NULL"}
        </TableCell>
       </TableRow>
        )
      )}
    </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Region;