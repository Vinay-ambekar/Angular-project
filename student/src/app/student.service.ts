import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentData = new BehaviorSubject<any[]>([]);
  public studentData$ = this.studentData.asObservable();

  constructor() { }

  addStudent(student: any) {
    const currentData = this.studentData.getValue();
    const updatedData = [...currentData, student];
    this.studentData.next(updatedData);
  }
  deleteStudent(student: any) {
    const currentData = this.studentData.getValue();
    const updatedData = currentData.filter((s) => s !== student);
    this.studentData.next(updatedData);
  }
}
