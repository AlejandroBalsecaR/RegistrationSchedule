import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { ServiceStudentService } from '../../service/service-student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})
export class ListStudentComponent implements OnInit {
  students: Student[];
  student: Student;
  
  constructor(
    private serviceStudent: ServiceStudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /*with active route this method is obsolete
    goEditStudentPanel(student: Student): void{
    localStorage.setItem("id", student.id.toString());
    this.router.navigate(["editStudent"])}*/

  getStudent(): void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');this.serviceStudent
    this.serviceStudent.getStudentById(id).subscribe(args => this.student = args);
  }

  deleteStudent(student: Student){
    this.serviceStudent.deleteStudent(student).subscribe(data => {
      this.students = this.students.filter(s => s !== student);
      alert("User was deleted");
    })
  }

  ngOnInit(): void {
    this.serviceStudent.getStudents().subscribe(data => {
      this.students = data
    })
  }
}
