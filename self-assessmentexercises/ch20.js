// Challenge 20
// You are given a variable called sumMe that is initialized to an object literal containing several key/value pairs, and a variable called total that is initialized to 0.  Using a for... in loop, iterate through sumMe.  If the value of the property that is being evaluated on the current iteration of the loop is a number, add it to total.

let sumMe = {
	hello: 'there',
	you: 8,
	are: 7,
	almost: '10',
	done: '!',
};

function sumOfObject(obj) {
	let total = 0;
	for (let prop in sumMe) {
		if (typeof sumMe[prop] === 'number') {
			total += sumMe[prop];
		}
	}
	return total;
}

console.log(sumOfObject(sumMe));
