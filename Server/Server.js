const express = require('express');
const app = express();

// Port Environment variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log('Server is listening on port', PORT)
})

app.get('*', (req, res)=>{
    res.send('Server is running...')
})