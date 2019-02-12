//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function calc(x, y, z) {
  return parseInt(x) + parseInt(y) + parseInt(z)
}
console.log(calc(num10, string8, one))
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function letsGo() {
  let good = []
  for (let i = 20; i < 101; i++) {
    if (i % 3 == 0) {
      console.log(i)
    }
  }
}
letsGo()


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

function avg(numbers) {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  let average = total / numbers.length
  return average
}
console.log(avg(scores))