const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req , res) =>{
    res.send('Hello Worl')
});

app.all('/secret' , (req , res) => {
    res.send("Hello there is a secret in all plans of God , just pray an he will tell you everything ")
})

app.listen(port , ()=>{
    console.log("The port is listening ")
})