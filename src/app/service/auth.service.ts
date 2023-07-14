import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(BASE_URL+'getAllEmps');
  }

  register(employee: Employee): Observable<Object>
  {
    return this.http.post<any>(BASE_URL+'saveEmployee',employee);
  }

  deleteEmpById(id : number): Observable<Object>
  {
    return this.http.delete(`${BASE_URL}`+`deleteEmp/${id}`);
  }

  getEmpById(id: number): Observable<Employee>
  {
    return this.http.get<Employee>(`${BASE_URL}`+`getEmpById/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>
  {
    return this.http.put<Employee>(`${BASE_URL}`+`updateEmp/${id}`,employee);
  }
}
