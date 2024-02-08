const express = require('express');
const app = express();

app.get('/',(req:any,res:any)=>{
    res.send(true);
})

const arr = [
    {
        "name": "Sahil",
        "Collage": "IIT"
    },
    {
        "name": "Anmol",
        "Collage": "IIT"
    },
    {
        "name": "Wasi",
        "Collage": "IIT"
    },
    {
        "name": "Sam",
        "Collage": "IIT"
    },
]


app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})