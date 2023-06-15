const express = require('express');
const router = express.Router();

router.get('/' , (req , res) => {
    res.send("Hello Wiki")
});

router.get('/about' , (req , req ) => {
    res.send("Hello Daniel Safari")
});

module.exports = router;