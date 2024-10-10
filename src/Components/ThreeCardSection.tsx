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
                                <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 'bold', padding: 1 }}>
                                    Today
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRadius: 3,
                                        padding: 1,
                                        color: myData.isAttendanceMarked ? 'green' : 'red',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                    }}
                                >
                                    {myData.isAttendanceMarked ? 'Present' : 'Absent'}
                                </Typography>
                            </div>
                            <Box sx={{ height: '1px', backgroundColor: 'gray', marginTop: '17px' }} />
                            <Box display="flex" justifyContent="space-between" sx={{ marginTop: '25px' }}>
                                <Box>
                                    <FingerprintSharpIcon fontSize='large' color='success' />
                                    <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                                        {myData.isAttendanceMarked
                                            ? "You have marked yourself as Present today"
                                            : "You have not marked yourself as Present today"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginTop: 4, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
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
                <Grid container size={{ xs: 12, sm: 6, md: 4 }} spacing={2}>
                    <Grid size = {{ xs:6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <ArrowForwardIcon fontSize='large' color='success' />
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>Average Check-in</Typography>
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '1rem', sm: '1.3rem' }, fontWeight: 'bold' }}>
                                    {myData.summary?.averageCheckIn}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size = {{ xs:6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <HistoryToggleOffIcon fontSize='large' color='success' />
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>Average hours</Typography>
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '1rem', sm: '1.3rem' }, fontWeight: 'bold' }}>
                                    {myData.summary?.averageHours} hours
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size = {{ xs:6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <AccessTimeIcon fontSize='large' color='success' />
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>On time Arrival</Typography>
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '1rem', sm: '1.3rem' }, fontWeight: 'bold' }}>
                                    {myData.summary?.onTimeInterval}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size = {{ xs:6}}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <SwipeRightAltIcon fontSize='large' color='error' />
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>Average Check-out</Typography>
                                <Typography sx={{ marginTop: 1, fontSize: { xs: '1rem', sm: '1.3rem' }, fontWeight: 'bold' }}>
                                    {myData.summary?.averageCheckOut}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Attendance Summary Card */}
                <Grid size = {{xs:12, sm:12, md:12, lg:4}} >
                    <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap-reverse'}}>
                                <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 'bold', padding: 1 }}>
                                    My Attendance
                                </Typography>
                                <Button sx={{ padding: 1, fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                                    View Stats
                                </Button>
                            </div>
                            <Box sx={{ height: '1px', backgroundColor: 'gray' }} />
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
                                            <Typography sx={{ fontFamily: 'inherit', fontSize: { xs: '0.8rem', sm: '1rem' } }}>{value} {label}</Typography>
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
                            <Box display="flex" alignItems="center" sx={{ marginTop: 5, display: 'flex', justifyContent: 'start', flexDirection: 'row', marginBottom: '30px', fontSize: { xs: '0.875rem', sm: '1rem' }, }}>
                                <CheckBoxIcon color='success' />
                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                        whiteSpace: 'nowrap',
                                        marginTop: 1,
                                        fontSize: { xs: '0.875rem', sm: '1rem' },
                                        marginBottom: '5px',
                                        paddingLeft: '6px',
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
