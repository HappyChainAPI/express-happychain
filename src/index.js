var lodash = require('lodash');
import "babel-polyfill";

exports.verify_parameters = function() {
    console.log("Verifying your parameters for method x");

}

exports.getBalance = function() {

  verify_parameters();

  console.log("Your happychain balance is $xx.xx");
}


exports.callApi = function() {

    verify_parameters();

    console.log("Curling https://happycha.in");
}