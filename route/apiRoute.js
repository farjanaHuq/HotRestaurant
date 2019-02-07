var reservationData = require("../data/reservationData");
var waitingListData = require("../data/waitinglistData");

module.exports = function(app) {
   
    app.get("/api/tables", function (req, res) {
        res.json(reservationData);
    });

    app.get("/api/waitlist", function (req, res) {
        res.json(waitingListData);
    });

    app.post("/api/tables", function(req, res) {
       
        if (reservationeData.length < 5) {
          tableData.push(req.body);
          res.json(true);
        }
        else {
          waitingListData.push(req.body);
          res.json(false);
        }
      });
}
