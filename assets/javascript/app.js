$( document ).ready(function() {
    e.preventDefault();
    
    
function runTablesQuery(){
    var currentURL = window.location.origin;
    $.ajax({
        url: currentURL +'/api/tables',
        method: "GET"
    }).then(function (reserveArray) {
        console.log("-----------------------------------");
        console.log(`URL : ${currentURL} +'/api/tables' `);
        console.log("-----------------------------------");
        console.log(reserveArray);
        console.log("-----------------------------------");

        for(var i = 0; i<reserveArray.length; i++){

            var tableList = $("#tableList");
            var listItem = $("<li class='list-group-item mt-4'>");

                listItem.append(
                        $("<h2>").text("Table #" + (i + 1)),
                        $("<hr>"),
                        $("<h2>").text("ID: "     +  reserveArray[i].customerID),
                        $("<h2>").text("Name: "   +  reserveArray[i].customerName),
                        $("<h2>").text("Email: "  + reserveArray[i].customerEmail),
                        $("<h2>").text("Phone: "  + reserveArray[i].phoneNumber)
                        );

                tableList.append(listItem);
        }
    });
};

function runWaitListQuery(){

    var currentURL = window.location.origin;
    $.ajax({
        url: currentURL +'/api/waitlist',
        method: "GET"
    }).then(function (waitingListArray) {
        console.log("-----------------------------------");
        console.log(`URL : ${currentURL} + '/api/waitlist' `);
        console.log("-----------------------------------");
        console.log(waitingListArray);
        console.log("-----------------------------------");
        
        for(var i = 0; i<waitingListArray; i++){
             var waitList = $("#waitList");
             var listItem = $("<li class='list-group-item mt-4'>");
             
             listItem.append(
                $("<h2>").text("Table #" + (i + 1)),
                $("<hr>"),
                $("<h2>").text("ID: "     + reserveArray[i].customerID),
                $("<h2>").text("Name: "   + reserveArray[i].customerName),
                $("<h2>").text("Email: "  + reserveArray[i].customerEmail),
                $("<h2>").text("Phone: "  + reserveArray[i].phoneNumber)
             );
             waitList.append(listItem);

        }

    });
}

runTablesQuery();
runWaitListQuery();
});