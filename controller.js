var express=require('express');
var app=express();
var service=require('./service')
//var fs=require('fs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/getstudentsdetails',function(req,res){
    var person=req.body;
    console.log(person);
    console.log("------",person.name);
    console.log("-----",person.name);
   service.add(person,function(data){
    console.log("##########",data)
       res.json(data);
   })   
});
var server = app.listen(8081,function(){

});
