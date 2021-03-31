import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'app-confirmbox',
  templateUrl: './confirmbox.component.html',
  styleUrls: ['./confirmbox.component.scss']
})
export class ConfirmboxComponent implements OnInit {
  //décorateur de type string pour récupérer le nom d'afficher dans la confirme box
  @Input() name : string;

  constructor(
    private _dialogRef : NbDialogRef<ConfirmboxComponent>
  ) { }

  ngOnInit(): void {
  }
  // 2 méthodes à placer pour activer et fermer la boïte
  confirm() {
    this._dialogRef.close(true);
  }
  dismiss() {
    this._dialogRef.close(false)
  }

}
