// Challenge 4

// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

// var nums = [4, 1, 3];
// var add = function(a, b) {
// 	return a + b;
// };
// reduce(nums, add, 0); //-> 8

function reduce(array, callback, initialValue = 0) {
	var accumulator = initialValue;
	const len = array.length;

	for (let i = 0; i < len; i++) {
		accumulator = callback(accumulator, array[i]);
	}

	return accumulator;
}

//Callback functions:

const add = (a, b) => a + b;
const mult = (a, b) => a * b;

console.log(reduce([4, 1, 3], add, 0));
console.log(reduce([4, 1, 3], mult, 1));

// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.

// Challenge 5

// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

const reducer = (a, b) => {
	const len = b.length;

	for (let i = 0; i < len; i++) {
		if (a[b[i]]) {
			a[b[i]] += 1;
		} else {
			a[b[i]] = 1;
		}
	}
	return a;
};

function intersection(arrayOfArrays) {
	var result = [];
	var dict = {};

	// build our dictionary
	let dict = reduce(arrayOfArrays, reducer, dict);

	// build our results array
	for (let key in dict) {
		if (dict.hasOwnProperty(key)) {
			if (dict[key] == arrayOfArrays.length) {
				result.push(+key);
			}
		}
	}

	return result.length > 0 ? result : null;
}

console.log(intersection([[1, 2, 3], [2, 1, 4], [2, 3, 5]])); // [2]
console.log(intersection([[1, 5, 10, 20, 15], [88, 1, 7, 5], [1, 10, 15, 5, 20]])); // [1, 5]

// Challenge 6

// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.
// BONUS: Use reduce!

var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
var arrayOfArrays = [];

function union(arrayOfArrays) {
	var concat = arr1.concat(arr2, arr3);
	console.log(concat);

	function reduce(array, callback, initialValue = 0) {
		var accumulator = initialValue;
		const len = array.length;

		for (let i = 0; i < len; i++) {
			accumulator = callback(accumulator, array[i]);
		}

		return accumulator;
	}
}

function checkDuplicates(a, b) {
	if (a === b) {
	}
}

// const add = (a, b) => a + b;

// console.log(reduce([4, 1, 3], add, 0));

console.log(union(arrayOfArrays));

// Challenge 7

// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

//  var arrCopy = Object.assign([], arr);

// Challenge 8

// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arraVals, arrCallbacks) {
	var results = {};
	var arrCalls = [];
	const len = arrVals.length;

	for (let i = 0; i < len; i++) {
		result[arraVals[1] = arrCallbacks.map(func => {
return func(arrVals[i]);
		});
	
	}

	return results;
}

console.log(
	multiMap(
		['catfood', 'glue', 'beer'],
		[
			function(str) {
				return str.toUpperCase();
			},

			function(str) {
				return str[0].toUpperCase() + str.slice(1).toLowerCase();
			},
			function(str) {
				return str + str;
			},
		],
	),
);

{
	catfood: ['CATFOOD', 'catfood', 'catfoodcatfood'];
}
