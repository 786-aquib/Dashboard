import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';

Chart.register(...registerables);

interface AttendanceChartProps {
  onTime: number;
  workFromHome: number;
  lateAttendance: number;
  absent: number;
}

const AttendanceChart: React.FC<AttendanceChartProps> = ({ onTime, workFromHome, lateAttendance, absent }) => {
  const total = onTime + workFromHome + lateAttendance + absent || 1; // Prevent division by zero

  const data = {
    labels: ['On Time', 'Work from Home', 'Late Attendance', 'Absent'],
    datasets: [
      {
        data: [onTime, workFromHome, lateAttendance, absent],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545', 'white'],
        hoverBackgroundColor: ['#218838', '#e0a800', '#c82333', 'white'],
      },
    ],
  };

  return (
    <div style={{ width: 160, height: 160, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: '80%', // Adjust the thickness by changing this percentage
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const label = tooltipItem.label || '';
                  const value = tooltipItem.raw as number || 0; // Explicitly cast to number
                  const percentage = ((value / total) * 100).toFixed(2); // Ensure total is a number
                  return `${label}: ${value} (${percentage}%)`;
                },
              },
            },
          },
        }}
      />
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <strong>{total - absent}</strong>
        <br />/1500
      </div>
    </div>
  );
};

export default AttendanceChart;
