const dbconnect = require('./mongodb')

const insert = async()=>{
    let db = await dbconnect();
    let result = await db.insertMany(
        [{name:'Opp0',price:500},
          {name:'poco',price:400}]
    )
    // console.log(result)

}
insert()