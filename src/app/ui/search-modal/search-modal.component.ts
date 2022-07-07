import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, map} from "rxjs/operators";

import { Store } from "@ngrx/store";
import { ProductState } from "../../redux/product/product.reducer";
import { setFilterBy } from "../../redux/product/product.actions";
import {selectSortedProducts} from "../../redux/product/product.selectors";
import {Observable} from "rxjs";
import {Product} from "../../shared/models/product";

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  results: Product[] = [];

  searchControl = new FormControl('');

  constructor(private store: Store<ProductState>) { }

  ngOnInit() {
    this.store.select(selectSortedProducts).subscribe((results) => {
      this.results = results;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      map(query => query!.toLowerCase())
    ).subscribe((query) => {
      this.store.dispatch(setFilterBy({ filters: ['name', 'price'], query }));
    })
  }

}
