const test = require('node:test');
const assert = require('node:assert/strict');
const Sentiment = require('sentiment');

test('positive text should have a positive sentiment score', () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze('I love this project');

    assert.ok(result.score > 0);
});
