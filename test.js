'use strict';
const assert = require('assert');
const request = require('request');

require(__dirname + '/server.js');

describe('tests', () => {
  it('gets "/"', (done) => {
    request('http://localhost:3000', (error, response, body) => {
      const expected = JSON.stringify({ message: 'Hello, world!' });
      assert.equal(body, expected);
      done();
    });
  });
});
