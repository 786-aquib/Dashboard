import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';

Chart.register(...registerables);

interface AttendanceChartProps {
  onTime: any;
  workFromHome: any;
  lateAttendance: any;
  absent: any;
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
          cutout: '80%',
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const label = tooltipItem.label || '';
                  const value = tooltipItem.raw as number || 0; 
                  const percentage = ((value / total) * 100).toFixed(2); 
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
