import Chart from 'react-apexcharts';
import { useState } from 'react';
export default function Linegraph(props) {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        background: '#FFFFFF',
        foreColor: '#CBD5E1',
        stacked: true,
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

        labels: {
          style: {
            fontFamily: 'poppins',
          },
        },
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      yaxis: {
        stepSize: '9',
        labels: {
          style: {
            fontFamily: 'poppins',
          },
        },
        tickAmount: 4,
      },

      dataLabels: {
        enabled: false,
      },
    },

    series: [
      {
        name: 'Approved',
        data: [9, 12, 10, 2, 10, 10, 12],
        color: '#22C55E',
      },
      {
        name: 'Pending',
        data: [0, 4, 8, 10, 13, 6, 4],
        color: '#FF9441',
      },
      {
        name: 'Failed',
        data: [9, 12, 10, 16, 14, 15, 16],
        color: '#FF0000',
      },
    ],
    legend: {
      show: false,
    },
  });
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height="250"
        width="100%"
      />
    </div>
  );
}
