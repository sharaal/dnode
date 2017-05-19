const assert = require('assert');

const parseDuration = require('../../../packages/parse-duration');

describe('/packages/parse-duration', () => {
  it('1 hour 20 minutes in milliseconds', () => {
    const actual = 4800000;
    const expected = parseDuration('1h 20m');
    assert.deepEqual(actual, expected);
  });

  it('1 hour 20 minutes in seconds', () => {
    const actual = 4800;
    const expected = parseDuration('1h 20m', 's');
    assert.deepEqual(actual, expected);
  });
});
