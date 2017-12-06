var dao=require('./dao');
var async=require('async');
exports.add=function(person,callback){
    //async.forEach(person)
    var addd = [];
    async.forEachOf(person,function(value,key){
        
        console.log(value);
        dao.createStudent(value,function(person,callback){
            console.log("returnedodj",person);
            //callback(person);
            addd.push(person);
            console.log("inside",addd);
            callback(addd);
            
    })
    //callback();
    //callback(addd);
   })
   
}

