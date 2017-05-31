var getKey = require('./scripts/getKey');
// var initialize = require('./scripts/initialize');
var tokenize = require('./scripts/tokenize');
var chargeCard = require('./scripts/chargeCard');
// var chargeEth = require('./scripts/chargeEth');
var newToken = require('./scripts/newToken');

module.exports = {
	getKey: function(email, password, callback) {
		getKey(email, password, callback);
	},
	tokenize: function(key, secret, token, callback) {
		tokenize(key, secret, token, callback);
	},
	chargeCard: function(key, secret, token, amount, callback) {
		chargeCard(key, secret, token, amount, callback);
	},
	// chargeEth: function(key, secret, to, from, from_key, amount, callback) {
	// 	chargeEth(key, secret, to, from, from_key, amount, callback);
	// },
	newToken: function(callback){
		newToken(callback);
	}
}
