// const prom = new Promise((res, rej) => {
//   var login = false;
//   if (login) {
//     res("success fully login...");
//   } else {
//     rej("login Fail....");
//   }
// });

// prom
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all([
//   Promise.resolve("Task 1 completed"),
//   Promise.resolve("Task 2 completed"),
//   Promise.reject("Task 3 failed"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve("Task 2 finished"), 500)),
// ]).then((result) => console.log(result));

// Promise.any([
//   Promise.reject("Task 1 failed"),
//   Promise.reject("Task 2 completed"),
//   Promise.resolve("Task 3 completed"),
// ])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// Promise.reject("Task completed")
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Cleanup completed"));

console.log("Task -5");
 async function show() {
  console.log("Task - 1");
  await console.log("Task -2");
   console.log("Task -4");
  console.log("Task -6");
}
show();
console.log("Task -3");
