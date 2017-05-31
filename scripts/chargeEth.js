var Web3 = require('web3');
var validateKey = require('./validateKey');

var chargeEth = function(key, secret, to, from, from_key, amount, callback) {

	if (typeof web3 !== 'undefined') {
		console.log('web3.js: web3 is defined!');
			var web3 = new Web3(web3.currentProvider);
	} else {
		var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		web3.isConnected() ? console.log('web3.js: Connected to web3!') : console.log('web3 is not connected');
	}

	validateKey(key, secret, function(error, result) {
		if(error) callback(error);
		else {
			web3.eth.defaultAccount = web3.eth.accounts[0];
		    web3.personal.unlockAccount(web3.eth.defaultaccount, from_key);
			//send transaction
			web3.eth.sendTransaction({
				from: from,
				to: to,
				value: amount,
				gas: 30000
			}, function (err, tx_hash) {
				if (err) res.send({error: err});
				//set watcher to check if tx has been mined
				var filter = web3.eth.filter({fromBlock: 340000, toBlock: 'latest', address: tx_hash}, function(error, result){
	  	 			if (!error) {
						web3.eth.getTransactionReceipt(tx_hash, function(err, receipt) {
							filter.stopWatching();
							// saveCharge(uid, amount, "coin");
							callback(receipt)
						});
					} else { 
						filter.stopWatching();
						callback(error)
					}
				})
			})
		}
	})
}

module.exports = chargeEth;