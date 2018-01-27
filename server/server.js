const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
const mongo = require('./models/MessageModel.js')
const eventCtrl = require('./controllers/messageController.js');
const bodyParser = require('body-parser')

var data;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../assets')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))

})
app.post('/quotes', (req, res) => {
 eventCtrl.postMessage(req, res)
    res.redirect('/')
  })





app.listen(3434, ()=> console.log('server up on port 3434'))