import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import FingerprintSharpIcon from '@mui/icons-material/FingerprintSharp';
import { employeeData } from '../data';
import { Circle } from 'rc-progress';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ProgressBar from './ProgressBar';
import AttendanceChart from './AttendanceChart';
import Chart from 'chart.js/auto';

interface DonutProps {
    values: [number, string][];
    bgColor: string;
    lineWidth: number;
    height: number;
    width: number;
}

const attendanceDataForChart = {
    onTime: 1031,
    workFromHome: 191,
    lateAttendance: 212,
    absent: 66,
};

const Donut: React.FC<DonutProps> = ({ values, bgColor, lineWidth, height, width }) => {
    const totalValue = values.reduce((sum, [value]) => sum + value, 0);
    const calculatedValues = values.map(([value, color]) => ({
        percentage: (value / totalValue) * 100,
        color,
    }));

    return (
        <div style={{ position: 'relative', width, height }}>
            {calculatedValues.map((item, index) => (
                <Circle
                    key={index}
                    percent={item.percentage}
                    strokeWidth={lineWidth}
                    strokeColor={item.color}
                    trailWidth={lineWidth}
                    trailColor={bgColor}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            ))}
        </div>
    );
};

function ThreeCardSection() {
    const myData = employeeData[0];
    const attendanceData = { present: 15, absent: 5 };
    const totalDays = attendanceData.present + attendanceData.absent;
    const percentagePresent = ((attendanceData.present / totalDays) * 100).toFixed(2);

    const averageHours = 8;
    const averageMinutes = 15;

    const calculateTimeLeft = () => {
        const now = new Date();
        const endOfWorkDay = new Date();
        endOfWorkDay.setHours(18, 0, 0, 0);

        const timeLeft = endOfWorkDay.getTime() - now.getTime();
        const hoursLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60)));
        const minutesLeft = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));

        return { hours: hoursLeft, minutes: minutesLeft };
    };

    const { hours, minutes } = calculateTimeLeft();

    const values: [number, string][] = [
        [attendanceData.present, 'yellow'],
        [attendanceData.absent, 'white'],
    ];

    const totalLate = myData.summary?.totalLate || 0;
    const totalOnTime = myData.summary?.totalOnTime || 0;
    const totalWFH = myData.summary?.totalWFH || 0;
    const totalAbsent = myData.summary?.totalAbsent || 0;
    const totalValue = totalLate + totalOnTime + totalWFH + totalAbsent;
    const ans = (totalLate + totalOnTime) / totalValue * 100;
    const value1 = ans.toPrecision(2);
    const numberValue = Number(value1);

    return (
        <Grid container spacing={2} sx={{ height: '35vh' }}>
            <Grid item xs={12} sm={4} sx={{ paddingRight: 1 }}>
                <Card sx={{ height: '100%', transform: 'scale(0.95)', borderRadius: 3 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', padding: 2 }} variant="h5">
                                Today
                            </Typography>
                            <Typography
                                sx={{
                                    width: 'max-content',
                                    borderRadius: 3,
                                    padding: 2,
                                    color: myData.isAttendanceMarked ? 'green' : 'red',
                                    fontWeight: 'bold',
                                }}
                            >
                                {myData.isAttendanceMarked ? 'Present' : 'Absent'}
                            </Typography>
                        </div>
                        <Box sx={{ height: '1px', backgroundColor: 'gray', margin: '10px 0' }} />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                                    <FingerprintSharpIcon fontSize='large' color='success' />
                                </div>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 2, width: '50%', fontFamily: 'fantasy' }}>
                                    <Typography variant="body2" sx={{ flex: '0 1 auto', fontSize: '1rem' }}>
                                        {myData.isAttendanceMarked
                                            ? "You have marked yourself as Present today"
                                            : "You have not marked yourself as Present today"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ flex: '1 0 auto', marginTop: 2 }}>
                                        Time Left: {hours}h {minutes}m
                                    </Typography>
                                </Box>
                            </div>
                            <div style={{ marginTop: 5, display: 'flex', justifyContent: 'flex-end' }}>
                                <ProgressBar value={numberValue} />
                            </div>
                        </div>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', marginBottom: 2 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                sx={{ 
                                    width: '98%', 
                                    marginLeft: '1%', 
                                    marginRight: '1%', 
                                    marginBottom: 2, 
                                }} 
                            >
                                Mark Present
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Grid container spacing={2} sx={{ height: '100%', marginTop: "-7.85px" }}>
                    <Grid item xs={6}>
                        <Card sx={{ height: '17vh', borderRadius: 3 }}>
                            <CardContent>
                                <HistoryToggleOffIcon fontSize='large' color='success' />
                                <Typography sx={{ marginTop: 1 }} fontSize="0.85rem" fontFamily="monospace">Average hours</Typography>
                                <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontFamily="monospace" fontWeight="bold">
                                    {myData.summary?.averageHours}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: '17vh', borderRadius: 3 }}>
                            <CardContent>
                                <ArrowForwardIcon fontSize='large' color='success' />
                                <Typography sx={{ marginTop: 1 }} fontSize="0.85rem" fontFamily="monospace">Average Check-in</Typography>
                                <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontFamily="monospace" fontWeight="bold">
                                    {myData.summary?.averageCheckIn}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: '17vh', borderRadius: 3 }}>
                            <CardContent>
                                <AccessTimeIcon fontSize='large' color='success' />
                                <Typography sx={{ marginTop: 1 }} fontSize="0.85rem" fontFamily="monospace">On time Arrival</Typography>
                                <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontFamily="monospace" fontWeight="bold">
                                    {myData.summary?.onTimeInterval}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: '17vh', borderRadius: 3 }}>
                            <CardContent>
                                <SwipeRightAltIcon fontSize='large' color='error' />
                                <Typography sx={{ marginTop: 1 }} fontSize="0.85rem" fontFamily="monospace">Average Check-out</Typography>
                                <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontFamily="monospace" fontWeight="bold">
                                    {myData.summary?.averageCheckOut}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card sx={{ height: '100%', transform: 'scale(0.95)', borderRadius: 3 }}>
                    <CardContent>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', padding: 2 }} variant="h5">
                                My Attendance
                            </Typography>
                            <Button
                                sx={{
                                    width: 'max-content',
                                    borderRadius: 3,
                                    padding: 2,
                                    fontWeight: 'bold',
                                }}
                            >
                                View Stats
                            </Button>
                        </div>
                        <Box sx={{ height: '1px', backgroundColor: 'gray', margin: '10px 0' }} />
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                                        <div style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            backgroundColor: 'green',
                                            marginRight: 8,
                                            fontFamily: 'serif'
                                        }} />
                                        <span>{myData.summary?.totalOnTime} on time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                                        <div style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            backgroundColor: 'yellow',
                                            marginRight: 8,
                                            fontFamily: 'serif'
                                        }} />
                                        <span>{myData.summary?.totalWFH} Work from home</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                                        <div style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            backgroundColor: 'red',
                                            marginRight: 8,
                                            fontFamily: 'serif'
                                        }} />
                                        <span>{myData.summary?.totalLate} late Attendance</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                                        <div style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            backgroundColor: 'gray',
                                            marginRight: 8,
                                            fontFamily: 'serif'
                                        }} />
                                        <span>{myData.summary?.totalAbsent} Absent</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <AttendanceChart
                                        onTime={myData.summary?.totalOnTime}
                                        workFromHome={myData.summary?.totalWFH}
                                        lateAttendance={myData.summary?.totalLate}
                                        absent={myData.summary?.totalAbsent}
                                    />
                                </div>
                            </div>
                            <Box
                                sx={{
                                    marginTop: 7,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <CheckBoxIcon color='success' />
                                <Typography sx={{ marginLeft: 1, fontFamily: 'inherit' }}>
                                    Better than 91.3% employees!
                                </Typography>
                            </Box>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ThreeCardSection;
