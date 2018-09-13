//1part
const a=27;

const b=78;
const c=5;

console.log(a + b);
console.log((a + b)/c);
console.log((b + c)*a);
console.log((a+b) + " is divisble by 5");

//2part
const requiredAge = 18;
const testTakerAge = 17;
const maxPoint = 100;
const failPoint = 40;
const f = "you failed test";
const inputedPoint = 83;

 if (testTakerAge >= requiredAge){
 	console.log( "You have a right to take test")
 } else  {
 	console.log("You can not take the test")
}

if (inputedPoint === maxPoint){
	console.log("Your mark is excellent and you have the right to drive")
}else if(inputedPoint >= failPoint &&  inputedPoint <= 100){
	console.log("Actually, you could do it better but still you passed the test")
}else{
	console.log(f)
}


