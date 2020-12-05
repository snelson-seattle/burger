const orm = require("../config/orm.js");

let burger = {
    all: function(cb){
        orm.all("burgers", (results) => {
            cb(results);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, (results) => {
            cb(results);
        });
    }
};

module.exports = burger;