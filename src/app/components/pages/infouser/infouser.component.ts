import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user/user.model';
import { UserCapacity } from 'src/app/models/user/usercapacity.model';
import { UserService } from 'src/app/services/user.service';
import { UsercapacityService } from 'src/app/services/usercapacity.service';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.scss']
})
export class InfouserComponent implements OnInit {

  id : number;
  user : User[];
  userCapacity : UserCapacity[];

  constructor(
    private _userService : UserService,
    private _userCapacity : UsercapacityService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._userService.getById(this.id).subscribe(data => this.user = data);
    this._userCapacity.getUserCapacity(this.id).subscribe(data => this.userCapacity = data);
    
  }

}
