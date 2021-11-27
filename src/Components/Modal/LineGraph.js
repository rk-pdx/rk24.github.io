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
    plugins: {
      legend: {
          display: false
      },
      title: {
        display: true,
        text: 'Last 24 Hours',
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
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  export default function LineGraph({coin}) {
    return (
        <div class="lineGraph">
            <Line options={options}
                data = {{
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
                    datasets: [
                        {
                            label: 'Price $',
                            data: coin.history,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            width: 200,
                            height: 200,

                        },
                    ],
                }}
        />
        </div>
    )
}

