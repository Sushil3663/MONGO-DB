// const {MongoClient} = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'Client'
// let result = new MongoClient(url);

// async function getData(){
//     let client = await result.connect();
//     console.log('Connected successfully to server');

//     let db = client.db(database);
//     let collection = db.collection('name')
//     let response = await collection.find({FName:'Sushil'}).toArray();
//     console.log(response);

// }
// getData();

const dbconnect =require('./mongodb')

// dbconnect().then((data) =>{
//     data.find().toArray().then((item)=>{
//         console.log(item)
//     })

// })

const main = async()=>{
    let item = await dbconnect();
    item =await item.find().toArray()
    console.log(item)
}
main()

module.exports = main