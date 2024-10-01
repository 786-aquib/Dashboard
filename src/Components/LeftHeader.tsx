import { Typography } from '@mui/material';
import React from 'react';

function LeftHeader() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}> {/* Minimal gap between image and text */}
            <img 
                src={`${process.env.PUBLIC_URL}/sci-fi.png`} 
                alt="Sci-fi" 
                style={{ width: 50, height: 'auto' }} // Image size
            />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '35px' }}>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500 }}>Dashboard</Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500 }}>Leave</Typography>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500 }}>Attendance</Typography>
                <Typography sx={{ fontFamily: 'sans-serif' , fontWeight: 500}}>Performance</Typography>
            </div>
        </div>
    );
}

export default LeftHeader;
