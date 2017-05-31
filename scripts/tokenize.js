var request = require('request');

var tokenize = function(key, secret, token, callback) {

	var options = {
	  url: 'http://happycha.in/tokenize/',
	  method: 'POST',
	  json: true,
	  body: {
	  	"token": token,
	  	"key": key,
	  	"secret": secret
	  },
	  headers: {
	    'Authentication': secret
	  }
	};

	request(options, function(error, response, body) {
		token = body.token;
		if(!error && response.statusCode == 200) {
			console.log("Succesfully tokenized!")
			token.cardnumber = "****************";
			callback(token);
		} else console.log(error);
	})
}

module.exports = tokenize;