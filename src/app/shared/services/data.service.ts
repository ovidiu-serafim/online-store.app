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
        caption: "This is a caption for Backpack",
        description: "Here is the full description of the Backpack. Here is the full description of the product. Here is the full description of the product. Here is the full description of the product.",
        size: 'L',
        category: 'Backpacks',
        quantity: 5,
        img: 'assets/images/products/amcrest-backpack.webp'
      },
      {
        id: '2',
        name: 'Smartphone',
        price: 250,
        caption: "This is a caption for Smartphone",
        description: "Here is the full description of the Smartphone. Here is the full description of the product. Here is the full description of the product. Here is the full description of the product.",
        size: 'S',
        category: 'Phones',
        quantity: 1,
        img: 'assets/images/products/smartphone.webp'
      },
      {
        id: '3',
        name: 'Smart watch',
        price: 100,
        caption: "This is a caption for Smart watch",
        description: "Here is the full description of the Smart watch. Here is the full description of the product. Here is the full description of the product. Here is the full description of the product.",
        size: 'M',
        category: 'Accessories',
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
