import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

    private studentURL = 'api/student';

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Person[]> {
        return this.http.get<Person[]>(this.studentURL)
            .pipe(
                catchError(this.handleError<Person[]>('getStudents', []))
            );
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            return of(result as T);
        };
    }
}
