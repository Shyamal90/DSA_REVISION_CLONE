const app = require("./app");
const dotenv = require("dotenv");

//configs
dotenv.config({path:'.env'});


app.listen(process.env.PORT,()=>{
    console.log(`Connection Successful with ${process.env.PORT}`)
})