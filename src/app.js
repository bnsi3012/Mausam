const express = require('express');
const hbs= require('hbs');
const path= require('path');
const app = express();
const port = process.env.PORT || 8000;

// public static path
const static_path=path.join(__dirname,'../public');
const views_path= path.join(__dirname,'../templates/views');
const register_Partial=path.join(__dirname,'../templates/partials');


// console.log(public_staic_path);

app.set('view engine', 'hbs');
app.set('views',views_path);
hbs.registerPartials(register_Partial);


app.use(express.static(static_path));

app.get('',(req , res)=>{
      res.render('index.hbs')
      // agr hum hbs nhi bhi lgayenge to vo by default views folder me jake index.hbs hi render karke show karega

})

app.get('/weather',(req , res)=>{
    res.render('weather.hbs')
})

app.get('/about',(req , res)=>{
    res.render('about.hbs')
})

app.get('*', (req , res)=>{
    res.render('error.hbs')
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})
