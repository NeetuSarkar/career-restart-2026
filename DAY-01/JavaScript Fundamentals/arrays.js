const numbers = [12, 5, 8, 20, 3, 15, 7];

function large(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }

  return max;
}

function small(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }

  return min;
}

function sum(numbers) {
  let sum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

function avg(numbers) {
  let sum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum / numbers.length;
}

function even(numbers) {
 

  for (let i = 0; i < numbers.length; i++) {
   if(numbers[i]%2 === 0) console.log(numbers[i])
  }

}


function greaterthan10(numbers){
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 10) console.log(numbers[i])
  }
}


console.log("largest num:")
console.log(large(numbers));

console.log("smallest num:")
console.log(small(numbers));

console.log("Sum of all numbers:")
console.log(sum(numbers));


console.log("average of all numbers:")
console.log(avg(numbers));


console.log("even numbers:")
even(numbers)

console.log("greater than 10:")
greaterthan10(numbers)