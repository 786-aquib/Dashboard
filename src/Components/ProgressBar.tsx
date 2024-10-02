import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressProps {
  value: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: '#000',
          pathColor: '#FFD700', // You can change the color as per your design
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default ProgressBar;