const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Cameron:1234@cluster0.fr2yv.mongodb.net/project-0?retryWrites=true&w=majority', 
{ useNewUrlParser: true}).then(()=>console.log('DB connected')).catch(err => console.error(err));

app.get('/',(req, res)=>{
    res.send('hello world')
});




app.listen(5000);