import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalPopupComponent>) { }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }
}
