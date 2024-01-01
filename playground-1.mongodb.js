// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

// Create a new document in the collection.
//EX 1:

// db.linkedon.count({
//     salary:{
//         $gt: 25000
//     }
// })

//EX 2:
// db.linkedon.find({

// },{
//     _id:0,
//     firstName:1,salary:1
// }
// ).sort({
//     salary: -1
// }).limit(3)

//EX 3 :
// db.linkedon.count({
// $and:[
//     {"currentCompany.name":"Walmart"},
//     {salary:{$gte : 7000}}
// ]
// })

//EX 4 :

// db.linkedon.find({
//     $or:[
//         {"currentCompany.industry":"Sales"},
//         {"currentCompany.indusrty":"Retail"}  
//     ]
// },{
//     "currentCompany.name":1,
//     firstName:1,
//     lastName:1,
//     salary:1

// }).sort({
//     salary:-1
// }).limit(1)


//EX 5 :
// db.linkedon.count({
//     $or:[
//         {"currentCompany.name":"Apple"},
//         {"previousCompanies.name":"Apple"},
        
//     ]
// })


// Extension 1 :

// db.linkedon.aggregate([
    
//     { $match: { "currentCompany.name": "Apple" } },
//     {
//         $group:
//         {
//             _id: "$currentCompany.industry",
//             count: { $sum: 1 }
//         }
//     },
//     { $sort: { count: 1 } }
// ])

// db.linkedon.find({}) //or whichever operation