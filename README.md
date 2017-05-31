# Getting started with HappyChain NPM module
npm module for HappyChain

## Installation

Install and save happychain from npm.
```
npm install --save happychain
```

Then require it in your js file
```
var happychain = require('happychain');
```

## HappyChain API functions Reference

### HappyChain.getKey()

Inputs: email, password
Outputs: key, secret

Retrieves your key and secret if you already have an account. If you dont have an account, creates a new one and returns a key/secret. Outputs get returned into a callback.

_Note: We *dont* reccomend putting in a real password, auth details aren't being encrypted until they hit our api, do so at your own peril._

Usage:

```
var email = 'apiTest4@gmail.com';
var password = 'Adminadmin2017!';

happychain.getKey(email, password, function(auth_details) {
  var key = auth_details.key;
  var secret = auth_details.secret;

  console.log('client: happyPay.getKey()');
  console.log('email = '+email);
  console.log('key = '+key);
  console.log('secret = '+secret);
})
```

### HappyChain.newToken()

Inputs:
Outputs: token object

Generates an empty token object to be filled out into a callback. You can ```console.log()``` it to find out what the possible data fields are. You should call this on your client side and fill out the data fields there so that no credit card info touches your servers.

### HappyChain.tokenize()

Inputs: key, secret, token
Outputs: updated token object

Sends the card info to happychain servers and returns a token in a callback. The token is a redacted version of the information which is saveable on your servers without violating PCI compliancy. Like above, call only from the client side to make sure credit card info never touches your servers.

### HappyChain.chargeCard()

Inputs: key, secret, token, amount
Outputs: receipt

Actually charges the card. The tokenization and charge process are separated to facilitate recurring payments or a second attempt at a payment if the payment fails. Returns a receipt object in the callback. For now, the receipt object only has a success field.

### HappyChain.chargeEth() [COMING SOON]

Inputs: key, secret, to, from, from_key, amount
Outputs: 1st callback(transaction hash), 2nd callback(transaction receipt)

Not deployed yet because of some minor ```eth.filter()``` issues. This will eventually be an easy to integrate "Pay with Eth" button that works with metamask out of the box! 

## Example usage:

```
happyPay.getKey("email", "password", function(results){
	var key = results.key;
	var secret = results.secret;

	happyPay.newToken(function(token){
		token.cardnumber = "123456789101112";
		token.cvv = "123";

		happyPay.tokenize(key, secret, token, function(token) {
			var amount = 100
			console.log("key" + key)
			
			happyPay.chargeCard(key, secret, token, amount, function(receipt) {
				console.log(receipt);
			})
		});
	})
})
```
