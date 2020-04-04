'use.strict';

// Zadanie 1

const hello = 'Hello';

const world = 'Word!';

const helloWorld = `${hello} ${world}`;

console.log(helloWorld);


// Zadanie 2

multiply = (a, b = 1) => {
 	return a * b;
}

let result = multiply(3);

console.log(result);

// Zadanie 3

function average(...args) {
	var length = args.length;
	var sum = 0;
  
	for(var i=0; i<length; i++) {
		sum = sum + args[i];
	} 
	return sum/length;
}

console.log(average(1,2,3,4,5));

// Zadanie 4 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// Zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [ , ,firstname, ,lastname] = data;

console.log(firstname, lastname);














