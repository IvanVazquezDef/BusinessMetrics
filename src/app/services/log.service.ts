import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Log } from '../interfaces/log.interface';

@Injectable({providedIn: 'root'})
export class LogService {

    private baseUrl: string = "https://localhost:5001/api/log";

    constructor(private http: HttpClient) { }

    getAllLogs(): Observable<Log[]> {
        return this.http.get<Log[]>(`${this.baseUrl}`);
    }

    getLogsByPageId( id : string): Observable<Log[]> {
        return this.http.get<Log[]>(`${this.baseUrl}/pageId/${id}`)
    }

    getLogsByUserId( id : string): Observable<Log[]> {
        return this.http.get<Log[]>(`${this.baseUrl}/userId/${id}`)
    }

    getLogsByDate( date : string): Observable<Log[]> {
        return this.http.get<Log[]>(`${this.baseUrl}/userId/${date}`)
    }

    addLog( log: Log): Observable<Log> {
        return this.http.post<Log>(`${this.baseUrl}`, log);
    }
}