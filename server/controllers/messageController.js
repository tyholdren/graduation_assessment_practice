const Event = require('../models/MessageModel.js');
const server = require('../server.js')
var Message = Event.Message
var db = Event.db

function postMessage(req, res) {
   var password = req.body.password
   var message = req.body.message
   console.log(req.body.message)
   var newmessage = {password: password, message: message}
Message.create(newmessage, (err, newlyCreated) =>{
    if(err) {console.log(err)}
    else {res.redirect('/')}
})

}


    function getMessages(req, res) {
    
    }
    
    function deleteMessage(req, res) {
    
    }

    module.exports = { getMessages, deleteMessage, postMessage};
