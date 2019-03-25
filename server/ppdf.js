const express = require('express')
const utils = require('utility')

const data = require('./data')

const Router = express.Router()

Router.get('/spnego_user_session', function (req, res) {
    // console.log(req.query)
    return res.json(data.spnego_user_session)
})

Router.get('/api/v1/provision/products', function (req, res) {
    // const {_id} = req.query
    return res.json(data.listProducts)
})

Router.post('/login', function(req, res){
    console.log(req.body)
    const {user,pwd} = req.body
    return res.json({code:0,data:1})
})

Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body
    if(doc) {
        return res.json({code:1,msg:'用户名重复'})
    }

    userModel.save(function (err, doc) {
        if(err) {
            return res.json({code:1,msg:'error'})
        }
        const {user,type,_id} = doc
        res.cookie('userId', _id)
        return res.json({code:0,data:{user,type,_id}})
    })

})

Router.get('/info', function (req, res) {
    // 检查有没有Cookies
    const {userId} = req.cookies
    if(!userId){
        return res.json({code:1})
    }
            return res.json({code:0,data:doc})
})

module.exports = Router

// Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
// Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
// Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
// Mock.mock(/\/spnego_user_session\.*/, 'get', loginAPI.getSessionUserInfo)
//
// // 文章相关
// Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
// Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
// Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
// Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
// Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)
//
// // 搜索相关
// Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)
//
// // 账单相关
// Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)
//
// // 精算条款相关
// Mock.mock(/\/api\/v1\/provision\/products/, 'post', provisionAPI.listProducts)
// Mock.mock(/\/api\/v1\/provision\/copy_product/, 'post', provisionAPI.copyProduct)
// Mock.mock(/\/api\/v1\/provision\/preview/, 'post', provisionAPI.previewProduct)
// Mock.mock(/\/api\/v1\/provision\/product/, 'post', provisionAPI.createProduct)
// Mock.mock(/\/api\/v1\/provision\/product/, 'put', provisionAPI.updateProduct)
// Mock.mock(/\/api\/v1\/provision\/product\//, 'get', provisionAPI.getProduct)