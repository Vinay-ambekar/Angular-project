import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentDataKey = 'studentData'; 
  private studentData = new BehaviorSubject<any[]>([]);
  public studentData$ = this.studentData.asObservable();

  constructor() { 
     const storedData = localStorage.getItem(this.studentDataKey);
    if (storedData) {
      this.studentData.next(JSON.parse(storedData));
    }
  }

  addStudent(student: any) {
    const currentData = this.studentData.getValue();
    const updatedData = [...currentData, student];
    this.studentData.next(updatedData);
     localStorage.setItem(this.studentDataKey, JSON.stringify(updatedData));
  
  }
  deleteStudent(student: any) {
    const currentData = this.studentData.getValue();
    const updatedData = currentData.filter((s) => s !== student);
    this.studentData.next(updatedData);
     localStorage.setItem(this.studentDataKey, JSON.stringify(updatedData));
  }
    clearStudentData() {
    // Clear student data from localStorage
    localStorage.removeItem(this.studentDataKey);
    this.studentData.next([]);
  }
}
