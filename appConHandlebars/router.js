const express = require('express');
const router = express.Router();
const contenedor = require('./contenedor');
const listaProductos = new contenedor();

router.get('/productos', (req,res) => {
    const productos = listaProductos.getAll();
    res.render('productos', {productos})
});

router.post('/productos', (req,res) => {
    let producto = {};
    producto.name = req.body.name;
    producto.price = req.body.price;
    producto.thumbnail = req.body.thumbnail;
    const guardar = listaProductos.save(producto);
    res.redirect('/productos')
});

module.exports = router;