import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  quantity: number;
  img: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  isActiveOrderNote: boolean = false;

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

  getTotal(): number {
    return this.products.map(product => product.price)
      .reduce((totalPrice, price) => totalPrice + price, 0);
  }

  setOrderNote(): void {
    this.isActiveOrderNote = !this.isActiveOrderNote;
  }
}
