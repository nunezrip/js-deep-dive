// Challenge 11
// You are given an empty array called fillMe.  Using a for loop, fill the array with numbers from 0 to 10.

let fillMe = [];

function fillArray(arr) {
	for (let i = 0; i < 11; i++) {
		arr.push(i);
	}
	return arr;
}

console.log(fillArray(fillMe));
