import Chart from 'react-apexcharts';
import { useState } from 'react';
export default function ColumnBar(props) {
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
      yaxis: {
        stepSize: 10,
        labels: {
          style: {
            fontFamily: 'poppins',
          },
        },

        style: {
          fontFamily: 'poppins',
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: 20,
          borderRadius: 2,
        },
      },

      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Approved',
        data: [12, 16, 13, 25, 5, 18, 20],
        color: '#FFCBA2',
      },
      {
        name: 'Approval Rate',
        data: [5, 4, 4, 4, 3, 4, 4],
        color: '#A9E9FF',
      },
    ],
  });
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="200"
        width="100%"
      />
    </div>
  );
}
