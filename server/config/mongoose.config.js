
const mongoose = require("mongoose");

const dbName = "mellowAppDB";

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to ${dbName}`))
.catch((err)=>console.log(err));