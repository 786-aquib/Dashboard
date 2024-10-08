import { Typography, Box } from '@mui/material';
import React from 'react';
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import CorporateFareSharpIcon from '@mui/icons-material/CorporateFareSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import LocalParkingSharpIcon from '@mui/icons-material/LocalParkingSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';

function SecondLeftHeader() {
    return (
        <Box
            style={{
                backgroundColor: 'white',
                padding: 10,
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                width: 'max-content', 
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                overflow: 'hidden', 
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <DashboardCustomizeSharpIcon />
                    <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 200, fontSize: '0.675rem' }} variant='subtitle2'>Dashboard</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CorporateFareSharpIcon />
                    <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500, fontSize: '0.675rem' }} variant='body2'>Org.</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CalendarMonthSharpIcon />
                    <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500, fontSize: '0.675rem' }} variant='body2'>Calendar</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LocalParkingSharpIcon />
                    <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500, fontSize: '0.675rem' }} variant='body2'>Parking</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <BusinessCenterSharpIcon />
                    <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500, fontSize: '0.675rem' }} variant='body2'>Recruit</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <MessageSharpIcon />
                    <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 500, fontSize: '0.675rem' }} variant='body2'>Messages</Typography>
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
                <HelpOutlineSharpIcon />
                <Typography 
                    sx={{ 
                        fontFamily: 'sans-serif', 
                        fontWeight: 500, 
                        fontSize: '0.675rem', 
                    }} 
                    variant = "body2"
                > 
                    Help
                </Typography>
            </div> */}
            </div>
        </Box>
    );
}

export default SecondLeftHeader;