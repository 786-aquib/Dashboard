import { Card, CardContent, Grid, Typography, CircularProgress, Avatar } from "@mui/material";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { employeeData } from '../data'; // Adjust the path as necessary

function MyteamAndWorkHistory() {
    const getRandomStatus = () => {
        const statuses = [
            { status: "WFH", time: `${Math.floor(Math.random() * 12) + 8}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}AM` },
            { status: "Leave", time: "" },
            { status: "On-site", time: `${Math.floor(Math.random() * 12) + 8}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}AM` },
        ];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    const currentEmployee = employeeData[0]; // Get the first employee (or adjust based on your needs)

    return (
        <div style={{ marginTop: '50px', marginBottom: '20px', flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent
                            sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '370px',
                            }}
                        >
                            <Typography
                                sx={{ fontWeight: 'bold', fontFamily: 'monospace', marginBottom: 2 }}
                            >
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
                                            fontFamily: 'sans-serif'
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
                                                Members
                                                <UnfoldMoreIcon sx={{ marginLeft: '8px' }} />
                                            </th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                                Today
                                                <UnfoldMoreIcon sx={{ marginLeft: '8px' }} />
                                            </th>
                                            {currentEmployee.attendanceRecords.map((record, index) => (
                                                <th key={index} style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                                    {record.date}
                                                    <UnfoldMoreIcon sx={{ marginLeft: '8px' }} />
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentEmployee.teammates?.map((teammate) => (
                                            <tr key={teammate.employeeId}>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', height: '48px' }}>
                                                    <AccountCircleSharpIcon fontSize="large" color='info' sx={{ marginRight: 1 }} />
                                                    <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>{teammate.employeeName}</span>
                                                </td>

                                                {/* Random Status Column for Today */}
                                                {(() => {
                                                    const tStatus = getRandomStatus();
                                                    return (
                                                        <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', height: '48px' }}>
                                                            {tStatus.status === "WFH" && (
                                                                <>
                                                                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'blue', display: 'inline-block', marginRight: 4 }} />
                                                                    <span>{tStatus.time}</span>
                                                                </>
                                                            )}
                                                            {tStatus.status === "Leave" && (
                                                                <>
                                                                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'red', display: 'inline-block', marginRight: 4 }} />
                                                                    <span>Leave</span>
                                                                </>
                                                            )}
                                                            {tStatus.status === "On-site" && (
                                                                <>
                                                                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'green', display: 'inline-block', marginRight: 4 }} />
                                                                    <span>{tStatus.time}</span>
                                                                </>
                                                            )}
                                                        </td>
                                                    );
                                                })()}

                                                {/* Other Attendance Columns */}
                                                {currentEmployee.attendanceRecords.map((record, idx) => (
                                                    <td key={idx} style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', height: '48px' }}>
                                                        {record.workMode === "Remote" && (
                                                            <>
                                                                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'blue', display: 'inline-block', marginRight: 4 }} />
                                                                <span>{record.arrivalTime}</span>
                                                            </>
                                                        )}
                                                        {record.workMode === "Absent" && (
                                                            <>
                                                                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'red', display: 'inline-block', marginRight: 4 }} />
                                                                <span>Absent</span>
                                                            </>
                                                        )}
                                                        {record.workMode === "In Office" && (
                                                            <>
                                                                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'green', display: 'inline-block', marginRight: 4 }} />
                                                                <span>{record.arrivalTime}</span>
                                                            </>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent
                            sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '370px',
                            }}
                        >
                            <Typography
                                sx={{ fontWeight: 'bold', fontFamily: 'monospace', marginBottom: 2 }}
                            >
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
                                            fontFamily: 'sans-serif'
                                        }} />
                                        <span>{['meeting criteria', 'criteria unmet', 'action needed', 'overtime'][index]}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ height: '100%', overflow: 'auto' }}>
                                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                    <thead style={{ backgroundColor: 'whitesmoke' }}>
                                        <tr>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                                Date
                                                <UnfoldMoreIcon sx={{ marginLeft: '8px' }} />
                                            </th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                                Arrival
                                                <UnfoldMoreIcon sx={{ marginLeft: '8px' }} />
                                            </th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                                Departure
                                                <UnfoldMoreIcon sx={{ marginLeft: '8px' }} />
                                            </th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                                Effective Time
                                                <UnfoldMoreIcon sx={{ marginLeft: '4px' }} />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentEmployee.attendanceRecords.map((record, index) => (
                                            <tr key={index}>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', display: 'flex', alignItems: 'center', height: '48px' }}>
                                                    <Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
                                                        <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                                                            {index === 0 ? 'T' : record.day.split('/')[0]} {/* Today or Day number */}
                                                        </Typography>
                                                    </Avatar>
                                                    {record.date}
                                                </td>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', height: '48px' }}>{record.arrivalTime}</td>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', height: '48px' }}>{record.leavingTime}</td>
                                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', height: '48px', display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ textAlign: 'left', marginRight: 4 }}>
                                                        <span style={{ fontWeight: 'bold' }}>{`${record.effectiveTime} hours`}</span>
                                                        <div style={{ fontWeight: 'normal', fontSize: '0.9em' }}>{`/ 9 hours`}</div>
                                                    </div>
                                                    <CircularProgress
                                                        variant="determinate"
                                                        value={(record.effectiveTime / 9) * 100} // Adjust this based on actual hours worked
                                                        size={20}
                                                        sx={{
                                                            color: 'gray',
                                                            marginLeft: '4px',
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
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
