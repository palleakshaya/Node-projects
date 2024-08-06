const sum = (a, b) => +a + +b; // to convert it to number
//console.log(sum(4, 5));

console.log(process.argv); //process.argv always gives string only
const [, , a, b] = process.argv;
console.log(sum(a, b));
