import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private _http: HttpClient) { }

  getTaskDetails(){
    return this._http.get('https://jsonplaceholder.typicode.com/todos')
  }

  AddTaskDetails(tasksDetails: { userId: number; taskTitle: string; completed: boolean; }): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this._http.post(url, tasksDetails);
  }
}
