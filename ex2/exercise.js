fetch('https://jsonplaceholder.typicode.com/todos/13')
  .then(response => response.json())
  .then(json => console.log(json))
  

