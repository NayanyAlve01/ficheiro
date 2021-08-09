const prompt = require('prompt');
const axios = require('axios').default;
const jwt_decode = require('jwt-decode');

prompt.start();
prompt.get(['username', 'password'], function (err, result) {
  if (err) { return onErr(err); }

  console.log('Digite seu Username e sua password:')
  console.log('  Username: ' + result.username);
  console.log('  password: ' + result.password);
  login(result.username, result.password).then(function (response) {
    console.log('RESPONSE: ', response);
  });
});

function onErr(err) {
  console.log(err);
  return 1;
}

function login(username, password) {
  const promise = new Promise(function (resolve, reject) {
    axios.post('https://challenge-api.debtges.com:40004/api/v1/auth/login', {
      username: username,
      password: password,
    }).then(function (response) {
      const token = response.data.data.access_token;
      const decoded = jwt_decode(token);
      resolve(decoded);
    }).catch(function (error) {
      reject('Error: ', error);
    });
  });
  return promise;
}