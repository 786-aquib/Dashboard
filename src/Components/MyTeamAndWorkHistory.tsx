import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, CircularProgress, Avatar, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { employeeData } from '../data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MyteamAndWorkHistory() {
    const currentEmployee = employeeData[0];
    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <Box sx={{ marginTop: '50px', marginBottom: '20px', flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* My Team Card */}
                <Grid size = {{xs:12, md:6 }}>
                    <Item>
                        <Card>
                            <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '370px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontFamily: 'monospace', marginBottom: 2 }}>
                                    My Team
                                </Typography>
                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                                    {['green', 'yellow', 'red', 'gray'].map((color, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                            <div style={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                backgroundColor: color,
                                                marginRight: 6,
                                            }} />
                                            <span>{['On time', 'Work from home', 'Late Attendance', 'Absent'][index]}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ height: '100%', overflow: 'auto' }}>
                                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                        <thead style={{ backgroundColor: 'whitesmoke' }}>
                                            <tr>
                                                <th style={{ padding: '12px', textAlign: 'left' }}>
                                                    <div style={{ display: 'flex', marginLeft: 6 }}>
                                                        Members <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="small" />
                                                    </div>
                                                </th>
                                                {currentEmployee.attendanceRecords.map((record, index) => (
                                                    <th key={index} style={{ padding: '12px', textAlign: 'center' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit' }}>
                                                            {record.date} <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="inherit" />
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentEmployee.teammates?.map((teammate) => {
                                                const todayRecord = teammate.attendanceRecords.find(record => record.date === currentDate);
                                                const teammateWorkMode = todayRecord ? todayRecord.workMode : "Absent";

                                                return (
                                                    <tr key={teammate.employeeId}>
                                                        <td style={{ padding: '12px', display: 'flex', alignItems: 'center' }}>
                                                            <AccountCircleSharpIcon fontSize="large" color='info' sx={{ marginRight: 1 }} />
                                                            <span style={{ fontWeight: 'bold' }}>{teammate.employeeName}</span>
                                                        </td>
                                                        {teammate.attendanceRecords.map((record, idx) => (
                                                            <td key={idx} style={{ padding: '12px',  textAlign: 'center' }}>
                                                                <span style={{ fontFamily: 'inherit' }}>
                                                                    <div
                                                                        style={{
                                                                            width: 8,
                                                                            height: 8,
                                                                            borderRadius: '50%',
                                                                            backgroundColor:
                                                                                record.workMode === "Remote" ? 'blue' :
                                                                                record.workMode === "Absent" ? 'red' :
                                                                                record.workMode === "In Office" ? 'green' :
                                                                                'gray', // Default color for unknown workMode
                                                                            display: 'inline-block',
                                                                            marginRight: 4
                                                                        }}
                                                                    />
                                                                    {record.arrivalTime ? record.arrivalTime : 'N/A'}
                                                                </span>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>

                {/* Working History Card */}
                <Grid size = {{xs:12, md:6 }}>
                    <Item>
                        <Card>
                            <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '370px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontFamily: 'monospace', marginBottom: 2, justifyContent: 'start' }}>
                                    Working History
                                </Typography>
                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                                    {['green', 'yellow', 'red', 'gray'].map((color, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                            <div style={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                backgroundColor: color,
                                                marginRight: 6,
                                            }} />
                                            <span>{['meeting criteria', 'criteria unmet', 'action needed', 'overtime'][index]}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ height: '100%', overflow: 'auto' }}>
                                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                        <thead style={{ backgroundColor: 'whitesmoke' }}>
                                            <tr>
                                                <th style={{ padding: '12px', textAlign: 'center' }}>
                                                    <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                        Date <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="inherit" />
                                                    </div>
                                                </th>
                                                <th style={{ padding: '12px',  textAlign: 'center' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        Arrival <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="inherit" />
                                                    </div>
                                                </th>
                                                <th style={{ padding: '12px', textAlign: 'center' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        Departure <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="inherit" />
                                                    </div>
                                                </th>
                                                <th style={{ padding: '12px', textAlign: 'center' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        Effective Time <UnfoldMoreIcon sx={{ marginLeft: '4px' }} fontSize="inherit" />
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {currentEmployee.attendanceRecords.map((record, index) => {
                                        const progressValue = (record.effectiveTime / 9) * 100;
                                        let progressColor;

                                        if (record.effectiveTime < 4) {
                                            progressColor = 'red';
                                        } else if (record.effectiveTime >= 4 && record.effectiveTime < 9) {
                                            progressColor = 'yellow';
                                        } else {
                                            progressColor = 'green';
                                        }

                                        return (
                                            <tr key={index}>
                                                <td style={{ padding: '12px', textAlign: 'center', display: 'flex', alignItems: 'start', justifyContent: 'start' }}>
                                                    <Avatar sx={{ width: 24, height: 24, marginRight: 2 }}>
                                                        <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                                                            {index === 0 ? 'T' : record.day.split('/')[0]}
                                                        </Typography>
                                                    </Avatar>
                                                    <span>{record.date}</span>
                                                </td>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', fontFamily: 'monospace' }}>
                                                    {record.arrivalTime || 'N/A'} 
                                                </td>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', fontFamily: 'monospace' }}>
                                                    {record.leavingTime || 'N/A'} 
                                                </td>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', position: 'relative' }}>
                                                    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                                                        <div style={{ 
                                                            textAlign: 'right', 
                                                            marginRight: 4, 
                                                            fontFamily: 'monospace', 
                                                            display: 'flex', 
                                                            flexDirection: 'column', 
                                                            alignItems: 'flex-end' 
                                                        }}>
                                                            <span style={{ fontWeight: 'bold' }}>{`${record.effectiveTime} hours`}</span>
                                                            <div style={{ fontWeight: 'normal', fontSize: '0.9em' }}>{`/ 9 hours`}</div>
                                                        </div>
                                                        
                                                        {/* Container for CircularProgress to handle layout */}
                                                        <div style={{ 
                                                            position: 'relative', 
                                                            display: 'flex', 
                                                            justifyContent: 'center', 
                                                            alignItems: 'center',
                                                            marginLeft: '15px'
                                                        }}>
                                                            {/* First CircularProgress for up to 9 hours */}
                                                            <CircularProgress
                                                                variant="determinate"
                                                                value={Math.min(100, (Math.min(9, record.effectiveTime) / 9) * 100)} // Scale to percentage
                                                                size={20}
                                                                sx={{
                                                                    color: progressColor,
                                                                    position: 'absolute', // Absolute positioning for overlap
                                                                }}
                                                            />
                                                            
                                                            {/* Second CircularProgress for time exceeding 9 hours */}
                                                            {record.effectiveTime > 9 && (
                                                                <CircularProgress
                                                                    variant="determinate"
                                                                    value={Math.min(100, ((record.effectiveTime - 9) / (24 - 9)) * 100)} // Assuming totalMaxHours is the limit for the second circle
                                                                    size={14}
                                                                    sx={{
                                                                        color: 'orange',
                                                                        position: 'absolute', // Absolute positioning for overlap
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MyteamAndWorkHistory;
