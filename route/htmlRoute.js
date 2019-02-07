var path = require("path");


module.exports = function(app){

        app.get("/", function(req, res) {
            console.log(__dirname);
            res.sendFile(path.join(__dirname, "../resources/home.html"));
            
        });

        app.get("/tables", function(req, res) {
            console.log(__dirname);
            res.sendFile(path.join(__dirname, "../resources/tables.html"));
            
        });

        app.get("/reserve", function(req, res) {
            console.log(__dirname);
            res.sendFile(path.join(__dirname, "../resources/reserve.html"));
            
        });

        app.get("/style.css", function(req, res) {
            console.log(__dirname);
            res.sendFile(path.join(__dirname, "../assets/css/style.css"));
            
        });

};