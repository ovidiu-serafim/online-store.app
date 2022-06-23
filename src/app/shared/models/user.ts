export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password?: string;
  phone: string;
  avatar: string;
  token?: string;
}
