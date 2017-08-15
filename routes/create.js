var express =require('express');
var router=express.Router();
var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost/crud_db';

router.get('/',function(req,res){
	res.render('create_view');
});

router.post('/create_save',function(req,res){
	MongoClient.connect(url,function(err,db){
		db.collection('articles').save(req.body,function(err){
    	if (err) return console.log(err);
    	console.log('saved to database');
    	res.redirect('/');
  		});
	});
});

module.exports=router;