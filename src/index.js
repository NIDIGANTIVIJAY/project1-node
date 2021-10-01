const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
//vijayS
const paths=path.join(__dirname,'../public')
 console.log(paths)
 app.use(express.static(paths))


 const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partial')

 
 //const pathsv=path.join(__dirname,'../public')
//seting the paths in express 
 app.set('view engine','hbs')
 app.set('views', viewsPath)
 hbs.registerPartials(partialsPath)

// routing the pages
app.get('/',(req,res)=>{
    res.render('index',{
        title:"Medi_plus"
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:"help"
    })
    
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"about"
    })

})
app.get('/products',(req,res)=>{
    res.render('products',{
        title:"products"
    })
})
app.listen(3000,()=>{
    console.log("server is on port 3000")
})