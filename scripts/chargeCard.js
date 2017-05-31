var request = require('request');

var chargeCard = function(key, secret, token, amount, callback) {

	if(token.cvv === null) {
		console.log("Error: check card information");
		return "error";
	}

	var options = {
	  url: 'http://happycha.in/chargeCard/',
	  method: 'POST',
	  json: true,
	  body: {
	  	"token": token,
	  	"key": key,
	  	"secret": secret,
	  	"amount": amount
	  },
	  headers: {
	    'Authentication': secret
	  }
	};

	request(options, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			console.log(body)
			callback(body.receipt);
		} else callback(error);
	})
}

module.exports = chargeCard;