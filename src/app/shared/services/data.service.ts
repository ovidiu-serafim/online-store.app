import {InMemoryDbService, RequestInfo} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../models";

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

    return {
      users: users.map(user => ({
        ...user,
        avatar: `https://picsum.photos/seed/user-${user.id}/200/300`
      }))
    }
  }
}
