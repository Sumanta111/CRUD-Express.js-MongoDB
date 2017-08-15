var express=require('express');
var http =require('http');
var app =express();
var bodyParser=require('body-parser');
var home_js=require('./routes/index');
var create_js=require('./routes/create');
var show_js=require('./routes/show');
var update_js=require('./routes/update');

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/',home_js);
app.use('/view',show_js);
app.use('/update',update_js);
app.use('/create',create_js);

http.createServer(app).listen(8080,function(){
	console.log('server started..port*8080....');
});