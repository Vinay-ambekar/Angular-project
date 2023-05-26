import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  forms:FormGroup;

  constructor(formbuild:FormBuilder,private studentService: StudentService){
    this.forms=formbuild.group({
      name:['',[Validators.required]],
      college:['',[Validators.required]],
      address:['',[Validators.required]],
      rollnumber:['',[Validators.required]],
      marks:['',[Validators.required]],
      contactno:['',[Validators.required]]

    })

  }
  submitForm() {
    if (this.forms.valid) {
      const studentData = this.forms.value;
      this.studentService.addStudent(studentData);
      this.forms.reset();
    }
  }



}
