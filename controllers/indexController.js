const productsDB = require('../data/productsDB');
module.exports = {
    index:(req,res)=>{ /*metodo index */
        let inSale = productsDB.filter(producto =>{ /*aqui filtramos los productos y solo selecionamos los de category inSale */
            return producto.category =='in-sale'
        })
        let visited = productsDB.filter(producto =>{ /*aqui filtramos los de category visited */
            return producto.category =='visited'
        })
        res.render('index', {/*renderizamos la vista index */
            title: 'home-page',
            productsInSale: inSale,   /*aqui le ubicamos un tituloy dos bloques para poder mostras la ultima visitadass y ofertas */
            productsVisited: visited
        }); 
    }                                                        /* */
}