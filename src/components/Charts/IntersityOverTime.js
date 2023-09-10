import React, { useEffect, useState } from 'react'

import {Bar, Line ,Scatter} from "react-chartjs-2"
// import { data } from '../../data'
import Chart from "chart.js/auto";

const IntensityOverTime = (props) => {
    const data = JSON.parse(props.data);
    const start_year = [];
    const intensity = [];

    const a =[];
    const b =[];
    
    data.map((d) => {  start_year.push(d.end_year)});
    data.map((d) => {  intensity.push(d.intensity)});


    data.map((d) => {  a.push(d.intensity)});
    data.map((d) => {  b.push(d.likelihood)});

    console.log(a,b);

    const labels =[];
    const dataSet = [];



   

    const [state,setState] = useState({
        labels: start_year , //yr
        datasets: [
        {
            label: "Intensity Over Frequency",
            data: intensity ,  //intensity yr
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
        <Scatter
          data={state}
          height={400}
          width={600}
          options={options}
        />   
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

export default IntensityOverTime;