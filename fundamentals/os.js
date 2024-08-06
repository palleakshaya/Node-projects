// Inbuilt Packages
const os = require("os");

console.log(Math.round(os.freemem() / 1024 / 1024 / 1024), "GB"); //bytes -> kb -> Mb -> Gb // RAM
console.log(Math.round(os.totalmem() / 1024 / 1024 / 1024), "GB");

// using function
const convertToGb = (num) => `${(num / 1024 ** 3).toFixed(2)} GB`;
console.log(convertToGb(os.freemem));
console.log(convertToGb(os.totalmem));
// convert to %
const occupiedmemory = (free, total) =>
  `${((1 - free / total) * 100).toFixed(2)} %`;
console.log(occupiedmemory(os.freemem, os.totalmem));

const convertToGB = (num) => num / 1024 ** 3;
const roundOff = (num) => num.toFixed(2);
//const toPercent = (free, total) => `${(1 - free / total) * 100} GB`;

// pipe(convertToGB, roundOff, toPercent)(os.freemem);
console.log(roundOff(convertToGB(os.freemem())));

console.log(os.version());
console.log(os.cpus());
