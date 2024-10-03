export interface AttendanceRecord {
    date: string;
    day: string;
    workMode: string;
    arrivalTime: string;
    leavingTime: string;
    effectiveTime: number; // New property for effective hours worked
}

export interface Employee {
    employeeId: number;
    employeeName: string;
    attendanceRecords: AttendanceRecord[];
    isAttendanceMarked: boolean; // Indicates attendance marking
    teammates?: Employee[]; // Optional property for teammates
    summary?: AttendanceSummary; // New property for attendance summary
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
        employeeName: "Your Name", // Replace with your name
        attendanceRecords: [
            {
                date: "2024-09-23",
                day: "Monday",
                workMode: "In Office",
                arrivalTime: "10:00 AM",
                leavingTime: "06:00 PM",
                effectiveTime: 8 // Example effective hours
            },
            {
                date: "2024-09-24",
                day: "Tuesday",
                workMode: "Remote",
                arrivalTime: "11:50 AM",
                leavingTime: "05:00 PM",
                effectiveTime: 5.5 // Example effective hours
            },
            {
                date: "2024-09-25",
                day: "Wednesday",
                workMode: "Absent",
                arrivalTime: "10:30 AM",
                leavingTime: "04:00 PM",
                effectiveTime: 0 // No effective hours since the employee was absent
            }
        ],
        isAttendanceMarked: true, // Indicates if you've marked attendance
        summary: {
            totalOnTime: 1, // Number of times arrived on time
            totalWFH: 1, // Number of work-from-home days
            totalLate: 1, // Number of late arrivals
            totalAbsent: 1, // Number of absences
            averageCheckIn: "10:30 AM", // New field for average check-in time
            averageCheckOut: "05:30 PM", // New field for average check-out time
            averageHours: 4.5, // New field for average hours worked
            onTimeInterval: 1, // New field for number of on-time intervals
        },
        teammates: [
            {
                employeeId: 2,
                employeeName: "Bob Smith",
                attendanceRecords: [
                    {
                        date: "2024-09-23",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "10:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8 // Example effective hours
                    },
                    {
                        date: "2024-09-24",
                        day: "Tuesday",
                        workMode: "Holiday",
                        arrivalTime: "10:20 AM",
                        leavingTime: "07:00 PM",
                        effectiveTime: 8 // Example effective hours
                    },
                    {
                        date: "2024-09-25",
                        day: "Wednesday",
                        workMode: "In Office",
                        arrivalTime: "10:15 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8 // Example effective hours
                    }
                ],
                isAttendanceMarked: true, // Indicates attendance is marked
            },
            {
                employeeId: 3,
                employeeName: "Alice Johnson",
                attendanceRecords: [
                    {
                        date: "2024-09-23",
                        day: "Monday",
                        workMode: "In Office",
                        arrivalTime: "10:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8 // Example effective hours
                    },
                    {
                        date: "2024-09-24",
                        day: "Tuesday",
                        workMode: "Remote",
                        arrivalTime: "09:30 AM",
                        leavingTime: "05:10 PM",
                        effectiveTime: 7.5 // Example effective hours
                    },
                    {
                        date: "2024-09-25",
                        day: "Wednesday",
                        workMode: "Absent",
                        arrivalTime: "10:10 AM",
                        leavingTime: "07:00 PM",
                        effectiveTime: 0 // No effective hours since the employee was absent
                    }
                ],
                isAttendanceMarked: false, // Indicates attendance is not marked
            },
            {
                employeeId: 4,
                employeeName: "Charlie Brown",
                attendanceRecords: [
                    {
                        date: "2024-09-23",
                        day: "Monday",
                        workMode: "Remote",
                        arrivalTime: "10:09 AM",
                        leavingTime: "05:45 PM",
                        effectiveTime: 7.5 // Example effective hours
                    },
                    {
                        date: "2024-09-24",
                        day: "Tuesday",
                        workMode: "In Office",
                        arrivalTime: "09:30 AM",
                        leavingTime: "05:30 PM",
                        effectiveTime: 8 // Example effective hours
                    },
                    {
                        date: "2024-09-25",
                        day: "Wednesday",
                        workMode: "In Office",
                        arrivalTime: "10:00 AM",
                        leavingTime: "06:00 PM",
                        effectiveTime: 8 // Example effective hours
                    }
                ],
                isAttendanceMarked: true, // Indicates attendance is marked
            }
        ]
    }
];
