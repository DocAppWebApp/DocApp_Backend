let atlasdb = require('./dbconfig').ATLASDB; //Connection using dbconfing link for the Atlas server

const { default: mongoose } = require('mongoose'); //using mongoose for connection

module.exports = function() {
    mongoose.connect(atlasdb);

    let mongodb = mongoose.connection;

    mongodb.on("error", console.error.bind(console, "conection error: "));

    mongodb.once("open", ()=>{
        console.log("======> Connected to MongoDB") //Prompt message
    })

    return mongoose;
}