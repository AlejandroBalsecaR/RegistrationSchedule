import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './layouts/edit-student/edit-student/edit-student.component';
import { ListStudentComponent } from './layouts/list-students/list-student.component';
import { BodyComponent } from './layouts/main/body/body.component';
import { NewStudentComponent } from './layouts/new-student/new-student/new-student.component';
import { StudentComponent } from './layouts/student/student/student.component';
import { SubjectComponent } from './layouts/subject/subject/subject.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'bodyStudents' },
  { path: 'student', component: StudentComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'bodyStudents', component: BodyComponent },
  { path: 'listStudents', component: ListStudentComponent },
  { path: 'newStudent', component: NewStudentComponent },
  { path: 'editStudent/:id', component: EditStudentComponent},
  //{ path: 'editStudent', component: EditStudentComponent },with Active Link this route is obsolete
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
