const express=require('express');
const apiRouter=require('./api-routes');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');


// this is your application 
const app =express();

// to handel post reqiuest
app.use(bodyParser.urlencoded({
    extended:true
}))


// 
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true});

let db=mongoose.connection;

if(!db)
{
    console.log('error you can,t connect to db')
}
else
{
    console.log('connect sucssesfuly to data users')
}

let port = process.env.PORT||5000 ;

app.use('/',(req,res)=>{
   res.send('welcome to home page')
});


app.use('/api',apiRouter);








app.listen(port,()=>{console.log(`listen on port ${port}`)})
