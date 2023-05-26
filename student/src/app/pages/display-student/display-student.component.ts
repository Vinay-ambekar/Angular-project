import { Component , OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.scss']
})
export class DisplayStudentComponent implements OnInit{
  students: any[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.studentData$.subscribe((data) => {
      this.students = data;
    });
  }
  deleteStudent(student: any) {
    // Remove the student from the studentData array
    const index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }

}
