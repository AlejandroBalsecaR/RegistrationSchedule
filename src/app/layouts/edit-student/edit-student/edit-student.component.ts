import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { ServiceStudentService } from 'src/app/service/service-student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  student: Student = new Student();

  constructor(
    private router: Router,
    private serviceStudent: ServiceStudentService
  ) {}

  goEditStudentPanel() {
    let id = localStorage.getItem('id');
    this.serviceStudent.getStudentById(+id).subscribe((data) => {
      this.student = data;
    });
  }

  editStudent(student: Student){
    this.serviceStudent.editStudent(student)
      .subscribe(data => {
        this.student = data
        alert("Student was updated.");
        this.router.navigate(["listStudents"])
    })

  }

  ngOnInit(): void {
    this.goEditStudentPanel();
  }
}
