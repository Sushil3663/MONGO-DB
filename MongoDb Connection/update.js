const dbconnect = require('./mongodb')


const update = async() =>{
    let db = await dbconnect()
    let result = await db.updateOne({name:'poco'},{$set:{name:'PocoM'}})

}
update()

const main = async()=>{
    let item = await dbconnect();
    item =await item.find().toArray()
    console.log(item)
}
main()