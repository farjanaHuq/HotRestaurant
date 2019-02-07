// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var reserveArray = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Muller",
    customerEmail: "muller@example.com",
    customerID: "muller90",
    phoneNumber: "000-111-2222"
  },
  {
    customerName: "Yang",
    customerEmail: "yangr@example.com",
    customerID: "yang80",
    phoneNumber: "914-111-2222"
  },
  {
    customerName: "Sinha",
    customerEmail:"sinha@example.com",
    customerID: "sinha80",
    phoneNumber: "914-111-5555"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = reserveArray;
