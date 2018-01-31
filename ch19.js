// Challenge 19
// You are given an array of integers called possibleIterable.  Using an if statement, loop through the array and log each element to the console only if the number of elements in the array is greater than 3.

let possibleIterable = [4, 3, 9, 6, 23];

function greaterThanThree(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 3) {
			console.log(arr[i]);
		}
	}
}
console.log(greaterThanThree(possibleIterable));
