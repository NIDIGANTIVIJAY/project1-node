const express=require('express')

const port =process.env.PORT||3000
const path=require('path')

const paths=path.join(__dirname,'../page')
const pathcss=path.join(__dirname,'../public/css')

const app=express()
app.use(express.static(paths))



app.get('/',(req,res)=>{
    res.send('<h1>Index</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})
app.get('/help',(req,res)=>{
    res.send('<h1>Help</h1>')
})
app.get('/products',(req,res)=>{
    res.send('<h1>Products</h1>')
})
app.listen(port,()=>{
    console.log('server is started')
})