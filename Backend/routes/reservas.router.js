const express = require('express');
const router = express.Router();

import reserva from '../model/reserva.model';

router.post('/', async(req, res)=>{
    const body = req.body;
    try{
        const reservaDB = await reserva.create(body);
        res.status(200).json(reservaDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}); 

router.get('/', async(req, res) =>{
    try{
         const reservaDB = await reserva.find();
         res.json(reservaDB);
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
         const reservaDB = await reserva.findOne({_id});
         res.json(reservaDB);
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
         const reservaDB = await reserva.findByIdAndDelete({_id});
         if(!reservaDB){
            return res.status(400).json({
                mensaje:'No se encontró el id solicitado',
                error
            }) 
         }
         res.json(reservaDB);
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
        const reservaDB = await reserva.updateOne(body);
        res.status(200).json(reservaDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
});

module.exports = router;