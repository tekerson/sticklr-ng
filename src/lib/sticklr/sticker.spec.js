import test from 'tape';

import mkSticker from './sticker';

test('A sticker plucks its `title` from its spec', (t) => {
  const title = 'Some title';
  const dataURI = 'data:something';
  const sticker = mkSticker({title, dataURI});

  t.equal(sticker.title, title);
  t.end();
});

test('A sticker plucks its `dataURI` from its spec', (t) => {
  const title = 'Some title';
  const dataURI = 'data:something';
  const sticker = mkSticker({title, dataURI});

  t.equal(sticker.dataURI, dataURI);
  t.end();
});
