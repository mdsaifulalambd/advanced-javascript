
const numbers = [2,3,4,5,6,7,8,9,];
//const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }

// console.log(output);

// function square(element){

//     return element * element;

// }

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

//console.log(numbers);

// numbers.map(function(element){
//     console.log(element * element );
// })

const result = numbers.map(x => x*x);
console.log(result);

