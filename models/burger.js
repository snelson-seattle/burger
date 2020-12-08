const orm = require("../config/orm.js");

let burger = {
    all: function(cb){
        orm.all("burgers", (result) => {
            cb(result);
        });
    },
    selectWhere: function(condition, cb){
        orm.selectWhere("burgers", condition, (result) => {
            cb(result);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, (result) => {
            cb(result);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, (result) => {
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