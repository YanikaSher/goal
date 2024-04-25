interface IUser {
  _id: string;
  userName: string;
  email: string;
  password: string;
  modules: Array<any>;
  age: string;
  gender: 'female' | 'male'
}
