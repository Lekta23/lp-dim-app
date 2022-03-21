import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student$: Observable<Student>;
  id : string;

  constructor(private _studentService : StudentService,
              private _activatedRoute: ActivatedRoute,) {
                this.id = this._activatedRoute.snapshot.params['id']; 
                this.student$ = this._studentService.getStudent(Number(this.id));
               }

  ngOnInit(): void {
    

  }

  

}
