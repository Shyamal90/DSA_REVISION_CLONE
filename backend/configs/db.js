const mongoose = require("mongoose");

const connect = () =>{
    return  (mongoose.connect(`mongodb+srv://shyamal:mongooseShyamal46@#@cluster0.yr814.mongodb.net/DSA_Revision?retryWrites=true&w=majority`).then(()=>{
    console.log("Connection successful with database");
}).catch((error)=> console.log(error))
    )}


module.exports = connect;