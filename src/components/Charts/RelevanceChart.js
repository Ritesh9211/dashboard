import React, { useEffect, useState } from 'react'

import {Bar, Line ,Scatter} from "react-chartjs-2"
// import { data } from '../../data'
import Chart from "chart.js/auto";

const RelevanceChart = (props) => {
    const data = JSON.parse(props.data);

  
    
    const loading = true;
    const labels =[];
    const dataSet = [];

   

    
    const relevanceCount = {};

    for (let i = 0; i < data.length; i++) {
      let inti = data[i].relevance;
      if (relevanceCount[inti]) {
        relevanceCount[inti] += 1;
      } else {
      relevanceCount[inti] = 1;
      }
}

    for (const key in relevanceCount) {
      if (relevanceCount.hasOwnProperty(key)) {
        const value = relevanceCount[key];
        labels.push(key);
        if(key!=''){
          const value = relevanceCount[key];
          dataSet.push(value)
          // console.log(`Key: ${key}, Second Value: ${value}`);
        }
       
      }
    }


    const [state,setState] = useState({
        labels: labels , 
        datasets: [
        {
            label: "RelevanceCount Chart",
            data: dataSet ,  //intensity 
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


    var options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                beginAtZero: true,
            },
        },
    };
  
 

  return (
    <div className='barChart'>
      {
        loading ?
         <Line
         data={state}
         height={400}
         width={600}
         options={options}

      />   : 
          <div>Loading</div>
        }
             
      
    </div>
  )
}

export default RelevanceChart;