const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const router = require('./router');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'index.hbs',
    })
  );
  
app.set('views', './hbs_views');
app.set('view engine', 'hbs');

app.use('/', router);

app.listen(8080, () => {
    console.log('Escuchando puerto 8080!');
})