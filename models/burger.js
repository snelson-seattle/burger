const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },
    selectWhere: function(condition, cb){
        orm.selectWhere("burgers", condition, (result) => {
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (result) => {
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (result) => {
            cb(result);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, (result) => {
            cb(result);
        });
    }
};

module.exports = burger;