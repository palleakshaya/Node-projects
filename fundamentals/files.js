const fs = require("fs");

const quote = "Hi, Agent!!";
fs.writeFile("cool.txt", quote, (err) => {
  console.log("Completed Writing");
});

// Task-1 for creating 10files under backup folder

// for (i = 1; i <= 10; i++) {
//   const quote1 = "Hello";
//   fs.writeFile(`backup/text-${i}.html`, quote1, (err) => {
//     console.log("Completed Writing");
//   });
// }

// Task-2 for creating 30 files when we give the number in terminal

// function fileCreation(num) {
//   const MAX_NO_OF_FILES = 100;
//   if (num > MAX_NO_OF_FILES) {
//     console.log("Exceeded the limit");
//     return;
//   }
//   for (i = 1; i <= num; i++) {
//     const quote1 = "Hello";
//     fs.writeFile(`backup/text-${i}.html`, quote1, (err) => {
//       console.log("Completed Writing");
//     });
//   }
// }
// const [, , n] = process.argv;
// console.log(fileCreation(n));

fs.readFile("./quote.html", "utf-8", (err, data) => {
  console.log(data);
});

fs.appendFile("./quote.html", "Hello, Good Morning", "utf-8", (err, data) => {
  // console.log(data);
});

// const newData = data.replace(/^/, `Hello, Good Morning`);
// fs.appendFile("./quote.html", "Evng", (err, data) => {
//   console.log(data);
// });

// To get the msg in next line
// fs.readFile("./quote.html", "utf-8", (err, data) => {
//   if (err) throw err;
//   const newData = "hi\n" + data;
//   fs.writeFile("./quote.html", newData, function (err) {
//     if (err) throw err;
//     console.log("appended");
//   });
// });

// To delete the file
fs.unlink("./cool.txt", (err) => {
  console.log("Deleted Successfully");
});
