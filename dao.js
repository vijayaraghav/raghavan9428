var model=require('./model');
var sequelize=model.sequelize;
var propertiesReader=require('properties-reader');
var sqlQuery=propertiesReader('./Sql_Query.properties');
exports.createStudent=function(person,callback){
    var createquery=sqlQuery._properties.createStudent;
    sequelize.query(createquery,{
        replacements:{
            name:person.name,
            age:person.age
        },
        type : sequelize.QueryTypes.INSERT,
        model: model.student
      }).then(function(person) {
            callback(person);
        })
    }