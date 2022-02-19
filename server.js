const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// app.use(function(req, res, next) {
//     console.log("Inside middleware");
//     const allowedOrigin = ['http://localhost:3000'];
//     const origin = req.headers.origin;
//     if(allowedOrigin.includes(origin)){
//         console.log("Allow the origin.");
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     return next();
// })

app.use('/login',(req, res) => {
    res.send({
        token: 'himanshu'
    })
})


app.listen(8080,()=>{
    console.log("Server running on port 8080");
})