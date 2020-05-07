
const url = 'https://randomuser.me/api/?page=3&results=10&seed=abc';
fetch(url)
    .then(data => data.json())
    .then(res => console.log(res))
    .catch(error => {
        console.log(error);
    })
