const express = require('express');
const app = express();
const mongoose = require('mongoose');

const DB = 'mongodb+srv://neelam:neelam@cluster0.jvz8d.mongodb.net/merndatabase1?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection suuceesfullll.`);
}).catch((err)=> console.log(`no connection`));

const middleware = (req, res,next)=>{
    console.log('hello from middleware');
    next();
}

app.get('/',(req ,res)=>{
    res.send("Helloooo home page");
});
app.get('/about',middleware,(req ,res)=>{
    console.log('helloo from about')
    res.send("Helloooo about page");
});
app.get('/contact',(req ,res)=>{
    res.send("Helloooo contact page");
});
app.get('/signin',(req ,res)=>{
    res.send("Helloooo signin page");
});


app.listen(8000, ()=>{
    console.log('server port no 8000');
});
