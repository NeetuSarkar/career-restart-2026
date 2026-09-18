const users = [
  {
    id: 1,
    name: "Rahul",
    age: 22,
    role: "Developer",
    active: true,
  },
  {
    id: 2,
    name: "Amit",
    age: 17,
    role: "Student",
    active: false,
  },
  {
    id: 3,
    name: "John",
    age: 25,
    role: "Designer",
    active: true,
  },
  {
    id: 4,
    name: "Sam",
    age: 15,
    role: "Student",
    active: true,
  },
  {
    id: 5,
    name: "David",
    age: 30,
    role: "Developer",
    active: false,
  },
];


const names = users.map((user)=> user.name)
console.log(names)

const activeUsers = users.filter((user)=> user.active)

console.log(activeUsers)


const user3 = users.find((user) => user.id === 3)

console.log(user3)

const newUser = {
  id: 6,
  name: "Neetu",
  age: 24,
  role: "Developer",
  active: true,
};

const updatedUsers = [...users, newUser];

console.log(updatedUsers)


const totalAge = users.reduce((acc,user) => acc+=user.age,0);
console.log(totalAge)

//Names of active users who are 18 or older

const adultUsers = users.filter((user)=> user.age >= 18).map((user)=> user.name);
console.log(adultUsers)