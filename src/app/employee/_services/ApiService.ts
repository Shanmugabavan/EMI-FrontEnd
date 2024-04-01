// item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from '../../_shared/_models/Employee';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7277/api';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/Employee`);
  }

  addEmployee(employee: Employee): Observable<any>{
    return this.http.post<Employee>(`${this.apiUrl}/Employee`, employee);
  }

  editEmployee(id: string, employee: Employee): Observable<any> {
    return this.http.put<Employee>(`${this.apiUrl}/Employee/update/${id}`, employee);
  }
}
