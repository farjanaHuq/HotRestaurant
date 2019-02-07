
var express = require("express");
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./route/apiRoute")(app);
require("./route/htmlRoute")(app);

app.listen(3000, function(){
    console.log("Listening");
});

