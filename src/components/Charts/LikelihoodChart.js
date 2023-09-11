import React, { useEffect, useState } from 'react'

import {Bar, Line, Pie} from "react-chartjs-2"
// import { data } from '../../data'
import Chart from "chart.js/auto";

const LikelihoodChart = (props) => {
  
    const data = JSON.parse(props.data);

    const loading = true;

    const labels =[];
    const dataSet = [];
    const dataSet2 = [];






    const likelihoodCount = {};

    //getting frequency
    for (let i = 0; i < data.length; i++) {

        let liki = data[i].likelihood
       

        if (likelihoodCount[liki]) {
          likelihoodCount[liki] += 1;
        } else {
        likelihoodCount[liki] = 1;
        }
    }

    // console.log("intensityCount",intensityCount)

    //extracting key value pair
   

    for (const key in likelihoodCount) {
      if (likelihoodCount.hasOwnProperty(key)) {
        labels.push(key);
        if(key!=''){
          const value = likelihoodCount[key];
          dataSet2.push(value)
          // console.log(`Key: ${key}, Second Value: ${value}`);
        }

        
        // const value = likelihoodCount[key];
        // // labels.push(key);
        // dataSet2.push(value)
        // // console.log(`Key: ${key}, Second Value: ${value}`);
      }
    }

  const [state,setState] = useState({
    labels: labels  ,
    datasets: [
     
      {
        label: "Likelihood ",
        data: dataSet2,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 0, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
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
          loading ? <Pie
          data={state}
          // height={400}
          // width={600}
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

export default LikelihoodChart;