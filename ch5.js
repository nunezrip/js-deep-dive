// Challenge 5
// You are given a variable called isDivisibleBy4.  Use an if statement to determine if its value is divisible by 4.  Log true to the console if it is, and false to the console if it isn't.

let isDivisibleBy4 = 24;

function newNum(num) {
	if (num % isDivisibleBy4 === 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}

newNum(5);
