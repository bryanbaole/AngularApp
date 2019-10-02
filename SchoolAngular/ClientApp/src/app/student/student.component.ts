import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Person[];

  constructor(private studentService: StudentService) { }

    ngOnInit() {
        this.getStudents();
  }
    getStudents(): void {
        this.studentService.getStudents()
          .subscribe(result => {
              this.students = result;
        }, error => console.error(error));

     
    }

}
