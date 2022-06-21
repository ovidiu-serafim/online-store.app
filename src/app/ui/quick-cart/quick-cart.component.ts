import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-cart',
  templateUrl: './quick-cart.component.html',
  styleUrls: ['./quick-cart.component.scss']
})
export class QuickCartComponent implements OnInit {
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products.push(
      {
        name: 'Backpack',
        price: 50,
        quantity: 5,
        img: 'assets/images/products/amcrest-backpack.webp'
      },
      {
        name: 'Smartphone',
        price: 250,
        quantity: 1,
        img: 'assets/images/products/smartphone.webp'
      },
      {
        name: 'Smart watch',
        price: 100,
        quantity: 3,
        img: 'assets/images/products/smartwatch.webp'
      }
    );
  }
}
