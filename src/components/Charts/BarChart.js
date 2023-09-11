import React, { useEffect, useState } from 'react'

import {Bar, Line} from "react-chartjs-2"
// import { data } from '../../data'
import Chart from "chart.js/auto";

const BarChart = (props) => {
  
    const data = JSON.parse(props.data);

    const loading = true;

    const labels =[];
    const dataSet = [];
    const dataSet2 = [];





    const intensityCount = {};
    const likelihoodCount = {};

    //getting frequency
    for (let i = 0; i < data.length; i++) {
        let inti = data[i].intensity;
        let liki = data[i].likelihood
        if (intensityCount[inti]) {
          intensityCount[inti] += 1;
        } else {
        intensityCount[inti] = 1;
        }

        if (likelihoodCount[liki]) {
          likelihoodCount[liki] += 1;
        } else {
        likelihoodCount[liki] = 1;
        }
    }

    // console.log("intensityCount",intensityCount)

    //extracting key value pair
    for (const key in intensityCount) {
      if (intensityCount.hasOwnProperty(key)) {
        const value = intensityCount[key];
        labels.push(key);
        if(key!=''){
          const value = intensityCount[key];
          dataSet.push(value)
          // console.log(`Key: ${key}, Second Value: ${value}`);
        }
       
      }
    }

    for (const key in likelihoodCount) {
      if (likelihoodCount.hasOwnProperty(key)) {

        if(key!=''){
          const value = likelihoodCount[key];
          dataSet2.push(value)
          // console.log(`Key: ${key}, Second Value: ${value}`);
        }

        
      }
    }

  const [state,setState] = useState({
    labels: labels  ,
    datasets: [
      {
        label: "Intensity vs Frequency",
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
      {
        label: "Likelihood vs Frequency",
        data: dataSet2,
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
    <div className='barChart'>
        {
          loading ? <Line
          data={state}
          height={400}
          width={600}
          options={ {
            responsive:true,
            maintainAspectRatio:false,
            responsive:false,
          }}
      />   : 
          <div>Loading</div>
        }
            
    </div>
  )
}

export default BarChart;