export interface AttendanceRecord {
    date: string;
    day: string;
    workMode: string;
    arrivalTime: string;
    leavingTime: string;
    effectiveTime: number;
}

export interface Employee {
    employeeId: number;
    employeeName: string;
    attendanceRecords: AttendanceRecord[];
    isAttendanceMarked: boolean;
    teammates?: Employee[];
    summary?: AttendanceSummary;
}

export interface AttendanceSummary {
    totalOnTime: number;
    totalWFH: number;
    totalLate: number;
    totalAbsent: number;
    averageCheckIn: string;
    averageCheckOut: string;
    averageHours: number;
    onTimeInterval: number;
}

export const employeeData: Employee[] = [
    {
        employeeId: 1,
        employeeName: "Your Name",
        attendanceRecords: [
            {
                date: "2024-09-22",
                day: "Monday",
                workMode: "In Office",
                arrivalTime: "10:00 AM",
                leavingTime: "06:00 PM",
                effectiveTime: 16
            },
            
            {
                date: "2024-09-23",
                day: "Monday",
                workMode: "In Office",
                arrivalTime: "10:00 AM",
                leavingTime: "06:00 PM",
                effectiveTime: 16
            },
            {
                date: "2024-09-24",
                day: "Tuesday",
                workMode: "Remote",
                arrivalTime: "11:50 AM",
                leavingTime: "05:00 PM",
                effectiveTime: 9
            },
            {
                date: "2024-09-25",
                day: "Wednesday",
                workMode: "Absent",
                arrivalTime: "10:30 AM",
                leavingTime: "04:00 PM",
                effectiveTime: 2
            }
        ],
        isAttendanceMarked: true,
        summary: {
            totalOnTime: 1030,
            totalWFH: 191,
            totalLate: 300,
            totalAbsent: 66,
            averageCheckIn: "10:30 AM",
            averageCheckOut: "05:30 PM",
            averageHours: 4.5,
            onTimeInterval: 1,
        },
        teammates: [
            {
                employeeId: 2,
                employeeName: "Bob Smith",
                attendanceRecords: [
                    {
                        date: "2024-09-22",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "10:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 16
                    },
                    {
                        date: "2024-09-23",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "10:25 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8
                    },
                    {
                        date: "2024-09-24",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "10:35 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8
                    },
                    {
                        date: "2024-09-25",
                        day: "Wednesday",
                        workMode: "In Office",
                        arrivalTime: "10:22 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8
                    }
                ],
                isAttendanceMarked: true,
            },
            {
                employeeId: 3,
                employeeName: "Alice Johnson",
                attendanceRecords: [
                    {
                        date: "2024-09-22",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "10:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 16
                    },
                    {
                        date: "2024-09-23",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "12:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8    
                    },
                    {
                        date: "2024-09-24",
                        day: "Tuesday",
                        workMode: "Remote",
                        arrivalTime: "09:30 AM",
                        leavingTime: "05:10 PM",
                        effectiveTime: 7.5 
                    },
                    {
                        date: "2024-09-25",
                        day: "Wednesday",
                        workMode: "Absent",
                        arrivalTime: "Absent",
                        leavingTime: "Absent",
                        effectiveTime: 0 
                    }
                ],
                isAttendanceMarked: true,
            },
            
            {
                employeeId: 4,
                employeeName: "Charlie Brown",
                attendanceRecords: [
                    {
                        date: "2024-09-22",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "10:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 16
                    },
                    {
                        date: "2024-09-23",
                        day: "Monday",
                        workMode: "Remote",
                        arrivalTime: "12:09 AM",
                        leavingTime: "05:45 PM",
                        effectiveTime: 7.5 
                    },
                    {
                        date: "2024-09-24",
                        day: "Tuesday",
                        workMode: "In Office",
                        arrivalTime: "09:30 AM",
                        leavingTime: "05:30 PM",
                        effectiveTime: 8 
                    },
                    {
                        date: "2024-09-25",
                        day: "Wednesday",
                        workMode: "In Office",
                        arrivalTime: "10:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8 
                    }
                ],
                isAttendanceMarked: true, 
            }
        ]
    },
];
