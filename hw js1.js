//TASK 1

function convert(amount){
	const change = 8*amount
	return `${change.toFixed(2)} UAH needed for exchange` 
}


//TASK 2

function reverse(str){
	const reverseStr = str.split('').reverse()
	return `${reverseStr} reversed string`
}


//TASK 3

function printStairs(n){
	let stair = '';
	for(let i=0; i<n; i++){
	console.log(stair+='#');
} 
}



//TASK 4

function sunRange(start, end) {

	let sum = 0;

	for (i = start; i <= end; i++) {
			sum += i;
	}

	return sum;
}


//TASK5

function min(a,b,c){
	if(a<=b && a<=c){
			return a;
			}else if(b<=a && b<=c){
	return b;
	}else { 
		return c;
}
}


//TASK 6


//TASK 7

function firstAndLastToUpper(str){
	return str[0].toUpperCase() + str.toLowerCase().slice(1) + str.toUpperCase().slice(-1);
}


//TASK 8

function cursorCheck(str){

    let strCheck = str.toLowerCase();

	if(~strCheck.indexOf('ironman') ||

	~strCheck.indexOf('cursor') || 

	~strCheck.indexOf('ostap')){
    
		return true;

} 
		return false;
}