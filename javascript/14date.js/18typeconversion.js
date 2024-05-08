let str = "123";
let num = parseInt(str);
console.log(typeof num);


let num2 = 456;
let str2 = num2.toString();
console.log(typeof str2);


let str3 = "hello";
let arr = str3.split("");
console.log(arr);


let arr2 = ["h", "e", "l", "l", "o"];
let str4 = arr2.join("");
console.log(str4); 


let str5 = "true";
let bool = Boolean(str5);
console.log(typeof bool); 

//type coersion
let x = 10;
let y = "5";

let result = x + y; 
console.log(result);
