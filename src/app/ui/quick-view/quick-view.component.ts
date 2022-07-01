import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  productName?: string;
  productPrice?: number;
  productImage?: string;

  @Output() submitClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<QuickViewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: QuickViewComponent) { }

  ngOnInit(): void {
    this.productName = this.data.productName;
    this.productPrice = this.data.productPrice;
    this.productImage = this.data.productImage;
  }


  closeDialog() {
    this.dialogRef.close();
  }

}
