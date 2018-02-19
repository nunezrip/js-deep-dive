// Challenges Set C
// Challenge 8
// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.


function saveOutput(callback, str) {
  const obj = {};

  function passedArgument(arg) {
    if (str) {
      obj[arg] = callback(arg, str);
      return obj;
    }
    return callback(arg, str);
  }
  return passedArgument;
};

const passingFunction = (arg, str) => {
  console.log('I\'m the passingFunction!!!!');
  if (str) {
    return `is the value of "${arg}"`;
  } else {
    return arg;
  }
};

const allocator1 = saveOutput(passingFunction);
console.log(allocator1('Hello there!'));

const allocator2 = saveOutput(passingFunction, 'psw');
console.log(allocator2('Hello, are you there?'));
console.log(allocator2('Hi'));
console.log(allocator2('Hello'));
console.log(allocator2('Hola'));



// Challenge 9
// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

function cycleIterator(arr) {
  let start = 0;
  let end = arr.length;
  let current = '';
  const func = () => {
    if (start < end) {
      current = arr[start];
      start++;
      return current;
    }
    start = 0;
    current = arr[start];
    start++;
    return current;
  };
  return func;
};

const allocator = cycleIterator(['cats', 'dogs', 'rabbits', 'horses']);
// console.log(allocator());
// console.log(allocator());
setTimeout(function () {
  console.log(allocator());
}, 1000);
setTimeout(function () {
  console.log(allocator());
}, 2000);

setTimeout(function () {
  console.log(allocator());
}, 3000);

setTimeout(function () {
  console.log(allocator());
}, 4000);

// Challenge 10
// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

function defineFirstArg(callback, arg1) {
  var func1 = (arg2) => {
    // console.log('I am func1')
    return callback(arg1, arg2);
  };
  return func1;
}

let func2 = (arg1, arg2) => {
  // console.log('I am func2')
  return `I am the first argument: "${arg1}" and this is the second argument: "${arg2}"`;
}

const allocator = defineFirstArg(func2, 'Saludos!');
console.log(allocator('Greetings!'));


// Challenge 11
// Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function.

function dateStamp(callback) {
  const obj = {};
  var func1 = (arg) => {
    // console.log('I am func1')
    const timestamp = new Date().toLocaleString();
    obj['date'] = timestamp;
    obj['result'] = callback(arg);
    return obj;
  };
  return func1;

};

let func2 = dateStamp(arg => arg);
// console.log('I am func2')
console.log(func2('This is a time stamp!'));

// Challenge 12
// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

const censor = () => {
  let s1 = '';
  let s2 = '';
  const func = (str1, str2) => {
    // console.log('I am func');
    if (str1 && str2) {
      s1 = str1;
      s2 = str2;
      return str1 + ' ' + str2;
    }
    if (!str2) {
      s1 = s2;
      return str1;
    }
  };
  return func;
};

const allocator = censor();
console.log(allocator('United', 'States'));
console.log(allocator('Europe'));