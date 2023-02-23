import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string {
    return "sTX7v7VWzEm79XLavFlpyjiQD7GnRR"
  }
}
