var lodash = require('lodash');

// exports.verify_parameters = function() {
//     console.log("Verifying your parameters for method x");
//
// }



// // to do
// https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=npm+curl+module+example
//     https://www.npmjs.com/package/node-libcurl
//         https://github.com/JCMais/node-libcurl/blob/master/examples/post-data.js



module.exports = function () {

    var module = {};

    var apiKey = "";
    var apiSecrete = "";
    var contractName = "";
    var contractAddress = "";

    module.init.exports = function (api_key, api_secrete, contract_address) {
        this.apiKey = api_key;
        this.apiSecrete = api_secrete;
        this.contractAddress = contract_address;
    }

    module.createContract = function (contractName) {
        console.log("Your happychain balance is $xx.xx");

        require('child_process').exec(
            'curl -XPOST https://api.happycha.in/create_contract -d {' +
            'api_key:' + apiSecrete + ',' +
            'api_secret:' + apiKey + ',' +
            'contract_name:' + contractName +
            '}'

        );
    };


    module.listContracts = function () {

        console.log("listContracts() ");
    }


    module.balanceOf = function () {

        console.log("balanceOf() ");
    }


    // module.getBalance = function () {
    //
    //     console.log("getBalance() ");
    // }
    //
    //
    // module.callApi = function () {
    //
    //     //verify_parameters();
    //
    //     console.log("Curling https://happycha.in");
    // }
    //

}




