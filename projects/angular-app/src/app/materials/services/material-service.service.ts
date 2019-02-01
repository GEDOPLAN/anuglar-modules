import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor(public http: HttpClient) {}

  getDemoData(): Observable<{ id: number; title: string }[]> {
    return this.http.get<{ id: number; title: string }[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
