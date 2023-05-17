const mongoos = require('mongoose')
// const dbconnect = require('./mond')
//  A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on
// Model also connect mongodb and node js


mongoos.connect('mongodb://127.0.0.1:27017/Client');
const ProductSchema = new mongoos.Schema({ FName: String, LName: String });


// const InsertDB = async () => {

//     let productModel = mongoos.model('name', ProductSchema)
//     let data = new productModel({ FName: 'Sushil', LName: 'Karki' })
//     let result = await data.save();
//     console.log(result)
// }
// InsertDB()


// const UpdateDb = async () => {
//     let productModel = mongoos.model('name', ProductSchema)
//     let data = await productModel.updateOne(
//         {FName:'Raj'},
//         {
//             $set:{FName:'RajKumar',LName:"Rai"}
//         });
//         console.log(data)


// }
// UpdateDb()

const Remove = async()=>{
    // const ProductSchema =await dbconnect()
    let productModel = new mongoos.model('name',ProductSchema)
    let data = await productModel.deleteOne({FName:'RajKumar'})
    console.log(data)

}
Remove();

const Search = async()=>{
    // const ProductSchema =await dbconnect()
    let productModel = new mongoos.model('name',ProductSchema)
    let data = await productModel.find();
    console.log(data)

}
Search();