var express =require('express');
var router=express.Router();
var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost/crud_db';

router.get('/',function(req,res){
	MongoClient.connect(url,function(err,db){
		var cursor=db.collection('articles').find().toArray(function(err,result){
			//console.log(result);
			res.render('show_view',{
				quotes:result
			});
		});
	});
});
module.exports=router;