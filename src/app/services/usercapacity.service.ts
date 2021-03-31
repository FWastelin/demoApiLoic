import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserCapacity } from '../models/user/usercapacity.model';

@Injectable({
  providedIn: 'root'
})
export class UsercapacityService {

  constructor( 
    private _client : HttpClient
  ) { }

  getUserCapacity (idUser : number){
    return this._client.get<UserCapacity[]>(`${environment.apiUrl}/user/${idUser}/capacity`);
  }


}
