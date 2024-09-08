// Define the Student class
class Student {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  
    // Method to display student details
    displayDetails() {
      return `Name: ${this.name}, ID: ${this.id}`;
    }
  }
  
  // Define the Classroom class
  class Classroom {
    constructor(subject) {
      this.subject = subject;
      this.students = [];
      this.attendanceRecords = [];
    }
  
    // Method to add a student to the classroom
    addStudent(student) {
      this.students.push(student);
      return `Added ${student.displayDetails()} to ${this.subject} class.`;
    }
  
    // Method to take attendance
    takeAttendance(date, attendanceList) {
      this.attendanceRecords.push({ date, attendanceList });
      return `Attendance taken for ${this.subject} on ${date}.`;
    }
  
    // Method to view attendance records
    viewAttendance() {
      return this.attendanceRecords.map(record => 
        `Date: ${record.date}, Attendance: ${record.attendanceList.join(', ')}`
      ).join('\n');
    }
  }
  
  // Define the AttendanceRecord class
  class AttendanceRecord {
    constructor(student, isPresent) {
      this.student = student;
      this.isPresent = isPresent; // true for present, false for absent
    }
  
    // Method to display attendance record details
    displayDetails() {
      return `${this.student.displayDetails()} - ${this.isPresent ? 'Present' : 'Absent'}`;
    }
  }
  
  // Example usage:
  const student1 = new Student('Alice Johnson', 'S001');
  const student2 = new Student('Bob Smith', 'S002');
  
  const mathClass = new Classroom('Mathematics');
  console.log(mathClass.addStudent(student1)); // Added Alice Johnson to Mathematics class.
  console.log(mathClass.addStudent(student2)); // Added Bob Smith to Mathematics class.
  
  const attendanceList = [
    new AttendanceRecord(student1, true),
    new AttendanceRecord(student2, false)
  ];
  console.log(mathClass.takeAttendance('2024-09-08', attendanceList)); // Attendance taken for Mathematics on 2024-09-08.
  
  console.log(mathClass.viewAttendance()); // View attendance records
  
  