const express = require('express');
const router = express.Router();

import catering from '../model/catering.model';

router.post('/', async(req, res)=>{
    const body = req.body;
    try{
        const cateringDB = await catering.create(body);
        res.status(200).json(cateringDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}); 

router.get('/', async(req, res) =>{
    try{
         const cateringDB = await catering.find();
         res.json(cateringDB);
     }
     catch (error) {
         return res.status(400).json({
             mensaje: 'Ocurrió un error',
             error
         });
     }
 });

 router.get('/:id', async(req, res) =>{
    const _id= req.params.id;
    try{
         const cateringDB = await catering.findOne({_id});
         res.json(cateringDB);
     }
     catch (error) {
         return res.status(400).json({
             mensaje: 'Ocurrió un error',
             error
         });
     }
 });

router.delete('/:id', async(req, res) =>{
    const _id= req.params.id;
    try{
         const cateringDB = await catering.findByIdAndDelete({_id});
         if(!cateringDB){
            return res.status(400).json({
                mensaje:'No se encontró el id solicitado',
                error
            }) 
         }
         res.json(cateringDB);
     }
     catch (error) {
         return res.status(400).json({
             mensaje: 'Ocurrió un error',
             error
         });
     }
 });

 router.patch('/:id', async(req, res)=>{
    const { id } = req.params;
    const body = req.body;
    try{
        const cateringDB = await catering.updateOne(body);
        res.status(200).json(cateringDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
});

module.exports = router;
