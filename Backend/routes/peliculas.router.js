const express = require('express');
const router = express.Router();

import pelicula from '../model/pelicula.model';

router.post('/', async(req, res)=>{
    const body = req.body;
    try{
        const peliDB = await pelicula.create(body);
        res.status(200).json(peliDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}); 

router.get('/', async(req, res) =>{
   try{
        const peliculaDb = await pelicula.find();
        res.json(peliculaDb);
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
         const peliculaDb = await pelicula.findOne({_id});
         res.json(peliculaDb);
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
         const peliculaDb = await pelicula.findByIdAndDelete({_id});
         if(!peliculaDb){
            return res.status(400).json({
                mensaje:'No se encontró el id solicitado',
                error
            }) 
         }
         res.json(peliculaDb);
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
        const peliDB = await pelicula.updateOne(body);
        res.status(200).json(peliDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
});

module.exports = router;