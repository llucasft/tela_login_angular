import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = 'http://127.0.0.1:5000/users'

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    const url = `${this.API}/${user.id}`
    return this.http.post<User>(url, user)
  }
}
