import { Typography } from '@mui/material';
import React from 'react';

function LeftHeader() {
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '30px', 
            flexWrap: 'wrap', // Allow wrapping on smaller screens
            padding: '10px', // Add some padding for better touch targets
        }}> 
            <img 
                src={`${process.env.PUBLIC_URL}/sci-fi.png`} 
                alt="Sci-fi" 
                style={{ width: 50, height: 'auto' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '35px', flexWrap: 'wrap' }}>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500 }}>Dashboard</Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500 }}>Leave</Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500 }}>Attendance</Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500 }}>Performance</Typography>
            </div>
        </div>
    );
}

export default LeftHeader;
