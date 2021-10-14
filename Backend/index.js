const express = require('express');
const routerApi = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Conexión base de datos 
const mongoose = require('mongoose'); 
const uri = 'mongodb+srv://DevYair:4a7gjdnnrTxc1Woi@cluster0.atb46.mongodb.net/SeptimoArte?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises 
mongoose.connect(uri, options).then( 
/** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
() => { console.log('Conectado a DB') }, 
/** handle initial connection error */ 
err => { console.log(err) });

//Middleware
app.use(cors());    
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get("/", (req, res)=> {
    res.send("HEllooo to my new server");

});
routerApi(app);

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,()=> {
    console.log(`App ejemplo corriendo por el puerto: ${port}`)
});