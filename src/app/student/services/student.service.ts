import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from 'src/app/core/models/student';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {
  private readonly studentPath : string = '/student'; // mettre le path pour accerder a l'api 


  constructor(private _http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this._http.get<Student[]>(
      `${environment.apiBaseUrl}${this.studentPath}`
    );
  }

  getStudent(id : number): Observable<Student> {
    return this._http.get<Student>(
      `${environment.apiBaseUrl}${this.studentPath}/${id}`
    );
  }

  createStudent(student: Student): Observable<Student> {
    return this._http.post<Student>(
      `${environment.apiBaseUrl}${this.studentPath}`,
      student
    );
  }

  updateStudent(student: Student): Observable<Student> {
    return this._http.put<Student>(
      `${environment.apiBaseUrl}${this.studentPath}/${student.id}`,
      student
    );
  }

  deleteStudent(id: number): Observable<Student> {
    return this._http.delete<Student>(
      `${environment.apiBaseUrl}${this.studentPath}/${id}`
    );
  }
}
