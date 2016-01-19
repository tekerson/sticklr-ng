import test from 'tape';

import mkStucker from './stucker';

test('A stucker plucks its `location` from its spec', (t) => {
  const location = {x: 50, y: 100};
  const dataURI = 'data:something';
  const sticker = mkStucker({location, dataURI});

  t.equal(sticker.location, location);
  t.end();
});

test('A stucker plucks its `dataURI` from its spec', (t) => {
  const location = {x: 50, y: 100};
  const dataURI = 'data:something';
  const sticker = mkStucker({location, dataURI});

  t.equal(sticker.dataURI, dataURI);
  t.end();
});
