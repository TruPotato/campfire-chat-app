require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
var http = require("http").Server(app);
var dbUrl = `mongodb+srv://${process.env.USER}:${process.env.PASS}@campfirecluster.ty4xcsz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb connected', err);
});

const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile('Client/index.html', { root: __dirname + "/../" });
});

http.listen(process.env.PORT, function(){
    console.log(`listening on http://localhost:${process.env.PORT}`);
});