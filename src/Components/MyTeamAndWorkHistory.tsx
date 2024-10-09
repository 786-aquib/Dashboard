import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, CircularProgress, Avatar, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { employeeData } from '../data';

// Adjusting the styled component to remove default shadow and background color
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', // Remove the default shadow
    backgroundColor: 'transparent', // Set background color to transparent
}));

function MyteamAndWorkHistory() {
    const currentEmployee = employeeData[0];
    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <Box sx={{ marginTop: '26px', flexGrow: 1 }}>
            <Grid container spacing={0.4}>
                {/* My Team Card */}
                <Grid size = {{xs:12, md:6}} >
                    <Item>
                        <Card 
                           sx={{borderRadius: 4}}
                        >
                            <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '370px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontFamily: 'monospace', marginBottom: 2, display:'flex', justifyContent: 'start' }}>
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
                                                        Members <UnfoldMoreIcon sx={{ marginLeft: '8px', marginTop: '4px' }} fontSize="inherit" />
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
                                                            <td key={idx} style={{ padding: '12px', textAlign: 'center' }}>
                                                                <span style={{ fontFamily: 'inherit' }}>
                                                                    <div
                                                                        style={{
                                                                            width: 8,
                                                                            height: 8,
                                                                            borderRadius: '50%',
                                                                            backgroundColor:
                                                                                record.workMode === "Remote" ? 'yellow' :
                                                                                record.workMode === "Absent" ? 'grey' :
                                                                                record.workMode === "In Office" ? 'green' :
                                                                                record.workMode === "Absent" ? "white":
                                                                                'blue', // Default color for unknown workMode
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
                <Grid size = {{  xs:12, md:6 }}>
    <Item>
        <Card
            sx={{borderRadius: 4}}
        >
            <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '370px' }}>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'monospace', marginBottom: 2, display: 'flex', justifyContent: 'start' }}>
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
                                <th style={{ padding: '12px', textAlign: 'center', marginLeft: '3px' }}>
                                    <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                        Date <UnfoldMoreIcon sx={{ marginLeft: '8px', marginTop: '4px' }} fontSize="inherit" />
                                    </div>
                                </th>
                                <th style={{ padding: '12px', textAlign: 'center' }}>
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
                                        <td style={{ padding: '12px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Avatar sx={{ width: 24, height: 24, marginBottom: 1, marginTop: '7px', marginRight: '4px'}}>
        <Typography variant="caption" sx={{ fontSize: '0.75rem'}}>
            {new Date(record.date).getDate()}
        </Typography>
    </Avatar>
    <span 
      style={{ paddingLeft: '2px'}}
    >{record.date}</span>
</td>

                                        <td style={{ padding: '12px', textAlign: 'center', fontFamily: 'monospace' }}>
                                            {record.arrivalTime || 'N/A'} 
                                        </td>
                                        <td style={{ padding: '12px', textAlign: 'center', fontFamily: 'monospace' }}>
                                            {record.leavingTime || 'N/A'} 
                                        </td>
                                        <td style={{ padding: '12px', textAlign: 'center', position: 'relative' }}>
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
                                                
                                                {/* Circular Progress */}
                                                <div style={{ 
                                                    position: 'relative', 
                                                    display: 'flex', 
                                                    justifyContent: 'center', 
                                                    alignItems: 'center',
                                                    marginLeft: '15px'
                                                }}>
                                                    <CircularProgress
                                                        variant="determinate"
                                                        value={Math.min(100, (Math.min(9, record.effectiveTime) / 9) * 100)}
                                                        size={20}
                                                        sx={{
                                                            color: progressColor,
                                                            position: 'absolute',
                                                        }}
                                                    />
                                                    {record.effectiveTime > 9 && (
                                                        <CircularProgress
                                                            variant="determinate"
                                                            value={Math.min(100, ((record.effectiveTime - 9) / (18 - 9)) * 100)}
                                                            size={14}
                                                            sx={{
                                                                color: 'orange',
                                                                position: 'absolute',
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