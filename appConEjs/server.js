const express = require('express');
const app = express();
const router = require('./router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('views', './ejs_views');
app.set('view engine', 'ejs');

app.use(('/'), router);


app.listen(8080, () => {
    console.log('Escuchando puerto 8080!');
});