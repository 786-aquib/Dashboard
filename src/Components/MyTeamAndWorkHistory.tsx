import { Card, CardContent, Grid, Typography, CircularProgress, Avatar } from "@mui/material";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { employeeData } from '../data'; 

function MyteamAndWorkHistory() {
    const currentEmployee = employeeData[0];
    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <div style={{ marginTop: '50px', marginBottom: '20px', flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={12} sm={6}>
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
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                                <div style={{ display: 'flex', marginLeft: 6     }}>
                                                    Members <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="small" />
                                                </div>
                                            </th>
                                            {currentEmployee.attendanceRecords.map((record, index) => (
                                                <th key={index} style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                                    <td style={{ padding: '12px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
                                                        <AccountCircleSharpIcon fontSize="large" color='info' sx={{ marginRight: 1 }} />
                                                        <span style={{ fontWeight: 'bold' }}>{teammate.employeeName}</span>
                                                    </td>
                                                    {teammate.attendanceRecords.map((record, idx) => (
                                                        <td key={idx} style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
                                                            {record.workMode === "Remote" && <span style={{fontFamily:'inherit'}}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'blue', display: 'inline-block', marginRight: 4, fontFamily:'inherit' }} />{record.arrivalTime}</span>}
                                                            {record.workMode === "Absent" && <span style={{fontFamily:'inherit'}}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'red', display: 'inline-block', marginRight: 4 , fontFamily:'inherit'}} />Absent</span>}
                                                            {record.workMode === "In Office" && <span style={{fontFamily:'inherit'}}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'green', display: 'inline-block', marginRight: 4, fontFamily:'inherit' }} />{record.arrivalTime}</span>}
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
                </Grid>
                <Grid item xs={12} sm={6}>
    <Card>
        <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '370px' }}>
            <Typography sx={{ fontWeight: 'bold', fontFamily: 'monospace', marginBottom: 2 }}>
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
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                    Date <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize= "inherit" />
                                </div>
                            </th>
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    Arrival <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="inherit" />
                                </div>
                            </th>
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    Departure <UnfoldMoreIcon sx={{ marginLeft: '8px' }} fontSize="inherit" />
                                </div>
                            </th>
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>
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
            <td style={{ padding: '12px',textAlign: 'center', display: 'flex', marginTop: 2, }}>
                <Avatar sx={{ width: 24, height: 24, marginRight: 2, marginTop:'7px' }}>
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                        {index === 0 ? 'T' : record.day.split('/')[0]}
                    </Typography>
                </Avatar>
                <span
                  style={{marginTop:"10px"}}
                >{record.date}</span>
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', fontFamily: 'monospace' }}>
                {record.arrivalTime || 'N/A'} 
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', fontFamily: 'monospace' }}>
                {record.leavingTime || 'N/A'} 
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'right', marginRight: 4, fontFamily: 'monospace', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold' }}>{`${record.effectiveTime} hours`}</span>
                    <div style={{ fontWeight: 'normal', fontSize: '0.9em' }}>{`/ 9 hours`}</div>
                </div>
                <CircularProgress
                    variant="determinate"
                    value={progressValue}
                    size={20}
                    sx={{
                        color: progressColor,
                        marginLeft: '4px',
                        marginRight: '4px',
                    }}
                />
            </td>
        </tr>
    );
})}

                    </tbody>
                </table>
            </div>
        </CardContent>
    </Card>
</Grid>
</Grid>
        </div>
    );
}

export default MyteamAndWorkHistory;
