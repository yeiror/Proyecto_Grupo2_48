const express = require('express');

const CateringService = require('./../services/catering.services.js');

const router = express.Router();
const service = new CateringService;

router.get('/', (req, res)=>{    
    const comida = service.generate();
    res.json(comida);   
});


router.get('/:id',(req,res)=>{
    const limit = 100;
    const productos = [];
    const { id } = req.params;
    for (i=0;i<100;i++){
        productos.push(id[i]);
    }
    res.json(productos)
});

router.post('/',(req, res)=>{
        const body = req.body;
        res.status(201).json({
            message:"Creado exitosamente",
            data: body
        });
    });

    router.patch('/:id', (req, res)=>{
        const { id } = req.params
        const body = req.body;
        res.json({
            message: 'partially updated',
            data: body,
            id 
        });
    });

    router.delete('/:id', (req, res)=>{
        const { id } = req.params
        res.json({
            message: 'partially updated',
            id 
        });
    });

module.exports = router;
