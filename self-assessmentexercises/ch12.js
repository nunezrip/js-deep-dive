// Challenge 12
// You are given a new empty array called modifiedFillMe.  Using a for loop, loop backwards through the fillMe array from Challenge 11 and populate the new array with the numbers if they are even.

let modifiedFillMe = [];
function evensArray(arr1, arr2) {
	for (let i = arr1.length - 1; i >= 0; i--) {
		if (arr1[i] % 2 === 0) {
			arr2.push(arr1[i]);
		}
	}
	return arr2;
}
console.log(evensArray(modifiedFillMe));
