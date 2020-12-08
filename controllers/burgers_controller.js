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
    burger.create(["burger_name"], [req.body.burger_name], (result) => {
        res.json({ id: result.insertId });
    }); 
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if(result.changedRows == 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
   let condition = "id = " + req.params.id;

   burger.delete(condition, (result) => {
       if(result.affectedRows == 0){
           return res.status(404).end();
       }else {
           res.status(200).end();
       }
   });
});

module.exports = router;
