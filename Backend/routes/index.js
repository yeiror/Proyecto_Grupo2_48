const express = require('express');

const cateringRouter = require('./catering.router');
const userRouter = require('./users.router');
const peliculasRouter = require('./peliculas.router');
const reservaRouter = require('./reservas.router'); 

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router)
        router.use('/catering', cateringRouter);
        router.use('/users', userRouter);
        router.use('/peliculas', peliculasRouter);
        router.use('/reservas', reservaRouter);
}

module.exports = routerApi;