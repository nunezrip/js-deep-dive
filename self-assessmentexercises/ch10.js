// Challenge 10
// Using increaseByTwo from Challenge 9,  iterate through the modified array and multiply a number by 10 if it is greater than or equal to 5.

let increaseByTwo = [1, 2, 3, 4, 5];
let newArr = [];

function iterateLoop(arr) {
	for (let i = 0; i < increaseByTwo.length; i++) {
		newArr = increaseByTwo[i] + 2;
		console.log(newArr);
	}
	if (newArr[i] >= 5) {
		newArr[i] *= 10;
	}
	console.log(newArr);
}

iterateLoop();
