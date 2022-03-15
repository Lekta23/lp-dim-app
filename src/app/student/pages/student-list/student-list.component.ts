import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studuants$: Observable<Student[]>; 

  constructor(private _studentService : StudentService) { }

  ngOnInit(): void {
    this.studuants$ = this._studentService.getStudents();
  }

}
