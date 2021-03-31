import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { User } from 'src/app/models/user/user.model';

import { UserService } from 'src/app/services/user.service';
import { ConfirmboxComponent } from '../../shared/confirmbox/confirmbox.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : User[];
  fg : FormGroup;
  user : User;

  constructor(
    private _userService : UserService,
    private _router : Router,
    private _dialogService : NbDialogService,
    private _builder : FormBuilder

  ) { }

  ngOnInit(): void {
    this._userService.getAll().subscribe(users => this.users = users)
  }
  toEdit(id : number){
    this._router.navigate([`editUser/${id}`]);
  }
  toCreate(){
    this._router.navigate(['register']);
  }
  toInfo( id : number){
    this._router.navigate([`infouser/${id}`]);
  }
  toDelete(id : number){
    //récupére ce que j'ai mit de l'autre coté
    let confirmBox = this._dialogService.open(ConfirmboxComponent,{
      context:{
        name : this.users.find(user => user.id == id).name
      },
      closeOnBackdropClick : false
    });
    confirmBox.onClose.subscribe(yesOrNo =>{
      if(yesOrNo){
        this._userService.delete(id)
            .subscribe(() => this.users = this.users.filter(user => user.id !== id));
        this._router.navigate(['/home']);
      }
    });
  }

}
