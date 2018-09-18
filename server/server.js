const path = require('path');
const pubPath = path.join(__dirname,'../public');
const express = require('express');
const port = process.env.PORT || 3000;
let app = express();
app.use(express.static(pubPath));
// app.get('/',()=>{
//     app.render()
// })

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})