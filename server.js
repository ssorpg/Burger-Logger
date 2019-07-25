// EXPRESS
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// HANDLEBARS
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



// PORT
const PORT = process.env.PORT || 8080;



// ROUTING
const routes = require('./controllers/burger_controllers');

app.use(routes);



// SERVER INIT
app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});