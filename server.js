const express = require('express'); // 1
const app = express();  // 2

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
}); // 3


app.get('/drinks', (req, res) => {
    res.send(drinks);
}); // 6

app.listen(3000, () => {
    console.log('App is listening on port 3000');
}); // 4



// 5
// how to export and require modules with node js; see drinks.js for steps 1 & 3

const drinks = require('./drinks'); // step 2: require() drinks.js file 

console.log(drinks); // step 4: log drinks to the console


