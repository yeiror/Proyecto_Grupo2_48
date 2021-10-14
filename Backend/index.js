const express = require('express');
const routerApi = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;




//Middleware
app.use(cors());    
app.use(morgan('tiny'));
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("HEllooo to my new server");

});
routerApi(app);

app.listen(port,()=> {
    console.log(`App ejemplo corriendo por el puerto: ${port}`)
});