var newToken = function(callback) {

	var token = {
		cardnumber: "",
		provider: "VISA",
		currency: "usd",
		firstname: "",
		lastname: "",
		month: "",
		year: "",
		cvv: "",
		addr1: "",
		addr2: "",
		zip: "",
		country: ""
	}

	callback(token);
}

module.exports = newToken;