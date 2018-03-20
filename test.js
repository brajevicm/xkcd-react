class User {
  constructor({ user, age }) {
    this.user = user;
    this.age = age;
  }
}

const user = { user: "milos", age: 21 };
const c = new User({ ...user });
console.log(c);
