import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ConfirmboxComponent } from 'src/app/components/shared/confirmbox/confirmbox.component';
import { CapacityService } from 'src/app/services/capacity.service';
import { Capacity } from 'c:/angular/web9/DemoApiLoic/src/app/models/capacity/capacity.model';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  capacities: Capacity[];
  fg : FormGroup;
  capacity : Capacity

  constructor(
    private _capacityService : CapacityService,
    private _router : Router,
    private _dialogService : NbDialogService, //appel le service pour faire les différentes actions
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      capacity : ['', Validators.required]
    })
    this._capacityService.getAll().subscribe(capacities => this.capacities = capacities)
  }
  onSubmit(){
    if(this.fg.invalid){
      return;
    }
    this._capacityService.add(this.fg.value).subscribe({
      next : () => {
        this._capacityService.getAll().subscribe(capacities => this.capacities = capacities)
      }
    })
  }
  toEdit(id : number){
    this._router.navigate([`editcapacity/${id}`]);
  }
  toDelete(id : number){
    //récupére ce que j'ai mit de l'autre coté
    let confirmBox = this._dialogService.open(ConfirmboxComponent,{
      context:{
        name : this.capacities.find(capacity => capacity.id == id).name
      },
      closeOnBackdropClick : false
    });
    confirmBox.onClose.subscribe(yesOrNo =>{
      if(yesOrNo){
        this._capacityService.delete(id)
            .subscribe(() => this.capacities = this.capacities.filter(capacity => capacity.id !== id));
        this._router.navigate(['/capacity']);
      }
    });
  }

}
