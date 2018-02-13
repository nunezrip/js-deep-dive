// Challenge 13
// You are provided with an object called checkObj.  Using a for... in loop, determine if the object contains the property foundNum.  If it exists, log Found! to the console, otherwise log, Does not exist! to the console.

let checkObj = {
	oddNum: 1,
	evenNum: 2,
	foundNum: 5,
	randomNum: 18,
};

function findProp(obj) {
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if (prop === 'foundNum') return 'Found!';
		}
	}
	return 'Does not exist!';
}
console.log(findProp(checkObj));

// Answer/Note - Use obj.hasOwnProperty so it does not walk down the property chain.
