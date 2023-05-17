const dbconnect =require('./mongodb')

const Delete = async() =>{
    let db = await dbconnect()
    const result = await db.deleteOne({name:'Opp0'})


}
Delete()

// const main = async()=>{
//     let item = await dbconnect();
//     item =await item.find().toArray()
//     console.log(item)
// }
// main()
dbconnect().then((data)=>{
    data.find().toArray().then((datas)=>{
        console.log(datas)
    })
})