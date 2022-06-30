import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SearchModalComponent} from "../../ui/search-modal/search-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(SearchModalComponent, {
      height: '90%',
      width: '90%',
      panelClass: 'search-modal'
    });
  }

}
