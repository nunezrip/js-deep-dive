// Challenges Set A
// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".

var function1 = createFunction();
// now we'll call the function we just created
function1(); //should console.log('hello');

function createFunction() {
	var str = 'hello';
	function printMsg() {
		console.log(str);
	}
	return printMsg;
}

var function1 = createFunction();
function1();

// ////////////////////////////
// Randys Solution
// One way - However, it should have a closure with the return vice the console.log

function createFunction() {
	return function() {
		// console.log('hello');
		return 'Hello';
	};
}

var function1 = createFunction();
var word = function1();
// console.log(function1());
console.log(word);

// ////////////////////////////

//  When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

var printSample = createFunctionPrinter('sample');
var printHello = createFunctionPrinter('hello');
// now we'll call the functions we just created printSample();
// should console.log('sample'); printHello();
// should console.log('hello');

function createFunctionPrinter(msg) {
	function printMsg() {
		console.log(msg);
	}
	return printMsg;
}

var printSample = createFunctionPrinter('sample');
var printHello = createFunctionPrinter('hello');

printHello();
printSample();

// /////////////////////////////////////
// Randy's solution
// This has a closure by looking in the lexical scope for 'sample' as input

function createFunctionPrinter(input) {
	return function() {
		// console.log(input);
		return input;
	};
}

var printSample = createFunctionPrinter('sample');
console.log(printSample());

// ////////////////////////////////////

// Challenge 3
// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing.

function outer() {
	var counter = 0; // this variable is outside incrementCounter's scope
	function incrementCounter() {
		counter++;
		console.log('counter', counter);
	}
	return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
// return counter 1
willCounter();
// return counter 2
willCounter();
// return counter 3

jasCounter();
// return counter 1
willCounter();
// return counter 4

jasCounter();
// return counter2

// ANSWER:
// counter 1
// counter 2
// counter 3
// counter 1
// counter 4
// counter 2
