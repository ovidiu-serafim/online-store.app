import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/models/product";
import {Store} from "@ngrx/store";
import {ProductState} from "../../redux/product/product.reducer";
import * as ProductActions from "../../redux/product/product.actions";
import * as ProductSelectors from "../../redux/product/product.selectors";

@Component({
  selector: 'app-search-product-result',
  templateUrl: './search-product-result.component.html',
  styleUrls: ['./search-product-result.component.scss']
})
export class SearchProductResultComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.requestList());
    this.store.select(ProductSelectors.getProducts).subscribe( products => this.products = products);
  }

}
