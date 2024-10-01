export interface AttendanceRecord {
  date: string;
  day: string;
  workMode: string;
  arrivalTime: string;
  leavingTime: string;
}

export interface Employee {
  employeeId: number;
  employeeName: string;
  attendanceRecords: AttendanceRecord[];
  isAttendanceMarked: boolean; // Indicates attendance marking
  teammates?: Employee[]; // Optional property for teammates
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
              leavingTime: "06:00 PM"
          },
          {
              date: "2024-09-24",
              day: "Tuesday",
              workMode: "Remote",
              arrivalTime: "N/A",
              leavingTime: "N/A"
          },
          {
              date: "2024-09-25",
              day: "Wednesday",
              workMode: "Absent",
              arrivalTime: "N/A",
              leavingTime: "N/A"
          }
      ],
      isAttendanceMarked: true, // Indicates if you've marked attendance
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
                      leavingTime: "06:00 PM"
                  },
                  {
                      date: "2024-09-24",
                      day: "Tuesday",
                      workMode: "Holiday",
                      arrivalTime: "N/A",
                      leavingTime: "N/A"
                  },
                  {
                      date: "2024-09-25",
                      day: "Wednesday",
                      workMode: "In Office",
                      arrivalTime: "10:15 AM",
                      leavingTime: "06:00 PM"
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
                      leavingTime: "06:00 PM"
                  },
                  {
                      date: "2024-09-24",
                      day: "Tuesday",
                      workMode: "Remote",
                      arrivalTime: "N/A",
                      leavingTime: "N/A"
                  },
                  {
                      date: "2024-09-25",
                      day: "Wednesday",
                      workMode: "Absent",
                      arrivalTime: "N/A",
                      leavingTime: "N/A"
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
                      arrivalTime: "N/A",
                      leavingTime: "N/A"
                  },
                  {
                      date: "2024-09-24",
                      day: "Tuesday",
                      workMode: "In Office",
                      arrivalTime: "09:30 AM",
                      leavingTime: "05:30 PM"
                  },
                  {
                      date: "2024-09-25",
                      day: "Wednesday",
                      workMode: "In Office",
                      arrivalTime: "10:00 AM",
                      leavingTime: "06:00 PM"
                  }
              ],
              isAttendanceMarked: true, // Indicates attendance is marked
          }
      ]
  }
];
