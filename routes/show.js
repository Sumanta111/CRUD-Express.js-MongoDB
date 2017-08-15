var express =require('express');
var router=express.Router();
var MongoClient=require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var url='mongodb://localhost/crud_db';

router.get('/:id',function(req,res){
	MongoClient.connect(url,function(err,db){
		var param = req.params.id;
		db.collection('articles').find({_id: new ObjectID(param)}).toArray(function(err,result){
		res.render('look_view',{
				data :result
			});
		}); 
	});
});
module.exports=router;