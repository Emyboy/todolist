
const url = 'https://randomuser.me/api/?page=3&results=10&seed=abc';
fetch(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
