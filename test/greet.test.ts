import assert from 'assert';
import { greet } from '../src/greet';

describe('greet', () => {
  it('should return the correct greeting', () => {
    const actual = greet('Tuan');
    const expected = 'Hello, Tuan';

    assert.equal(actual, expected);
  });
});
