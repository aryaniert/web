const path = require('path');
const hbs =require('hbs');
const express =require('express');
const app = express();
const port =process.env.PORT || 3000;


const newpath = path.join(__dirname,"");
const viewpath = path.join(__dirname,"templets/views");
const temppath = path.join(__dirname,"templets/partials");


app.set('view engine','hbs');
app.set('views',viewpath);
hbs.registerPartials(temppath);

app.use(express.static(newpath));



app.get("/",(req,res)=>{
    res.render('index');

});

app.get("/About",(req,res)=>{
    res.render('About');

});

app.get("/ContactUs",(req,res)=>{
    res.render('ContactUs');

});

app.get("/Student",(req,res)=>{
    res.render('Student');

});

app.get("*",(req,res)=>{
    res.end("404 errror page");

});

app.listen(port,()=>{
    console.log("server on");
});