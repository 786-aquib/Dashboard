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
  const total = onTime + workFromHome + lateAttendance + absent || 1;

  const data = {
    labels: ['On Time', 'Work from Home', 'Late Attendance', 'Absent'],
    datasets: [
      {
        data: [onTime, workFromHome, lateAttendance, absent],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545', '#cad5db'],
        hoverBackgroundColor: ['#218838', '#e0a800', '#c82333', '#cad5db'],
      },
    ],
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto', maxWidth: 150, maxHeight: 150 }}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
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
      <div style={{
        position: 'absolute',
        bottom: '32%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
      }}>
        <span style={{ fontSize: '1.5rem', fontFamily: 'sans-serif' }}>{total - absent}</span>
        <br />/{total}
      </div>
    </div>
  );
};

export default AttendanceChart;
