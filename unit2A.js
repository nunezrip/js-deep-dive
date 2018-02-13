// // Challenges Set A

// // Challenge 1
// // Create a function called subtractTwo that will accept a number, and return the number minus 2.

// // Then create a function called map that takes two inputs:

// // an array of numbers (a list of numbers)
// // a 'callback' function - this function is applied to each element of the array (inside of the function 'map')

// // Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. please do not use the native map or forEach method.

// map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
// multiplyByTwo(1); //-> 2
// multiplyByTwo(2); //-> 4

const array = [2, 4, 8, 9, 12];

// callback function

const subtractTwo = num => {
	return num - 2;
};

// HOF

const map = (arr, callback) => {
	const output = [];
	for (let i = 0; i < arr.length; i++) {
		const newNum = callback(arr[i]);
		output.push(newNum);
	}
	return output;
};

console.log(map(array, subtractTwo));

// Challenge 2

// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// var alphabet = '';
// var letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);   //prints 'abcd'

const array = [1, 2, 3, 4, 5];

const forEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
};
console.log(
	forEach(array, function(elem) {
		console.log(elem);
	}),
);

// Challenge 3
// In the first part of the extension, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

const array1 = [2, 4, 8, 9, 12];

const mapWith = (arr, callback) => {
	const output = [];
	forEach(arr, callback, (newArr = output));
	return output;
};
console.log(
	mapWith(array, item => {
		newArr.push(item + 100);
	}),
);
