import {InMemoryDbService, RequestInfo} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../models";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const users: User[] = [
      {
        id: '1',
        name: 'John',
        surname: 'Doe',
        avatar: '',
        password: '123456',
        email: 'john@doe.com',
        phone: '071234',
        token: '12345JD',
      }
    ];

    const products: Product[] = [
      {
        id: '1',
        name: 'Backpack',
        price: 50,
        quantity: 5,
        img: 'assets/images/products/amcrest-backpack.webp'
      },
      {
        id: '2',
        name: 'Smartphone',
        price: 250,
        quantity: 1,
        img: 'assets/images/products/smartphone.webp'
      },
      {
        id: '3',
        name: 'Smart watch',
        price: 100,
        quantity: 3,
        img: 'assets/images/products/smartwatch.webp'
      },
    ];

    return {
      users: users.map(user => ({
        ...user,
        avatar: `https://picsum.photos/seed/user-${user.id}/200/300`
      })),
      products
    }
  }
}
