fetch('https://gorest.co.in/public-api/users')
.then(res => res.json())
.then(data => console.log(data))