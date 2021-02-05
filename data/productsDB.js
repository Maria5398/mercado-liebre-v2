const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/productsDataBase.json', 'utf-8')) /*aqui parseamos nuesro json para poder utilizarlo */