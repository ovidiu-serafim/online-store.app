import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {QuickViewComponent} from "../quick-view/quick-view.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(QuickViewComponent);
  }

  ngOnInit(): void {
  }

}
