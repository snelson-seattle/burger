const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(data => {
        // Create an object for handlebars
        let hbsOjbect = {
            burgers: data
        };
        res.render("index", hbsOjbect);
    });
});

router.post("/api/burgers", (req, res) => {

});

router.put("/api/burgers/:id", (req, res) => {

});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    burger.delete(condition, (result) =>{
        if(result.affectedRows == 0){
            // If not rows were changed, then the ID was not found
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
