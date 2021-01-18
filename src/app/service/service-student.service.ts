import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from '../model/student';
import { URL_BACKEND } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})

export class ServiceStudentService {
  constructor(private httpClient: HttpClient) { }
  urlDataUes = URL_BACKEND;

  // Code to improve http request with Observables
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(URL_BACKEND)
      .pipe(
        tap(_ => console.log('fetched students')),
        catchError(this.handleError<Student[]>('getStudents', []))
      )
  }

  getStudentById(id: number): Observable<Student>{
    const urlPathStudent = `${URL_BACKEND}/${id}`;
    return this.httpClient.get<Student>(urlPathStudent)
      .pipe(
        tap(_ => console.log(`fetched student id=${id}`)),
        catchError(this.handleError<Student>(`getStudentById id=${id}`))
      )
  }

  editStudent(student: Student): Observable<any>{
    return this.httpClient.put(URL_BACKEND+"/"+student.id, student)
      .pipe(
        tap(_ => console.log(`edit student id=${student.id}`)),
        catchError(this.handleError<any>('editStudent'))
    )
  }

  addStudent(student: Student): Observable<Student>{
    return this.httpClient.post<Student>(URL_BACKEND, student)
      .pipe(
        tap(_ => console.log(`add student`)),
        catchError(this.handleError<Student>('addStudent'))
      )
  }

  deleteStudent(student: Student): Observable<Student>{
    return this.httpClient.delete<Student>(URL_BACKEND+"/"+student.id)
      .pipe(
        tap(_ => console.log(`delete student`)),
        catchError(this.handleError<Student>('deleteStudent'))
      )
  }

  /*getStudents(){
    return this.httpClient.get<Student[]>(this.url);
  }
  editStudent(student: Student){
    return this.httpClient.put<Student>(this.url+"/"+student.id, student);
  }
  getStudentById(id: Number){
    return this.httpClient.get<Student>(this.url+"/"+id);
  }
  addStudent(student: Student){
    return this.httpClient.post<Student>(this.urlDataUes, student);
  }
  deleteStudent(student: Student){
    return this.httpClient.delete<Student>(this.urlDataUes+"/"+student.id);
  }*/
  
}
