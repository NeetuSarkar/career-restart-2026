let numbers = [12, 5, 8, 20, 3, 15, 7];

numbers.forEach((num, index) => {
  console.log(num);
});

const fruits = ["apple", "banana", "mango", "orange"];

fruits.forEach((element, index) => {
  console.log(index, element);
});

let sum = 0;
numbers.forEach((num) => {
  sum += num;
});

console.log(sum);

const num2 = [2, 4, 6, 8];

const num2d = num2.map((num) => num * 2);

console.log(num2d);

const names = ["martin", "john", "alex", "sam"];

const upperNamex = names.map((name) => name.toUpperCase());

console.log(upperNamex);

const users = [
  { name: "Martin", age: 25 },
  { name: "John", age: 30 },
  { name: "Alex", age: 22 },
];

const names2 = users.map((user) => user.name);

console.log(names2);

const products = [
  { name: "Phone", price: 50000 },
  { name: "Laptop", price: 80000 },
  { name: "Watch", price: 10000 },
];

const newProducts = products.map((product) => ({
  ...product,
  discountedPrice: product.price * 0.9,
}));

console.log(newProducts);

// Filter method

const numb = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNum = numb.filter((num) => num % 2 == 0);

console.log(evenNum);

let numbers2 = [10, 55, 23, 90, 67, 42, 100];

let greaterNum = numbers2.filter((num) => num > 50);

console.log(greaterNum);

const users2 = [
  { name: "A", age: 17 },
  { name: "B", age: 25 },
  { name: "C", age: 15 },
  { name: "D", age: 30 },
];

const adults = users2.filter((user) => user.age >= 18);

console.log(adults);

const values = [0, 1, false, 2, "", 3, null, 4, undefined];

const truthyVal = values.filter(Boolean);

console.log(truthyVal);

const num3 = numbers2.find((num) => num > 50);
console.log(num3);

// some and every

const num4 = [1, 3, 5, 8, 9];

let even2 = num4.some((num) => num % 2 === 0);

console.log(even2);

let sum2 = num4.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(sum2);

let max2 = num4.reduce((max, num) => Math.max(max, num));

console.log(max2);

let numbers4 = [1, 2, 2, 3, 1, 2, 4];

let count = numbers4.reduce((obj, num) => {
  obj[num] = (obj[num] || 0) + 1;
  return obj;
},{});

console.log(count);
