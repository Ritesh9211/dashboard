import React, { useEffect, useState } from 'react'

import {Bar, Line} from "react-chartjs-2"
// import { data } from '../../data'
import Chart from "chart.js/auto";

const BarChart = (props) => {



    const data = JSON.parse(props.data);




    const labels =[];
    const dataSet = [];





    const sectorCount = {};

    //getting frequency
    for (let i = 0; i < data.length; i++) {
        let secti = data[i].sector;
        if (sectorCount[secti]) {
          sectorCount[secti] += 1;
        } else {
        sectorCount[secti] = 1;
        }

        
    }

    // console.log("sectorCount",sectorCount)

    //extracting key value pair
    for (const key in sectorCount) {
      if (sectorCount.hasOwnProperty(key)) {
        const value = sectorCount[key];
        labels.push(key);
        if(key!=''){
          const value = sectorCount[key];
          dataSet.push(value)
          console.log(`Key: ${key}, Second Value: ${value}`);
        }
       
      }
    }

  const [state,setState] = useState({
    labels: labels  ,
    datasets: [
      {
        label: "Sector Frequency",
        data: dataSet,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
     
    ],
   
  })



  
 

  return (
    <div className='barChart'>
        <Bar
          data={state}
          height={400}
          width={600}
          options={ {
            responsive:true,
            maintainAspectRatio:false,
            responsive:false,
          }}
        />   
       
    </div>
  )
}

export default BarChart;