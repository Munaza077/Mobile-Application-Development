/*concat*/
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

const combinedArray = arr1.concat(arr2);
console.log(combinedArray); 

/*every*/
const ages = [18, 21, 25, 30];

const isAdult = ages.every(age => age >= 18);
console.log(isAdult);

/*filter*/
const numbers = [1, 2, 3, 4, 5];

const filteredArray = numbers.filter(number => number > 3);
console.log(filteredArray);

/*find*/
const users = [
    { id: 1, name: 'Munaza' },
    { id: 2, name: 'Aimen' },
    { id: 3, name: 'Mahnoor' }
  ];
  
  const user = users.find(user => user.id === 2);
  console.log(user); 
  
  /*push method*/
console.log(str3.push("y"));
console.log(str3);

/*Pop method*/
console.log(str4.pop());
console.log(str4);

/*shift method*/
console.log(array.shift());
console.log(array);

/*unshift method*/
console.log(array.unshift(10));
console.log(array);

  /*find Index*/
  const names = ['Alice', 'Bob', 'Charlie'];

const index = names.findIndex(name => name === 'Bob');
console.log(index); 

/* includes method*/
let equalto=array1.includes(3.89) ;
console.log(equalto);

/*join method*/
let str3=["a","l","i"];
console.log(str3.join(''));

/* reduce method*/
let red=array1.reduce((x,y)=>x+y);
console.log(red);

/*include*/
const number = [1, 2, 3];

const hasTwo = numbers.includes(2);
console.log(hasTwo);

/*join*/
const fruits = ['apple', 'banana', 'cherry'];

const fruitString = fruits.join(', ');
console.log(fruitString); 

/*map*/
const numbers = [1, 2, 3];

const doubledArray = numbers.map(number => number * 2);
console.log(doubledArray); // Output

/* every() method*/
let lessthan5=array1.every(element=>element<5) ;
console.log(lessthan5);

let greaterthan5=array1.every(element=>element>5) ;
console.log(greaterthan5);