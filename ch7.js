// Challenge 7
// Use a for loop to initialize a variable addThis to 0, increment addThis by 1 on each run of the code block, and then to repeat the code block as long as addThis is less than 10. In the code block, add the value of addThis to sum. The value of sum should be the sum of the numbers 0 through 9.

let addThis = 0;
let sum = 0;

for (let addThis = 0; addThis < 10; addThis++) {
	sum = sum + addThis;
	console.log(addThis);
}
console.log(sum);
