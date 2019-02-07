// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

 
var waitingListArray = [
  {
    customerName: "Salima",
    customerEmail: "salima@example.com",
    phoneNumber: "000-000-0000",
    customerID: "salimaSweety"
  },
  {
    customerName: "Sammy",
    customerEmail: "sammy@example.com",
    phoneNumber: "000-000-0000",
    customerID: "sammydude"
  },
  {
    customerName: "Saimon",
    customerEmail: "saimon@example.com",
    phoneNumber: "000-000-0000",
    customerID: "saimonCool"
  }
];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingListArray;
