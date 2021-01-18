import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { ServiceStudentService } from 'src/app/service/service-student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  constructor(private router: Router, private service: ServiceStudentService) { }
  student: Student = new Student();

  newStudent(){
    this.service.addStudent(this.student)
      .subscribe(data => {
        alert("Student was added...");
        this.router.navigate(['listStudents']);
      })
  }

  ngOnInit(): void {
  }

}
