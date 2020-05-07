
const url = 'https://randomuser.me/api/?page=3&results=10&seed=abc';
fetch(url)
    .then(data => data.json())
    .then(res => {
      // this is the response that is coming in
        console.log(res);
        // since the respoonse is an object i'll use dot notation to access the results inside the response 
        console.log(res.results);
        // next I'll loop the results and get the value (val)
        res.results.map((val, i) => {
          // then append to body tage that has the id of user-list by useing ' += '
            document.getElementById('user-list').innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src=${val.picture.large} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${val.email}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            `;
        })
    })
    .catch(error => {
        console.log(error);
    })
