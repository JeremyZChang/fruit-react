const express = require('express')
const mongoose = require('mongoose')

// 连接MongoDB
const DB_URL = 'mongodb://localhost:27017/donwae'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})

// 类似于Mysql的表 Mongo中有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String, require:true},
    age:{type:Number, require:true}
}))

// 新建app
const app = express()

app.get('/',function (req, res) {
    res.send('<h1>Hello world</h1>')
})

// insert
app.get('/create', function (req, res) {
    User.create({
        user: "donwae",
        age: 18
    }, function (err, doc) {
        if(!err) {
            console.log(doc)
            res.json(doc)
        } else {
            console.log(err)
        }
    })
})

// query
app.get('/data', function (req, res) {
    User.find({}, function (err, doc) {
        if(!err) {
            console.log(doc)
            res.json(doc[0])
        } else {
            console.log(err)
        }
    })
})

// update
app.get('/update', function (req, res) {
    User.update({'age':18}, {'$set':{age:30}}, function (err, doc) {
        if(!err) {
            console.log(doc)
            res.json(doc)
        } else {
            console.log(err)
        }
    })
})

// delete
app.get('/delete', function (req, res) {
    User.remove({'__v':0}, function (err, doc) {
        if(!err) {
            console.log(doc)
            res.json(doc)
        } else {
            console.log(err)
        }
    })
})

app.listen(9093,function () {
    console.log('Start at 9093')
})