'use strict';
const test = require('ava');
const request = require('request');

require(__dirname + '/server.js');

test('true', t => {
  t.pass();
});

test.cb('get "/"', t => {
  request('http://localhost:3000', (error, response, body) => {
    const expected = JSON.stringify({ message: 'Hello, world!' });
    t.is(body, expected);
    t.end();
  });
});
