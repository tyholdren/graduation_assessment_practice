// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const myURI = 'mongodb://localhost:/messageBoard';
var db;
// UNCOMMENT THE LINE BELOW IF USING MONGO
 const URI = process.env.MONGO_URI || myURI;

mongoose.connect(URI, (err, database) => {
db = database

});
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB');
  });

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

var messageSchema = new mongoose.Schema({
    password: String,
    message: String,
    createdAt:{ type: Date, default: Date.now }
})

var Message = mongoose.model("Message", messageSchema);



module.exports = URI, Message, db; // <-- export your model
