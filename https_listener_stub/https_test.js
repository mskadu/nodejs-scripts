// # Node JS script to test connection over TLS
// # Requires
// # 	- private key and signed (self or otherwise) certificate for the host the app will listen on
// #	- config.js with the necessary tls properties set 
// # 
// # Testing
// #	Preferred method is via cURL tool, as follows:
// #
// # 		curl -k https://localhost:8671/ -X POST --data @./some/input/folder/test_data.xml -v
// #	
// #	Note: Remove -k if the server certificate is not self-signed
// #
// #	Known limitations:
// #		>> testing pending for requesting certificates from client (Mutual Auth) - TBD in 
// #		   Integration Testing. See 'requestCert' param below
// #		>> Use of CA file(s) for above. See 'tls_options.ca' below
// #
var express = require('express')
var app = express()
var fs = require('fs')

var https = require('https')

var config 				= 	require('./config.js');
// General stuff
let configPort			= config.port			||	'8671';	
>>>>>>> 35d66813e2e0cfe1aa09daec59dc291e299f3c09
// Config TLS certs
let tlsKeyFilename		= config.tls.keyFile 	|| './tls/defaultKey.pem';
let tlsCertFilename		= config.tls.certFile 	|| './tls/defaultCert.pem';
let tlsCAFilename		= config.tls.caFile		|| './tls/defaultCA.pem';
// TLS setup
var https_options = {
    key: fs.readFileSync(tlsKeyFilename),	// private key
    cert: fs.readFileSync(tlsCertFilename),	// public key/ signed certificate
	requestCert:		false,	// default=false -  server will request a certificate from clients that connect and attempt to verify that certificate
	rejectUnauthorized:	true	// default=true - active only if requestCert = true
	// ca: [ fs.readFileSync(tlsCAFilename) ],
	// checkServerIdentity: () => { return null; }
};

app.use(express.urlencoded({ extended: true }))	// support MIME: application/x-www-form-urlencoded - for testing only

app.post('/', function (req, res) {

  console.log('<<- POST request to the homepage')
  res.status(200).send('SUCCESS')
  console.log(req.body);
  console.log("Response to POST sent ->>");
})

// Express error handler
app.use(function (err, req, res, next) {
  console.error("Error: %s". err.message)
  console.debug(err.stack)
  res.status(500).send('Something broke!')
})

https.createServer(https_options, app)
	 .listen(configPort, () => {
	console.log("Listening on port %s - ready!", configPort);
<<<<<<< HEAD
});
=======
});

>>>>>>> 35d66813e2e0cfe1aa09daec59dc291e299f3c09
