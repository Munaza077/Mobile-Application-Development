//charAt(index)//
let str = "Hello World";
console.log(str.charAt(0));

//concat//
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2));

//includes(searchString, position)//
let str = "Hello World";
console.log(str.includes("Hello"));
console.log(str.includes("World", 7));

//indexOf(searchValue, fromIndex)//
let str = "Hello World";
console.log(str.indexOf("l"));

//lastIndexOf(searchValue, fromIndex)//
let str = "Hello World";
console.log(str.lastIndexOf("l")); 
console.log(str.lastIndexOf("o", 5));

//match//
let str = "The quick brown fox jumps over the lazy dog";
console.log(str.match(/e/g)); // Output: ["e", "e", "e"]

//replace//
let str = "Hello World";
console.log(str.replace("World", "Universe")); 

//slice(startIndex, endIndex)//
let str = "Hello World";
console.log(str.slice(0, 5)); 
console.log(str.slice(-5));

//split//
let str = "Hello World";
console.log(str.split(" ")); 

//substr//
let str = "Hello World";
console.log(str.substr(6, 5)); 

//toLowerCase//

let str = "Hello World";
console.log(str.toLowerCase()); 

//toUpperCase()//
let str = "Hello World";
console.log(str.toUpperCase()); 

//string length//
let text = "HELLOWORLD";
let length = text.length;

//String as object//
let x = "Amna";
let y = new String("Amna");




