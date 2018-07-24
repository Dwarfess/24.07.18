import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    public url = `/assets/data/clients.json`;

    constructor(private http: HttpClient) {}

    // http get any game
    public getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.url);
    }
}
