module.exports = {
  'port':8671,
  'tls' : {
    'keyFile':  './tls/localhost/localhost-privatekey.pem',
    'certFile': './tls/localhost/localhost-public_cert.pem',
    'caFile': './tls/ca-bundles/some-ca-file.pem'
  }
};
