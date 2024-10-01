import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import FingerprintSharpIcon from '@mui/icons-material/FingerprintSharp';
import { employeeData } from '../data';

function ThreeCardSection() {
    const myData = employeeData[0]; // Assuming you want data for the first employee

    // Function to calculate time left to work
    const calculateTimeLeft = () => {
        const now = new Date();
        const endOfWorkDay = new Date();
        endOfWorkDay.setHours(18, 0, 0, 0); // Set to 6 PM

        const timeLeft = endOfWorkDay.getTime() - now.getTime();
        const hoursLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60))); // Convert to hours
        const minutesLeft = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))); // Convert to minutes

        return { hours: hoursLeft, minutes: minutesLeft };
    };

    const { hours, minutes } = calculateTimeLeft();

    return (
        <Grid container spacing={2} sx={{ height: '40vh' }}>
            {/* Card A */}
            <Grid item xs={12} sm={4} sx={{ paddingRight: 1 }}>
                <Card sx={{ height: '100%', transform: 'scale(0.95)', borderRadius: 3 }}>
                    <CardContent>
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
                                }}
                            >
                                {myData.isAttendanceMarked ? 'Present' : 'Absent'}
                            </Typography>
                        </div>
                        {/* Separator Line */}
                        <Box sx={{ height: '1px', backgroundColor: 'gray', margin: '10px 0' }} />

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                            <FingerprintSharpIcon fontSize='large' color='success' />
                        </div>

                        {/* Adding a wrapper to control the text flow */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 2, width: '50%', fontFamily: 'fantasy' }}>
                            <Typography variant="body2" sx={{ flex: '0 1 auto', fontSize: '1rem' }}>
                                {myData.isAttendanceMarked
                                    ? "You have marked yourself as Present today"
                                    : "You have not marked yourself as Present today"}
                            </Typography>
                            <Typography variant="body2" sx={{ flex: '1 0 auto', marginTop: 2 }}>
                                Time Left : {hours} h {minutes} m
                            </Typography>
                        </Box>

                        
                    </CardContent>
                </Card>
            </Grid>

            {/* Grid for 4 smaller cards */}
            <Grid item xs={12} sm={4}>
                <Grid container spacing={2} sx={{ height: '100%' }}>
                    {/* Card B1 */}
                    <Grid item xs={6}>
                        <Card sx={{ height: '100%', borderRadius: 3 }}>
                            <CardContent>
                                <Typography variant="h6">Card B1</Typography>
                                <Typography variant="body2">Content for Card B1.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Card B2 */}
                    <Grid item xs={6}>
                        <Card sx={{ height: '100%', borderRadius: 3 }}>
                            <CardContent>
                                <Typography variant="h6">Card B2</Typography>
                                <Typography variant="body2">Content for Card B2.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Card B3 */}
                    <Grid item xs={6}>
                        <Card sx={{ height: '100%', borderRadius: 3 }}>
                            <CardContent>
                                <Typography variant="h6">Card B3</Typography>
                                <Typography variant="body2">Content for Card B3.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Card B4 */}
                    <Grid item xs={6}>
                        <Card sx={{ height: '100%', borderRadius: 3 }}>
                            <CardContent>
                                <Typography variant="h6">Card B4</Typography>
                                <Typography variant="body2">Content for Card B4.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            {/* Card C */}
            <Grid item xs={12} sm={4} sx={{ paddingLeft: 1 }}>
                <Card sx={{ height: '100%', transform: 'scale(0.95)', borderRadius: 3 }}>
                    <CardContent>
                        <Typography variant="h5">Card C</Typography>
                        <Typography variant="body2">Content for Card C.</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ThreeCardSection;
