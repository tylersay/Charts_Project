import React from "react";
import { Line } from "react-chartjs-2";



const Chart_1 = ({ xAxis, yAxis }) => {
  // console.log(xAxis);

  return (
    <>
      <div>
        <Line
          data={{
            labels: xAxis,
            datasets: [
              {
                yAxisID: "Quota Premium",
                label: "Quota Premium",
                data: yAxis,
                backgroundColor: "red",
              },
              {
                
                label: "Quantity",
                data: [],
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yaxes: [
                {
                  id: "Quota Premium",
                  // position: 'left',
                  ticks: { beginatZero: true },
                },
                {
                  id: "Quantity",
                  type: "linear",
                  ticks: { beginatZero: true },
                  position: "right",
                },
              ],
            },
          }}
        />
      </div>
      
    </>
  );
};

export default Chart_1;


