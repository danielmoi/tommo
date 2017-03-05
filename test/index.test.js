import test from 'ava';
import tommo from '../src';

test('Tommo works, mate', (t) => {
  const expected = 'Hey there, mate';

  const base = 'Hey there';
  const actual = tommo(base);

  t.is(expected, actual);
});
