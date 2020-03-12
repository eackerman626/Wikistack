const express = require('express'); // first need to npm install express
const app = express(); // initialize express
const morgan = require('morgan'); // first need to npm install morgan

app.use(morgan('dev')); // use morgan with dev setting??
app.use(express.urlencoded({extended: false})); // translates funny url formatting into standard utf-8 characters
app.use(express.static(__dirname + '/public')); // allows access to the /<currentdirectory>/public folder (can hold .css, logo images, etc)

app.get('/', (req, res, next) => {
    res.send('Hello World!');
})

const PORT = 8080; // defines a port, arbitrary number, go to localhost:8080 in browser

// makes your port listen to the res.send defined above, will log message to terminal 
app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
})