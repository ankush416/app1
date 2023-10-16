const express = require('express')
const app=express();
const port = process.env.PORT || 5000
const path = require('path')
const hbs= require('hbs');
const staticPath = path.join(__dirname,'../public')
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')))

app.use(express.static(staticPath)) // I am using join and resolve both but code not run why we use that without this also my program is running iske baad code run nhi kr rha he
app.set('view engine', 'hbs') 
app.set('views', path.join(__dirname,'views'))
 
hbs.registerPartials(path.join(__dirname,'views/partials'))
 //what is registerpartial why we use registerpartials. 
app.get('/',(req,res)=>{ res.render('index')})// why we use render instead of send
app.get('/products',(req,res)=>{ res.render('products')})
app.get('/about',(req,res)=>{ res.render('about')})
app.get('/contact',(req,res)=>{ res.render('contact')})
app.get('/admin',(req,res)=>{ res.render('admin')})

app.listen(port,()=>{console.log("server is run on port " +port)})