// Challenge 9
// You are given an array of 5 numbers called increaseByTwo.  Use a for loop to iterate through the array and increase each number by two.

let increaseByTwo = [1, 2, 3, 4, 5];
let newArr = [];

for (let i = 0; i < increaseByTwo.length; i++) {
	newArr = increaseByTwo[i] + 2;
	console.log(newArr);
}
