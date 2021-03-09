var promise1 = new Promise(function(resolve,reject) {
  fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  //.then(data => console.log(data))
});

 

var promise2 = new Promise(function(resolve,reject) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
});
 
var promise3 = new Promise(function(resolve,reject) {
  fetch('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.json())
});

Promise.all([promise1, promise2, promise3])
.then((data) => {console.log(data)});


