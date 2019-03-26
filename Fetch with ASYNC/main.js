const http = new PeachHTTP;

const userData = {
   name: 'John',
   username: 'john123',
   email: 'j@mail.com'
}

http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
   .then(response => console.log(response))
   .catch(err => console.log(err));

http.post('https://jsonplaceholder.typicode.com/users', userData)
   .then(data => console.log(data))
   .catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/5', userData)
   .then(data => console.log(data))
   .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/5')
   .then(data => console.log(data))
   .catch(err => console.log(err));

   



