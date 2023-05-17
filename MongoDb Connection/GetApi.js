const express = require('express')
const app = express()
const mongodbss = require('mongodb')
const dbconnect = require('./mongodb')
const main = require('./index')
//Instead we can use body-parser
app.use(express.json())

app.get('/', async (req, res) => {
    let data = await dbconnect()
    let result = await data.find().toArray()

    res.status(200).json({ result })
    // let result = main()
    // res.status(200).json(result)


})

app.post('/', async (req, res) => {
    let data = await dbconnect()
    let result = data.insertOne(req.body)
    // let results = await result.find().toArray()

    // res.status(200).json({ result })
    res.send(result)

})

app.put('/', async (req, res) => {
    let data = await dbconnect()
    let result =  data.updateOne( 
        {name: "galaxy ultra"},
        {$set:req.body}
    )
    res.status(200).json(result)
})

app.delete('/:id',async(req,res)=>{
    let data = await dbconnect()
    // let result = data.deleteOne(req.body)
    let result = data.deleteOne({_id: new mongodbss.ObjectId(req.params)})

    res.send(result)
})


app.listen(5000, () => {
    console.log("server is listening to a port....")
})