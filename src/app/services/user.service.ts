import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../models/user/user.model';
import { newUser } from '../models/user/newUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _client : HttpClient) { }

  /*
  getAll(url : string) : Observable<User[]>{
    return this._client.get<User[]>(url);
  }avant sans environnement.ts*/
  getAll() : Observable<User[]>{
    return this._client.get<User[]>(`${environment.apiUrl}/User`);
  }
  add(user: User){
    return this._client.post(`${environment.apiUrl}/user`, user);
  }
  delete(id : number){
    return this._client.delete(`${environment.apiUrl}/user/${id}`);
  }
  getById(id : number) : Observable<User[]>{
    return this._client.get<User[]>(`${environment.apiUrl}/user/${id}`);
  }
  update(id: number, user: newUser){
    return this._client.put(`${environment.apiUrl}/user/${id}`, user);
  }
}
