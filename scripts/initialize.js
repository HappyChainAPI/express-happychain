var tokenize = require('./tokenize');
var chargeCard = require('./chargeCard');
var chargeEth = require('./chargeEth');

module.exports = function(key, secret) {
	return {
		tokenize: function() {
			tokenize(key, secret);
		},
		chargeCard: function() {
			chargeCard(key, secret);
		},
		chargeEth: function() {
			chargeEth(key, secret);
		}
	}
}