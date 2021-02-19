const productsDB = require('../data/productsDB');
module.exports = {
    detalle :(req,res) =>{
        /*llamamos a nuestra base de datos y utilizamos el metodo find para encontrar lo que buscamos */
        let producto = productsDB.find(producto => {
            /* retornamos los datos mientras coinsidan */
            return producto.id === Number(req.params.id) && producto.category === req.params.category
        })
        res.render('detalleProducto', {
            title: 'Detalle de producto',
            producto
        })
    }
}