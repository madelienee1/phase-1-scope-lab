// Write your solution in this file!
// Bob

var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

console.log(customerName);

// Not Bob

function setBestCustomer() {
  window.bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Bob";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Winnie";
}
