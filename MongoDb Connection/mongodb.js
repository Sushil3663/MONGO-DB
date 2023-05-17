const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'E-Com'
const result = new MongoClient(url)

const dbconnect = async()=>{
    let client = await result.connect();
    let db= client.db(database)
    return db.collection('Product')


}

module.exports = dbconnect;