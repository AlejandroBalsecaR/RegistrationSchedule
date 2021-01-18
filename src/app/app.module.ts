import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListStudentComponent } from './layouts/list-students/list-student.component';
import { BodyComponent } from './layouts/main/body/body.component';
import { FormsModule } from '@angular/forms';
import { ServiceStudentService } from './service/service-student.service';
import { NewStudentComponent } from './layouts/new-student/new-student/new-student.component';
import { EditStudentComponent } from './layouts/edit-student/edit-student/edit-student.component';
import { ListSubjectsComponent } from './layouts/list-subjects/list-subjects/list-subjects.component';
import { MenuComponent } from './layouts/main/menu/menu.component';
import { StudentComponent } from './layouts/student/student/student.component';
import { SubjectComponent } from './layouts/subject/subject/subject.component';
@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    BodyComponent,
    NewStudentComponent,
    EditStudentComponent,
    ListSubjectsComponent,
    MenuComponent,
    StudentComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServiceStudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
