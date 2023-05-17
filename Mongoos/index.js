const express = require('express')
const app = express()
require('./config')
const Product = require('./product')
app.use(express.json())

app.post('/create',async(req,res)=>{
    console.log(req.body)
    let data = new Product(req.body)
    let result = await data.save()

    res.send('Done')
})

app.get('/',async(req,res)=>{
    let data = await Product.find(req.body)
    console.log(data)
    res.send(data)
})

app.put('/',async(req,res)=>{
    let data = await Product.updateOne({name:"Samsuns S23"},{$set:req.body})
    console.log(data)
    res.send(data)
})
 
app.delete('/',async(req,res)=>{
    let data = await Product.deleteOne(req.body)
    console.log(data)
    res.send(data)
})

app.listen(5000,()=>{
    console.log('server is listening to a port .....')
})