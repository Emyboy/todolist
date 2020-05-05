// Get the input box with value (using .value)
// if you console.log inputBox you'll see the HTML your getting
const inputBox = document.getElementById('text-input');

// get the H1 tag
const h1 = document.getElementById('text');

// listen for input change event coming from the inputBox
inputBox.addEventListener('input', e => {
    // store the value coming from the input in a variable named value or anyting
    const value = e.target.value;
    // set the h1 HTML to be the incoming value
    h1.innerHTML = value;
});
