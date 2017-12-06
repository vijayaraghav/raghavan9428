'use strict';
module.exports=function(sequelize,DataTypes){
    var student=sequelize.define("studentslist",{
            name:DataTypes.STRING,
            age:DataTypes.INTEGER

    });
    return student;
}
