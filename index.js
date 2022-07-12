const express = require('express');
const cors = require('./middleware/cors');
const logger = require('./middleware/logger');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use([logger, cors]);

app.get('/', (req, res)=>{

    res.status(200).json('Hello world');

});

app.post('/sayMyName', (req, res)=>{

    const reqBody = req.body;

    if( !reqBody.name === 'Heisenberg' ){
        res.status(400).json({message: "Incorrect Answer"});
    }else{
        res.status(200).json({name: "Heisenberg"});
    }

});

app.post('/createUser', (req, res) => {

    const reqBody = req.body;

    if( !reqBody.name ){
        res.status(400).json({message: "Not suitable body"});
    }else{
        res.status(200).json({message: "Works good"});
    }

});

app.post('/doAuthentication', (req, res)=>{

    const headers = req.headers;
    const token = { token: `${JSON.stringify(Math.floor(Math.random()*10000))}?ASDa/sdadswdQDQ` }

    if(!headers.auth){
        res.status(401).json({message: "Not authorized"});
    }else{
        res.status(200).json(token);
    }

});

app.listen('8080', ()=> {
    console.log('Arriba!');
})