# HappyPayNPM
npm module for HappyPay

## Installation

For now, just clone the repo. We'll get it up on npm soon.

`git clone .....`

Then require it in your js file

`var happypay = require('./_path_/_to_/happypay.js);`

## Reference

### getKey()

Inputs: email, password
Outputs: key, secret

Retrieves your key and secret if you already have an account. If you dont have an account, creates a new one and returns a key/secret. Outputs get returned into a callback.

_Note: We *dont* reccomend putting in a real password, auth details aren't being encrypted until they hit our api, do so at your own peril._

Usage:

```
happyPay.getKey(email, password, function(auth_details) {
   var key = auth_details.key;
   var secret = auth_details.secret;
}) 
```

### newToken()

Inputs:
Outputs: token object

Generates an empty token object to be filled out into a callback. You can ```console.log()``` it to find out what the possible data fields are. You should call this on your client side and fill out the data fields there so that no credit card info touches your servers.

### tokenize()

Inputs: key, secret, token
Outputs: updated token object

Sends the card info to happychain servers and returns a token in a callback. The token is a redacted version of the information which is saveable on your servers without violating PCI compliancy. Like above, call only from the client side to make sure credit card info never touches your servers.

### chargeCard()

Inputs: key, secret, token, amount
Outputs: receipt

Actually charges the card. The tokenization and charge process are separated to facilitate recurring payments or a second attempt at a payment if the payment fails. Returns a receipt object in the callback. For now, the receipt object only has a success field.

### chargeEth() [COMING SOON]

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
