import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FingerprintSharpIcon from '@mui/icons-material/FingerprintSharp';
import { employeeData } from '../data';
import ProgressBar from './ProgressBar';
import AttendanceChart from './AttendanceChart';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ThreeCardSection = () => {
    const myData = employeeData[0];
    const attendanceData = { present: 15, absent: 5 };
    const totalDays = attendanceData.present + attendanceData.absent;
    const percentagePresent = Number(((attendanceData.present / totalDays) * 100).toFixed(2));

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

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                
                {/* Today's Attendance Card */}
                <Grid size = {{xs:12, sm:6, md:4}} >
                    <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: 'bold', padding: 1 }}>
                                    Today
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRadius: 3,
                                        padding: 1,
                                        color: myData.isAttendanceMarked ? 'green' : 'red',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {myData.isAttendanceMarked ? 'Present' : 'Absent'}
                                </Typography>
                            </div>
                            <Box sx={{ height: '1px', backgroundColor: 'gray', margin: '5px 0' }} />
                            <Box display="flex" justifyContent="space-between" sx={{ marginTop: '25px' }}>
                                <Box>
                                    <FingerprintSharpIcon fontSize='large' color='success' />
                                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                                        {myData.isAttendanceMarked
                                            ? "You have marked yourself as Present today"
                                            : "You have not marked yourself as Present today"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginTop: 4 }}>
                                        Time Left: {hours}h {minutes}m
                                    </Typography>
                                </Box>
                                <ProgressBar value={percentagePresent} />
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: '98%', margin: 'auto', marginBottom: "30px" }}
                            >
                                Mark Present
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Average Stats Card */}
                <Grid container size = {{ xs: 12, sm: 6, md: 4}} spacing={2}>
                    {/* 2x2 grid for average stats cards */}
                    <Grid size = {{ xs: 6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <ArrowForwardIcon fontSize='large' color='success' />
                            <Typography sx={{ marginTop: 1 }} fontSize="0.85rem">Average Check-in</Typography>
                            <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontWeight="bold">
                                {myData.summary?.averageCheckIn}
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size = {{ xs: 6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <HistoryToggleOffIcon fontSize='large' color='success' />
                            <Typography sx={{ marginTop: 1 }} fontSize="0.85rem">Average hours</Typography>
                            <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontWeight="bold">
                                {myData.summary?.averageHours} hours
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size = {{ xs: 6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column',  height: '100%' }}>
                            <AccessTimeIcon fontSize='large' color='success' />
                            <Typography sx={{ marginTop: 1 }} fontSize="0.85rem">On time Arrival</Typography>
                            <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontWeight="bold">
                                {myData.summary?.onTimeInterval}
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size = {{ xs: 6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <SwipeRightAltIcon fontSize='large' color='error' />
                            <Typography sx={{ marginTop: 1 }} fontSize="0.85rem">Average Check-out</Typography>
                            <Typography sx={{ marginTop: 1 }} fontSize="1.3rem" fontWeight="bold">
                                {myData.summary?.averageCheckOut}
                            </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Attendance Summary Card */}
                <Grid size = {{xs:12, sm:6, md:4}} container justifyContent={{ xs: 'center', md: 'flex-start' }} display={{ xs: 'flex', md: 'block' }}>
                    <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: 'bold', padding: 1 }}>
                                    My Attendance
                                </Typography>
                                <Button sx={{ padding: 1, fontWeight: 'bold' }}>
                                    View Stats
                                </Button>
                            </div>
                            <Box sx={{ height: '1px', backgroundColor: 'gray', margin: '5px 0' }} />
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" sx={{ gap: 2 }}>
                                <Box sx={{ flex: 1, marginBottom: { xs: 2, md: 0 } }}>
                                    {[
                                        { color: 'green', label: 'on time', value: myData.summary?.totalOnTime },
                                        { color: 'yellow', label: 'Work from home', value: myData.summary?.totalWFH },
                                        { color: 'red', label: 'late Attendance', value: myData.summary?.totalLate },
                                        { color: 'gray', label: 'Absent', value: myData.summary?.totalAbsent },
                                    ].map(({ color, label, value }, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color, marginRight: 8 }} />
                                            <span>{value} {label}</span>
                                        </div>
                                    ))}
                                </Box>
                                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: { xs: '100%', md: '200px' }, flexGrow: 1 }}>
                                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
                                        <AttendanceChart
                                            onTime={myData.summary?.totalOnTime ?? 0}
                                            workFromHome={myData.summary?.totalWFH ?? 0}
                                            lateAttendance={myData.summary?.totalLate ?? 0}
                                            absent={myData.summary?.totalAbsent ?? 0}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" sx={{ marginTop: 5, flexWrap: 'wrap', justifyContent: 'start', marginBottom: '20px' }}>
                                <CheckBoxIcon style={{ marginTop: '-40px' }} color='success' />
                                <Typography
                                    sx={{
                                        marginLeft: 1,
                                        marginTop: '-40px',
                                        textAlign: 'center',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Better than 91.3% employees!
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}

export default ThreeCardSection;
