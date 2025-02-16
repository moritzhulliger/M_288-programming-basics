const num = 0;
const obj = new String("0");
const str = "0";

//strict equality
console.log(num === num);
console.log(obj === obj); 
console.log(str === str); 

console.log(num === obj); 
console.log(num === str); 
console.log(obj === str); 
console.log(null === undefined); 
console.log(obj === null); 
console.log(obj === undefined);

console.log()
//equality
console.log(num == num);
console.log(obj == obj); 
console.log(str == str); 
console.log(num == obj); 
console.log(num == str); 
console.log(obj == str); 
console.log(null == undefined); 

console.log(obj == null); 
console.log(obj == undefined);