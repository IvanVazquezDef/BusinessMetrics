import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Log } from '../interfaces/log.interface';

@Injectable({providedIn: 'root'})
export class LogService {

    private baseUrl: string = "http://localhost:8000/api/log";

    constructor(private http: HttpClient) { }

    getLoyalCustomers(): Observable<[]>{
        return this.http.get<[]>(`${this.baseUrl}/loyalCustomers`);
    }
}