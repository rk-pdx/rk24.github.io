import React from 'react'
import { Line } from 'react-chartjs-2';
import "./lineGraph.css"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    
    scales: {
        x: {
            grid:{
            display:false,
            drawBorder: false,
            },
            ticks: {
                /*color*/
                color: "white"
            }
        },
        y: {
            grid:{
            display:false,
            drawBorder: false,
            },

        }
               },
    plugins: {
      legend: {
          display: false
      },
      title: {
        display: true,
      },
    },
  };
 
  //x-axis labels
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [3, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(69, 133, 235);',
        backgroundColor: 'rgb(69, 133, 235);',
      }
    ],
  };

  export default function LineGraph({coin}) {
    let today = new Date();
    let time = []
    time.push(today.getHours())
    time.push(today.getHours() - 6)
    time.push(today.getHours() - 12)
    time.push(today.getHours() - 6)
    time.forEach(function(e, index) {
        if(e < 0) {
            this[index] = e + 12
            e = e + 12
        }
        if (e === 0)
            this[index] = 12
    }, time)


    console.log(time)
    return (
        <div class="lineGraph">
            <Line options={options}
                data = {{
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
                    datasets: [
                        {
                            label: 'Price $',
                            data: coin.history,
                            borderColor: 'rgb(69, 133, 235)',
                            backgroundColor: 'rgba(69, 133, 235, 0.4)',
                            width: 200,
                            height: 200,

                        },
                    ],
                }}
            />
            <div className="x-axis">
                <div>{time[0]}:00</div>
                <div>{time[1]}:00</div>
                <div>{time[2]}:00</div>
                <div>{time[3]}:00</div>
            </div>
        </div>
    )
}

