function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (arr) {
	let sumx = 0;
	for(i=0;i<arr.length;i++){
		sumx += arr[i];
	}
	return sumx;
}

function multiply (arr) {
	let sumx = 1;
	for(i=0;i<arr.length;i++){
		sumx *= arr[i];
	}
	return sumx;
}

function power(a,b) {
  return a**b;
}

function factorial(x) {
  if(x==0) {
		return 1;
	} else if (x==1) {
		return 1;
	} else {
		return x*factorial(x-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
