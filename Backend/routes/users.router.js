const express = require('express');
const router = express.Router();

import user from '../model/user.model';

router.post('/', async(req, res)=>{
    const body = req.body;
    try{
        const userDB = await user.create(body);
        res.status(200).json(userDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}); 

router.get('/', async(req, res) =>{
    try{
         const userDB = await user.find();
         res.json(userDB);
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
         const userDB = await user.findOne({_id});
         res.json(userDB);
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
         const userDB = await user.findByIdAndDelete({_id});
         if(!userDB){
            return res.status(400).json({
                mensaje:'No se encontró el id solicitado',
                error
            }) 
         }
         res.json(userDB);
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
        const userDB = await user.updateOne(body);
        res.status(200).json(userDB);
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
});

module.exports = router;
