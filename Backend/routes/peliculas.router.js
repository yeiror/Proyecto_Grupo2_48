const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.json({
        nombre:"El renacido",
        duracion: "2 horas"
    });
});
module.exports = router;