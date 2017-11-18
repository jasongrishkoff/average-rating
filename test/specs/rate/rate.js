/**
 * Testing
 * @ndaidong
 */

const test = require('tape');

const AverageRating = require('../../../index');

const samples = require('../samples');

test('Testing "rate" method', (assert) => {
  samples.forEach((sample) => {
    let rating = sample.rating;
    let expect = sample.expect.score;
    let actual = Number(AverageRating.rate(rating));
    let s = rating.join(', ');
    assert.deepEqual(actual, expect, `.rage([${s}]) should be ${expect}`);
  });

  assert.end();
});
