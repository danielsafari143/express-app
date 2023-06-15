const express = require('express');
const wiki = require('./wiki.js');
const app = express();

const port = 8000;

const middleware = (req ,res , next) => {
    console.log("Hey midleware")
    next()
}

const tryer = (req ,res , next) => {
    console.log(req.pathname)
    next()
}

app.use((err , req , res, next) => {
    console.error(err.stack)
    next();
})

app.use('/wiki' , wiki);

app.get('/', (req , res) =>{
    res.send('Hello Worl')
});

app.get('/user/:userId/book/:bookId' , (req , res , next) => {
    console.log('the response will be sent by the next function ...')
    next()
} , (req , res) => {
    res.send("Hello Guys")
});

app.all('/secret' , (req , res) => {
    res.send("Hello there is a secret in all plans of God , just pray an he will tell you everything ")
})

app.listen(port , ()=>{
    console.log("The port is listening ")
})