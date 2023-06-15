const express = require('express');
const router = express.Router();

router.use((req , res , next) => {
    console.log(`Time : ${Date.now()}`);
    next();
})

router.get('/' , (req , res) => {
    console.log("Second")
    res.send("Hello Wiki")
});

router.get('/about' , (req , res ) => {
    console.log("Third")
    res.send("Hello Daniel Safari")
});

module.exports = router;