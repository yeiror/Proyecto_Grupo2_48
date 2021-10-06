const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res)=>{
    
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push({
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price(), 10),
        imagen: faker.image.imageUrl(),
        });
    }
    res.json(products);
});

router.get('/filter',(req,res)=>{
    res.send("Yo soy un filterrr");
});

/*router.get('/:name',(req,res)=>{
    const { id } = req.params;
    res.json({
        nombre:"Comida 1",
        precio:300
    });
});*/

    router.post('/',(req, res)=>{
        const body = req.body;
        res.json({
            message:"Creado exitosamente",
            data: body
        });
    })

module.exports = router;
