var speakeasy = require('speakeasy');


var secret = speakeasy.generateSecret({length: 20});


console.log(secret.base32); //jw



var token = speakeasy.totp({
  secret: secret.base32,
  encoding: 'base32'
});

console.log(token);

var userToken = '121212'; // Verify the token the user gives

var verified = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: 'base32',
  token: userToken
});

console.log(verified);
