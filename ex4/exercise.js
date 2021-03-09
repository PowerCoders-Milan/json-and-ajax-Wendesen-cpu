fetch('https://jsonplaceholder.typicode.com/todos/12')
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'yes',
    body: 'restaurant',
    userId: 13,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  

  fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PUT',
  body: JSON.stringify({
    title: 'book',
    body: 'wendesen',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



  fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',
   
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

