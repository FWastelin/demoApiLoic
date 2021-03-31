import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
 
  fg : FormGroup;
  users : User[];
  user: User;


  constructor(
    private _userService : UserService,
    private _builder : FormBuilder,
    private _router : Router,

  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      name : ['',Validators.required],
      birth_year : ['',Validators.required],
      ville : ['',Validators.required],
    })
    this._userService.getAll().subscribe(users =>this.users = users)
  }
  onSubmit(){
    if(this.fg.invalid){
      return;
    }
    this._userService.add(this.fg.value).subscribe({
      next : () => {
        this._userService.getAll().subscribe(users =>this.users = users)
        this._router.navigate(['/home'])
      }
    })
  }

}
