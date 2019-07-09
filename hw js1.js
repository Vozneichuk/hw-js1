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

//TASK 9

function toUppercase(str) {
    let arr = str.split("");
    for(let i = 0; i<arr.length; i++){
      switch(arr[i]){
        case 'q':
          arr[i] = "Q";
          break;
        case 'w':
					arr[i] = "W";
					break;
        case 'e':
					arr[i] = "E";
					break;
        case 'r':
					arr[i] = "R";
					break;
        case 't':
					arr[i] = "T";
					break;
        case 'y':
					arr[i] = "Y";
					break;
        case 'u':
					arr[i] = "U";
					break;
        case 'i':
					arr[i] = "I";
					break;
        case 'o':
					arr[i] = "O";
					break;
        case 'p':
					arr[i] = "P";
					break;
        case 'a':
					arr[i] = "A";
					break;
        case 's':
					arr[i] = "S";
					break;
        case 'd':
					arr[i] = "D";
					break;
        case 'f':
					arr[i] = "F";
					break;
        case 'g':
					arr[i] = "G";
					break;
        case 'h':
					arr[i] = "H";
					break;
        case 'j':
					arr[i] = "J";
					break;
        case 'k':
					arr[i] = "K";
					break;
        case 'l':
					arr[i] = "L";
					break;
        case 'z':
					arr[i] = "Z";
					break;
        case 'x':
					arr[i] = "X";
					break;
        case 'c':
					arr[i] = "C";
					break;
        case 'v':
					arr[i] = "V";
					break;
        case 'b':
					arr[i] = "B";
					break;
        case 'n':
					arr[i] = "N";
					break;
        case 'm':
					arr[i] = "M";
					break;
        default:
					arr[i] = arr[i];
					break;
        }
    }
    return arr.join("");
}


//TASK 11

function fibonacci(n){
	let a = 1, b = 1;
	for(let i = 3; i <= n; i++){
		const c = a + b;
		a = b;
		b = c;
	}
	return b;
}