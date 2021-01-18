import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }

  listStudents(){
    this.router.navigate(['listStudents'])
  }

  newStudents(){
    this.router.navigate(['newStudent'])
  }

  ngOnInit(): void {
  }

}
