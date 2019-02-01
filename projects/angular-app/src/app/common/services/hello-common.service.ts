import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloCommonService {
  constructor() {}

  helloWorld(): string {
    return 'Hello World';
  }
}
