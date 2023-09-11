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
import { setCountry } from "../store/filterSlice"; // Import your action creator



const Country = (props) => {
  const dispatch=useDispatch();
  const datai = ["Lebanon","Saudi Arabia","South Africa","Azerbiajan","United States of America", "Mexico", "Lebanon", "Nigeria", "Angola", "Niger","Mali","Iraq","Japan","Morocco","Liberia","Malaysia","Ethiopia","Kazakhstan","United Arab Emirates","Cyprus" ,"Egypt"];

  const [selectedValue, setSelectedValue] = useState(datai[0]);

  const Filter = props.filter;
  const type = props.type;
  // console.log("Filter",Filter)

  

  const data = JSON.parse(props.data)
  
  function createData(intensity,likelihood,relevance,end_year,country,topic,region,city) {
    return {intensity,likelihood,relevance,end_year,country,topic,region,city};
  }
  
  const datarow = data.map((d)=>
      createData(d.intensity,d.likelihood,d.relevance,d.end_year,d.country,d.topic,d.region,d.city)
  )


  const handleFilterChange = (newFilterValue) => {
    // Dispatch the action using the dispatch function
    dispatch(setCountry(newFilterValue));
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
            <TableCell align="right">Country</TableCell>
            <TableCell>Intensity</TableCell>
            <TableCell align="right">EndYear</TableCell>
            <TableCell align="right">Likelihood</TableCell>
            <TableCell align="right">Relevance</TableCell>
            <TableCell align="right">Pestle</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Topic</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Region</TableCell>
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
          case 'country':
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
        <TableCell align="right">
          {filteredRow.country || "NULL"}
        </TableCell>
         <TableCell component="th" scope="row">
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
          {filteredRow.city || "NULL"}
        </TableCell>
        <TableCell align="right">
          {filteredRow.region || "NULL"}
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

export default Country;