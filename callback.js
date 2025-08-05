function userLoad(name, cb) {
  console.log("Hello Jenil");
  cb(name, 100);
}

function Payment(name, rs) {
  console.log("Paymente Logic Here....");
  setTimeout(() => {
    console.log("You recieve from ", name, " Rs - ", rs);
  }, 2000);
}

userLoad("jenil", Payment);

// var result = fetch("https://jsonplaceholder.typicode.com/posts");
// result.then((res) => res.json()).then((data) => console.log(data));
