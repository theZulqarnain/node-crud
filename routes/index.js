var express = require('express');
var router = express.Router();
var User = require('../models/User')

/* GET home page. */
router.get('/', function(req, res) {
    User.find({},function (err, users) {
        if(err){
            res.render('index',{users:"there is no user"})
        }else {
            res.render('index',{users:users})
        }

    })
});

module.exports = router;
