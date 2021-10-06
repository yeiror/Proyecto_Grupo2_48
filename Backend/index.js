const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

//Middleware
app.use(express.json())

app.get("/", (req, res)=> {
    res.send("HEllooo to my new server");

});
routerApi(app);

app.listen(port,()=> {
    console.log(`App ejemplo corriendo por el puerto: ${port}`)
});