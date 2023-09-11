import React, { useEffect, useState } from 'react'

import {Bar, Line} from "react-chartjs-2"
// import { data } from '../../data'
import Chart from "chart.js/auto";

const EndYearChart = (props) => {


    const data = JSON.parse(props.data);



    const loading = true;

    const labels =[];
    const dataSet = [];





    const end_yearCount = {};

    //getting frequency
    for (let i = 0; i < data.length; i++) {
        let inti = data[i].end_year;
        if (end_yearCount[inti]) {
          end_yearCount[inti] += 1;
        } else {
        end_yearCount[inti] = 1;
        }

       
    }

    
    //extracting key value pair
    for (const key in end_yearCount) {
      if (end_yearCount.hasOwnProperty(key)) {
        const value = end_yearCount[key];
        labels.push(key);
        if(key!=''){
          const value = end_yearCount[key];
          dataSet.push(value)
          // console.log(`Key: ${key}, Second Value: ${value}`);
        }
       
      }
    }

    

  const [state,setState] = useState({
    labels: labels  ,
    datasets: [
      {
        label: "End Year",
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
    options: {
      scales:{
        x:{
          beginAtZero: true,
        }
      }
    }
  })



  
 

  return (
    <div className='EndYearChart'>
        {
          loading ? <Line
          data={state}
          height={400}
          width={800}
          options={ {
            maintainAspectRatio:false,
            // responsive:false,
          }}
      />   : 
          <div>Loading</div>
        }
        {/* <Bar
            data={state}
            height={400}
            width={600}
            options={ {
              responsive:true,
              maintainAspectRatio:false,
            }}
        /> */}
      
    </div>
  )
}

export default EndYearChart;