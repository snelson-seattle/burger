const connection = require("./connection.js");

const orm = {
    all: function(tableName, cb) {
        let queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },
    delete: function(tableName, condition, cb) {
        let queryString = "DELETE FROM " + tableName;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    }
};



module.exports = orm;