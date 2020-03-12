const express = require('express'); // first need to npm install express
const app = express(); // initialize express
const morgan = require('morgan'); // first need to npm install morgan
const views = require('./views');
const { db, Page, User } = require('./models');

app.use(morgan('dev')); // use morgan with dev setting?? morgan consoles out GET requests to terminal
app.use(express.urlencoded({ extended: false })); // translates funny url formatting into standard utf-8 characters
app.use(express.static(__dirname + '/public')); // allows access to the /<currentdirectory>/public folder (can hold .css, logo images, etc)

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res, next) => {
  res.send(views.main(''));
});

async function syncAndListen() {
  await db.sync();

  const PORT = 8080; // defines a port, arbitrary number, go to localhost:8080 in browser

  // makes your port start listening, will display the res.send defined above, will log message below to terminal
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

syncAndListen();
