
//reduce error
export interface User {
  name: string;
  age: number;
  id: number;
  email: string;
  //date: optionall
  date?: Date;
}
let users: User = {
  name: "",
  age: 1,
  id: 1,
  email: "1@gmail.com",
};

export interface Login {
  Login(): User;
}

let [user1,user2,...restUsers]: User[] = [
  {
    name: "",
    age: 1,
    id: 1,
    email: "1@gmail.com",
  },
  {
    name: "",
    age: 1,
    id: 2,
    email: "1@gmail.com",
  },
  {
    name: "",
    age: 1,
    id: 2,
    email: "1@gmail.com",
  },
  {
    name: "",
    age: 1,
    id: 2,
    email: "1@gmail.com",
  },
];

console.log(users);
console.log(user1);
console.log(user2);
console.log(restUsers);


