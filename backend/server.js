const { connect } = require("./configs/db.js");
const app = require("./app");


app.listen(process.env.PORT,async()=>{
    try {
        await connect();
        console.log(`Connection successful wiht port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})